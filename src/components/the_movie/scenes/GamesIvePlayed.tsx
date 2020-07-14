import React from 'react'
import { Timeline, Tween } from 'react-gsap'
import Image from 'gatsby-image'
import {
  AnyExoticRefComponent,
  IBioImagesEdge,
  IBioImagesMarkdownRemark,
} from '../types.interface'
import { Absolute } from '../../Absolute'
import { Flex } from '../../Flex'
import { Blend } from '../../Blend'
import { BoldH1 } from '../components/BoldH1'
import { Filter } from '../../Filter'
import { pipe } from '../../../utils/pipe_compose'
import { Layer } from '../components/Layer'
import { useStaticQuery, graphql } from 'gatsby'
import { cleanAndCapitalize } from '../../../utils/textTransformer'

const GamesDecor: AnyExoticRefComponent<any> = React.forwardRef(
  (_props: any, targets: any): JSX.Element | null => {
    // tslint:disable-next-line: no-void-expression
    const {
      wallpapers,
    }: { wallpapers: IBioImagesMarkdownRemark } = useStaticQuery(graphql`
      query {
        wallpapers: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { regex: "/bio_movie/games/" }
          }
        ) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

    return targets !== null ? (
      <div ref={(el: HTMLDivElement): void => targets.set('sceneRoot', el)}>
        <Layer ref={(el: HTMLDivElement): void => targets.set('games', el)}>
          <div
            ref={(el: HTMLDivElement): void => {
              if (el !== null && el.childNodes !== null) {
                targets.set('gamesStaggered', el.childNodes)
              }
            }}
          >
            {wallpapers.edges
              .filter((edge: IBioImagesEdge): boolean =>
                edge.node.relativePath.includes('games')
              )
              .map(
                (edge: IBioImagesEdge, i: number): JSX.Element => (
                  <Absolute key={i}>
                    <Filter>
                      <Image fluid={edge.node.childImageSharp.fluid} />
                    </Filter>
                    <Absolute>
                      <Flex>
                        <Blend mode={'lighten'}>
                          <BoldH1>{cleanAndCapitalize(edge.node.name)}</BoldH1>
                        </Blend>
                      </Flex>
                    </Absolute>
                  </Absolute>
                )
              )}
          </div>
        </Layer>
        <Layer>
          <h1 ref={(el: HTMLDivElement): void => targets.set('myGames', el)}>
            I play my games
          </h1>
        </Layer>
      </div>
    ) : null
  }
)

export function GamesIvePlayed({
  position,
}: {
  position: string
}): JSX.Element {
  // const TimelineTarget: AnyExoticRefComponent<any> = GamesDecor({ imageData, getSpecificImage })

  return (
    <Timeline
      target={<GamesDecor />}
      position={position}
      labels={[
        { label: 'fadeInRoot', position: 0 },
        { label: 'introText', position: 0.5 },
        { label: 'fadeInGames', position: 1.5 },
        { label: 'staggerGames', position: 2 },
        { label: 'fadeOutGames', position: 4 },
        { label: 'outroText', position: 4.5 },
        { label: 'fadeOutRoot', position: 5 },
      ]}
    >
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'fadeInRoot'}
        target={'sceneRoot'}
      />

      {/* My games */}
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'introText'}
        target="myGames"
      />
      <Tween
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        position={'introText'}
        target="myGames"
      />
      <Tween
        to={{ opacity: 0 }}
        delay={1}
        position={'fadeInGames'}
        target="myGames"
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'fadeInGames'}
        target="myGames"
      />

      {/* The games stacking */}
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'fadeInGames'}
        target="games"
      />
      <Tween
        from={{ opacity: 0 }}
        duration={0.25}
        position={'fadeInGames'}
        target="games"
      />
      <Tween
        from={{ opacity: 0 }}
        to={{ opacity: 1, zIndex: 999 }}
        duration={0.25}
        stagger={0.25}
        ease="none"
        position={'staggerGames'}
        target={'gamesStaggered'}
      />
      <Tween
        to={{ opacity: 0 }}
        duration={0.25}
        position={'fadeOutGames'}
        target="games"
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'fadeOutGames'}
        target="games"
      />

      {/* Scene fadeOut */}
      <Tween
        from={{ opacity: 1 }}
        to={{ opacity: 0 }}
        duration={0.25}
        position={'fadeOutRoot'}
        target={'sceneRoot'}
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'fadeOutRoot'}
        target={'sceneRoot'}
      />
    </Timeline>
  )
}
