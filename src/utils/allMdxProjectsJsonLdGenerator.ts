import {
  SiteMetadata,
  AllMarkdownRemark,
  ProjectFrontmatter,
  ProjectMarkdownEdge,
} from '../types/graphql.types'
import { ListItem, ItemList } from 'schema-dts'

export type AllMdxProjectsJsonLdGenerator = {
  projectsData: AllMarkdownRemark<ProjectFrontmatter>
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
      }: ProjectMarkdownEdge,
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
