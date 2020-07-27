import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { Layout } from '../components/Layout'
import { SkillsetLayout, ISkillsetLayoutProps } from '../layouts/SkillSetLayout'

function SkillsetPage(): JSX.Element {
  const data: ISkillsetLayoutProps = {
    skillsetData: StaticDataManager.skillsetData.all,
    ...StaticDataManager.experienceData,
  }

  return (
    <Layout>
      <SkillsetLayout {...data} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default SkillsetPage
