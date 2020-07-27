import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { AboutLayout, IAboutLayoutProps } from '../layouts/AboutLayout'
import { ContactLayout, IContactLayoutProps } from '../layouts/ContactLayout'
import { IProjectsLayoutProps, ProjectsLayout } from '../layouts/ProjectsLayout'
import { ISkillsetLayoutProps, SkillsetLayout } from '../layouts/SkillSetLayout'

function Onepage(): JSX.Element {
  const data: ISkillsetLayoutProps &
    IProjectsLayoutProps &
    IAboutLayoutProps &
    IContactLayoutProps = {
    ...StaticDataManager.experienceData,
    ...StaticDataManager.graphicDesignData,
    ...StaticDataManager.gameWallpapers,
    ...StaticDataManager.seriesPosters,
    ...StaticDataManager.photographySquares,
    skillsetData: StaticDataManager.skillsetData.all,
    programmingData: StaticDataManager.programmingData.all,
    contacts: StaticDataManager.contacts,
    courses: StaticDataManager.courses,
    tools: StaticDataManager.tools,
  }

  return (
    <>
      <SEO
        title="Onepage"
        description="All 4 pages with 0 navigation"
        siteMetadata={StaticDataManager.siteMetadata}
      />
      <AboutLayout {...data} />
      <ProjectsLayout {...data} />
      <SkillsetLayout {...data} />
      <ContactLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default Onepage
