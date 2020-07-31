import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { SkillsetLayout, ISkillsetLayoutProps } from '../layouts/SkillSetLayout'

function SkillsetPage(): JSX.Element {
  const data: ISkillsetLayoutProps = {
    programmingData: StaticDataManager.skillsetData.allProgramming,
    graphicDesignData: StaticDataManager.skillsetData.allGraphicDesign,
    ...StaticDataManager.experienceData,
  }

  return (
    <>
      <SEO
        title="Skillset"
        description="You can find out what I am capable of and what I really want to learn here."
        siteMetadata={StaticDataManager.siteMetadata}
        route={'/skillset'}
      />
      <SkillsetLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default SkillsetPage
