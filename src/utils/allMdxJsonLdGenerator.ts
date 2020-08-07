import {
  SiteMetadata,
  AllMarkdownRemark,
  SkillsetFrontmatter,
  SkillsetMarkdownEdge,
} from '../types/graphql.types'
import { ListItem, ItemList } from 'schema-dts'

export function allMdxJsonLdGenerator({
  projectsData,
  siteMetadata,
}: {
  projectsData: AllMarkdownRemark<SkillsetFrontmatter>
  siteMetadata: SiteMetadata
}): ItemList['itemListElement'] {
  return projectsData.edges.map(
    (
      {
        node: {
          frontmatter: { title, excerpt },
          generatedRoute,
        },
      }: SkillsetMarkdownEdge,
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
