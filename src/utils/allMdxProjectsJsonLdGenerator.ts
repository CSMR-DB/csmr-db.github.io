import { MarkdownEdge } from './../types/graphql.types'
import {
  SiteMetadata,
  AllMarkdownRemark,
  FrontmatterBase,
} from '../types/graphql.types'
import { ListItem, ItemList } from 'schema-dts'

export type AllMdxProjectsJsonLdGenerator = {
  projectsData: AllMarkdownRemark<FrontmatterBase>
  siteMetadata: SiteMetadata
}

export function allMdxProjectsJsonLdGenerator({
  projectsData,
  siteMetadata,
}: AllMdxProjectsJsonLdGenerator): ItemList['itemListElement'] {
  return projectsData.edges.map(
    (
      {
        node: {
          frontmatter: { title, excerpt },
          generatedRoute,
        },
      }: MarkdownEdge<FrontmatterBase>,
      index: number
    ): ListItem => ({
      '@type': 'ListItem',
      name: title,
      description: excerpt,
      position: index,
      url: `${siteMetadata.url}${generatedRoute}`,
    })
  )
}
