import {
  SiteMetadata,
  AllMarkdownRemark,
  SkillsetFrontmatter,
  SkillsetMarkdownEdge,
} from '../types/graphql.types'
import { ListItem, ItemList } from 'schema-dts'

import { routeGenerator } from './routeGenerator'

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
          fileAbsolutePath,
        },
      }: SkillsetMarkdownEdge,
      index: number
    ): ListItem => ({
      '@type': 'ListItem',
      name: title,
      description: excerpt,
      position: index,
      url: `${siteMetadata.site.siteMetadata.url}${routeGenerator(
        fileAbsolutePath
      )}`,
    })
  )
}
