import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { ProjectsLayout, IProjectsLayoutProps } from '../layouts/ProjectsLayout'

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
      />
      <ProjectsLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default ProjectsPage
