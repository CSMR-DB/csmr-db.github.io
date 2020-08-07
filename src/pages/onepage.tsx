import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { AboutLayout, IAboutLayoutProps } from '../layouts/AboutLayout'
import { ContactLayout, IContactLayoutProps } from '../layouts/ContactLayout'
import { IProjectsLayoutProps, ProjectsLayout } from '../layouts/ProjectsLayout'
import { ISkillsetLayoutProps, SkillsetLayout } from '../layouts/SkillSetLayout'

function Onepage(): JSX.Element {
  const aboutData: IAboutLayoutProps = {
    ...StaticDataManager.gameWallpapers,
    ...StaticDataManager.seriesPosters,
    ...StaticDataManager.photographySquares,
    courses: StaticDataManager.courses,
    tools: StaticDataManager.tools,
  }

  const skillsetData: ISkillsetLayoutProps = {
    ...StaticDataManager.experienceData,
    programmingData: StaticDataManager.skillsetData.allProgramming,
    graphicDesignData: StaticDataManager.skillsetData.allGraphicDesign,
  }

  const projectsData: IProjectsLayoutProps = {
    programmingData: StaticDataManager.projectsData.allProgramming,
    graphicDesignData: StaticDataManager.projectsData.allGraphicDesign
  }

  const contactData: IContactLayoutProps = {
    contacts: StaticDataManager.contacts,
  }

  return (
    <>
      <AboutLayout {...aboutData} />
      <SkillsetLayout {...skillsetData} />
      <ProjectsLayout {...projectsData} />
      <ContactLayout {...contactData} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default Onepage
