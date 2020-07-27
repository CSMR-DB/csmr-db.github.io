import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { Layout } from '../components/Layout'
import { SkillsetLayout, ISkillsetLayoutProps } from '../layouts/SkillSetLayout'

function SkillsetPage(): JSX.Element {
  const data: ISkillsetLayoutProps = {
    skillsetData: StaticDataManager.skillsetData.all,
    ...StaticDataManager.experienceData,
  }

  return (
    <Layout>
      <SEO
        title="Skillset"
        description="You can find out what I am capable of and what I really want to learn here."
        siteMetadata={StaticDataManager.siteMetadata}
      />
      <SkillsetLayout {...data} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default SkillsetPage
