import React from 'react'
import { helmetJsonLdProp } from 'react-schemaorg'
import { ItemList } from 'schema-dts'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { ProjectsLayout, IProjectsLayoutProps } from '../layouts/ProjectsLayout'
import { allMdxProjectsJsonLdGenerator } from '../utils/allMdxProjectsJsonLdGenerator'

function ProjectsPage(): JSX.Element {
  const data: IProjectsLayoutProps = {
    programmingData: StaticDataManager.projectsData.allProgramming,
    graphicDesignData: StaticDataManager.projectsData.allGraphicDesign,
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
            itemListElement: allMdxProjectsJsonLdGenerator({
              projectsData: data.programmingData,
              siteMetadata: StaticDataManager.siteMetadata,
            }),
          }),
          helmetJsonLdProp<ItemList>({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            description: 'Graphic design projects',
            itemListElement: allMdxProjectsJsonLdGenerator({
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
