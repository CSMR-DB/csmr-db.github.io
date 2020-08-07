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
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              tags
              title
            }
            generatedRoute
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

  data.allMdx.edges.forEach(({ node: { generatedRoute } }) => {
    let templatePath = generatedRoute.split('/')[1] // 'blog'

    const pagesToCreate = {
      projects: () =>
        createPage({
          path: generatedRoute,
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
    ...data.allMdx.edges
      .filter(({ node: { generatedRoute } }) =>
        generatedRoute.includes('/projects/')
      )
      .map(
        ({
          node: {
            frontmatter: { tags },
          },
        }) => tags
      ),
    ...data.allMdx.edges
      .filter(({ node: { generatedRoute } }) =>
        generatedRoute.includes('/skillset/')
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
      .replace(/\s+/gi, '_')}`

    createPage({
      path: subDirectory,
      component: SkillsetTemplate,
      context: { tag },
    })
  })
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Mdx implements Node {
      generatedRoute: String
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      icon: String @mdx
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Mdx: {
      generatedRoute: {
        resolve(source, args, context, info) {
          let markdownPagePath = source.fileAbsolutePath.match(
            /(markdown-pages)\/(\w+\/)+/gi
          )[0] // 'markdown-pages/blog/article/'
          let relativeFolder = markdownPagePath.replace('markdown-pages/', '/') // '/blog/article/'
          let generatedRoute = relativeFolder.substring(
            0,
            relativeFolder.length - 1
          ) // '/blog/article'

          return generatedRoute
        },
      },
    },
  }
  createResolvers(resolvers)
}
