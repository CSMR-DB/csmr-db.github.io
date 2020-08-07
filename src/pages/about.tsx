import React from 'react'
import { helmetJsonLdProp } from 'react-schemaorg'
import { Person } from 'schema-dts'

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
        route={'/about'}
        jsonLd={[
          helmetJsonLdProp<Person>({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: StaticDataManager.siteMetadata.author,
            nationality: 'Dutch',
            knowsLanguage: ['nl-NL', 'en-US'],
          }),
        ]}
      />
      <AboutLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default AboutMe
