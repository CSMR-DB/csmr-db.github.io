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
  const ArticleTemplate = path.resolve(`src/templates/ArticleTemplate.tsx`)
  // const SkillsetTemplate = path.resolve(`src/templates/SkillsetTemplate.tsx`)
  const TagTemplate = path.resolve(`src/templates/TagTemplate.tsx`)
  const { errors, data } = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
              title
            }
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

  data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { path },
      },
    }) => {
      let category = path.match(/\/[a-z]*\/+/)[0]

      const pagesToCreate = {
        '/projects/': () =>
          createPage({
            path: path,
            component: ArticleTemplate,
            context: {}, // additional data can be passed via context
          }),
        // '/skillset/': () =>
        //   createPage({
        //     path: path,
        //     component: SkillsetTemplate,
        //     context: {}, // additional data can be passed via context
        //   }),
        // '/blog/': () =>
        //   createPage({
        //     path: path,
        //     component: SkillsetTemplate,
        //     context: {}, // additional data can be passed via context
        //   }),

        '/skillset/': () => null,
        '/blog/': () => null,
        '/tag/': () => null,
        '/experiences/': () => null,
      }

      pagesToCreate[category]()
    }
  )

  const tagsArray = [
    ...data.allMarkdownRemark.edges
      .filter(({ node: { frontmatter: { path } } }) => path.includes('project'))
      .map(
        ({
          node: {
            frontmatter: { tags },
          },
        }) => tags
      ),
    ...data.allMarkdownRemark.edges
      .filter(({ node: { frontmatter: { path } } }) => path.includes('tag'))
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

  uniqueTags.map((tag) =>
    createPage({
      path: `/tag/${tag.toLocaleLowerCase().replace(/\s+/gi, '_')}`,
      component: TagTemplate,
      context: { tag },
    })
  )
}
