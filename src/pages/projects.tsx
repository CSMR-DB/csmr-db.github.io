import React from 'react'
import { helmetJsonLdProp } from 'react-schemaorg'
import { ItemList } from 'schema-dts'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { ProjectsLayout, IProjectsLayoutProps } from '../layouts/ProjectsLayout'
import { allMdxJsonLdGenerator } from '../utils/allMdxJsonLdGenerator'

function ProjectsPage(): JSX.Element {
  const data: IProjectsLayoutProps = {
    programmingData: StaticDataManager.programmingData.all,
    ...StaticDataManager.graphicDesignData,
  }

  return (
    <>
      <SEO
        title="Projects"
        description="These are some projects I did"
        siteMetadata={StaticDataManager.siteMetadata}
        route={'/projects'}
        jsonLd={[
          helmetJsonLdProp<ItemList>({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            description: 'Software projects',
            itemListElement: allMdxJsonLdGenerator({
              projectsData: data.programmingData,
              siteMetadata: StaticDataManager.siteMetadata,
            }),
          }),
          helmetJsonLdProp<ItemList>({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            description: 'Graphic design projects',
            itemListElement: allMdxJsonLdGenerator({
              projectsData: data.graphicDesignData,
              siteMetadata: StaticDataManager.siteMetadata,
            }),
          }),
        ]}
      />
      <ProjectsLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default ProjectsPage
