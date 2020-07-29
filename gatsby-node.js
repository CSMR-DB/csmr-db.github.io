/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  /**
   * TEMPLATE IMPORTS
   */
  const ProjectTemplate = path.resolve(`src/templates/ProjectTemplate.tsx`)
  const SkillsetTemplate = path.resolve(`src/templates/SkillsetTemplate.tsx`)
  const { errors, data } = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              tags
              title
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  data.allMarkdownRemark.edges.forEach(({ node: { fileAbsolutePath } }) => {
    let pageDirectory = fileAbsolutePath.match(
      /(markdown-pages)\/(\w+\/)+/gi
    )[0] // 'markdown-pages/blog/article/'
    let subDirectory = pageDirectory.replace('markdown-pages/', '/') // '/blog/article/'
    let templatePath = subDirectory.split('/')[1] // 'blog'

    const pagesToCreate = {
      projects: () =>
        createPage({
          path: subDirectory,
          component: ProjectTemplate,
          context: {}, // additional data can be passed via context
        }),
      skillset: () => null,
      blog: () => null,
      tag: () => null,
      experiences: () => null,
    }

    pagesToCreate[templatePath]()
  })

  const tagsArray = [
    ...data.allMarkdownRemark.edges
      .filter(({ node: { fileAbsolutePath } }) =>
        fileAbsolutePath.includes('/projects/')
      )
      .map(
        ({
          node: {
            frontmatter: { tags },
          },
        }) => tags
      ),
    ...data.allMarkdownRemark.edges
      .filter(({ node: { fileAbsolutePath } }) =>
        fileAbsolutePath.includes('/skillset/')
      )
      .map(
        ({
          node: {
            frontmatter: { title },
          },
        }) => title
      ),
  ]

  const flatTagsArray = [].concat.apply([], tagsArray)
  const uniqueTags = Array.from(new Set(flatTagsArray))

  uniqueTags.map((tag) => {
    const subDirectory = `/skillset/${tag
      .toLocaleLowerCase()
      .replace(/\s+/gi, '_')}/`

    createPage({
      path: subDirectory,
      component: SkillsetTemplate,
      context: { tag },
    })
  })
}
