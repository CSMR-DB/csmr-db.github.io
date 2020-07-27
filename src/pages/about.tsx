import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { Layout } from '../components/Layout'
import { IAboutLayoutProps, AboutLayout } from '../layouts/AboutLayout'

function AboutMe(): JSX.Element {
  const data: IAboutLayoutProps = {
    ...StaticDataManager.gameWallpapers,
    ...StaticDataManager.seriesPosters,
    ...StaticDataManager.photographySquares,
    courses: StaticDataManager.courses,
    tools: StaticDataManager.tools,
  }

  return (
    <Layout>
      <AboutLayout {...data} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default AboutMe
