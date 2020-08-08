/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import { resolve } from 'path'

import {
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
  AllMdxData,
  AllMdxEdge,
} from './src/types/gatsby.types'

export async function createPages({
  actions: { createPage },
  graphql,
  reporter,
}: CreatePagesArgs): Promise<void> {
  /**
   * TEMPLATE IMPORTS
   */
  const ProjectTemplate: string = resolve(`src/templates/ProjectTemplate.tsx`)
  const SkillsetTemplate: string = resolve(`src/templates/SkillsetTemplate.tsx`)
  const {
    errors,
    data,
  }: { errors?: Error[]; data: AllMdxData } = await graphql(`
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

  data.allMdx.edges.forEach(
    ({ node: { generatedRoute } }: AllMdxEdge): void => {
      const templatePath: string = generatedRoute.split('/')[1] // 'blog'

      const pagesToCreate: {
        [key: string]: () => void | null
      } = {
        projects: (): void =>
          createPage({
            path: generatedRoute,
            component: ProjectTemplate,
            context: {}, // additional data can be passed via context
          }),
        skillset: (): null => null,
        blog: (): null => null,
        tag: (): null => null,
        experiences: (): null => null,
      }

      pagesToCreate[templatePath]()
    }
  )

  const tagsArray: (string | string[])[] = [
    ...data.allMdx.edges
      .filter(({ node: { generatedRoute } }: AllMdxEdge): boolean =>
        generatedRoute.includes('/projects/')
      )
      .map(
        ({
          node: {
            frontmatter: { tags },
          },
        }: AllMdxEdge): string[] => tags!
      ),
    ...data.allMdx.edges
      .filter(({ node: { generatedRoute } }: AllMdxEdge): boolean =>
        generatedRoute.includes('/skillset/')
      )
      .map(
        ({
          node: {
            frontmatter: { title },
          },
        }: AllMdxEdge): string => title!
      ),
  ]

  const baseArray: string[] = [] // Required to silence the compiler about inferring ConcatArray<never> in previous approach
  const flatTagsArray: string[] = baseArray.concat.apply(baseArray, tagsArray)
  const uniqueTags: string[] = Array.from(new Set(flatTagsArray))

  uniqueTags.map((tag: string): void => {
    const subDirectory: string = `/skillset/${tag
      .toLocaleLowerCase()
      .replace(/\s+/gi, '_')}`

    createPage({
      path: subDirectory,
      component: SkillsetTemplate,
      context: { tag },
    })
  })
}

export function createSchemaCustomization({
  actions: { createTypes },
}: CreateSchemaCustomizationArgs): void {
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

export function createResolvers({
  // tslint:disable-next-line: no-shadowed-variable
  createResolvers,
}: CreateSchemaCustomizationArgs): void {
  const resolvers: {} = {
    Mdx: {
      generatedRoute: {
        resolve(source: { fileAbsolutePath: string }): string {
          const markdownPagePath: string = source.fileAbsolutePath.match(
            /(markdown-pages)\/(\w+\/)+/gi
          )![0]! // 'markdown-pages/blog/article/'
          const relativeFolder: string = markdownPagePath.replace(
            'markdown-pages/',
            '/'
          ) // '/blog/article/'
          const generatedRoute: string = relativeFolder.substring(
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
