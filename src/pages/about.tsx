import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
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
    <>
      <SEO
        title="About"
        description="A little backstory about how I got where I am"
        siteMetadata={StaticDataManager.siteMetadata}
      />
      <AboutLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default AboutMe
