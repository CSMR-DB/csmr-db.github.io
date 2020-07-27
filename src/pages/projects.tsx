import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { Layout } from '../components/Layout'
import { ProjectsLayout, IProjectsLayoutProps } from '../layouts/ProjectsLayout'

function ProjectsPage(): JSX.Element {
  const data: IProjectsLayoutProps = {
    programmingData: StaticDataManager.programmingData.all,
    ...StaticDataManager.graphicDesignData,
  }

  return (
    <Layout>
      <ProjectsLayout {...data} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ProjectsPage
