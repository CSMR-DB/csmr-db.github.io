import React from 'react'
import { helmetJsonLdProp } from 'react-schemaorg'
import { Person } from 'schema-dts'

import { StaticDataManager } from '../data/DataManager'
import { MarkdownRemark, SkillsetFrontmatter } from '../types/graphql.types'

import { SEO } from '../components/compositions/SEO'
import { SkillsetLayout, ISkillsetLayoutProps } from '../layouts/SkillSetLayout'

function SkillsetPage(): JSX.Element {
  const data: ISkillsetLayoutProps = {
    programmingData: StaticDataManager.skillsetData.allProgramming,
    graphicDesignData: StaticDataManager.skillsetData.allGraphicDesign,
    ...StaticDataManager.experienceData,
  }

  function getSkillTitles({
    node,
  }: {
    node: MarkdownRemark<SkillsetFrontmatter>
  }): string {
    return node.frontmatter.title
  }
  const knowsAbout: string[] = [
    ...data.programmingData.edges.map(getSkillTitles),
    ...data.graphicDesignData.edges.map(getSkillTitles),
  ]

  return (
    <>
      <SEO
        title="Skillset"
        description="You can find out what I am capable of and what I really want to learn here."
        siteMetadata={StaticDataManager.siteMetadata}
        route={'/skillset'}
        jsonLd={[
          helmetJsonLdProp<Person>({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: StaticDataManager.siteMetadata.author,
            knowsAbout,
          }),
        ]}
      />
      <SkillsetLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default SkillsetPage
