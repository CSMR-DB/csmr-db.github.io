import React from 'react'
import { Timeline, Tween, SplitChars } from 'react-gsap'
import Image from 'gatsby-image'
import {
  ISceneProps,
  AnyExoticRefComponent,
  IBioImagesEdge,
  IBioImagesMarkdownRemark,
} from '../../../types/types.interface'
import styled, { StyledComponent } from 'styled-components'
import { Absolute } from '../../Absolute'
import { Flex } from '../../Flex'
import { Blend } from '../../Blend'
import { BoldH1 } from '../components/BoldH1'
import { Layer } from '../components/Layer'
import { useStaticQuery, graphql } from 'gatsby'

const ShowsGrid: StyledComponent<'div', any, {}, never> = styled.div`
  /* transform: rotate(20deg) scale(1.2); */
  filter: sepia(0.5) grayscale(0.5) blur(1px) brightness(0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

const SeriesDecor: AnyExoticRefComponent<any> = React.forwardRef(
  (_props: any, targets: any): JSX.Element | null => {
    // tslint:disable-next-line: no-void-expression
    const {
      posters,
    }: { posters: IBioImagesMarkdownRemark } = useStaticQuery(graphql`
      query {
        posters: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { regex: "/bio_movie/" }
          }
        ) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fluid(maxWidth: 270, maxHeight: 480, cropFocus: CENTER) {
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
        <Layer ref={(el: HTMLDivElement): void => targets.set('series', el)}>
          <ShowsGrid
            ref={(el: HTMLDivElement): void => {
              if (el !== null && el.childNodes !== null) {
                targets.set('seriesStaggered', el.childNodes)
              }
            }}
          >
            {posters.edges
              .filter((edge: IBioImagesEdge): boolean =>
                edge.node.relativePath.includes('series')
              )
              .map(
                (edge: IBioImagesEdge, i: number): JSX.Element => (
                  <div key={i}>
                    <Image fluid={edge.node.childImageSharp.fluid} />
                  </div>
                )
              )}
          </ShowsGrid>
        </Layer>
        <Layer
          ref={(el: HTMLDivElement): void => targets.set('overlayText', el)}
        >
          <Blend mode={'lighten'}>
            <BoldH1>
              <SplitChars
                ref={(el: HTMLHeadingElement): void =>
                  targets.set('overlayTextSplit', [el])
                }
                wrapper={<span />}
              >
                ...watch my shows...
              </SplitChars>
            </BoldH1>
          </Blend>
        </Layer>
      </div>
    ) : null
  }
)

export function SeriesIveWatched({
  position,
}: {
  position: string
}): JSX.Element {
  // const TimelineTarget: AnyExoticRefComponent<any> = SeriesDecor({ imageData, getSpecificImage })

  return (
    <Timeline
      target={<SeriesDecor />}
      position={position}
      labels={[
        { label: 'fadeInRoot', position: 0 },
        { label: 'staggerSeries', position: 0 },
        { label: 'fadeOutRoot', position: 3 },
      ]}
    >
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'fadeInRoot'}
        target={'sceneRoot'}
      />

      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'fadeInRoot'}
        target={'series'}
      />
      <Tween
        from={{ opacity: 0, scale: 0 }}
        duration={0.05}
        stagger={{ from: 'random', amount: 0.25, grid: [8, 3] }}
        // stagger={.025}
        position={'staggerSeries'}
        target={'seriesStaggered'}
      />
      <Tween
        to={{ scale: 0 }}
        duration={0.05}
        stagger={{ from: 'random', amount: 0.25, grid: [8, 3] }}
        // stagger={.025}
        position={'staggerSeries+=1.5'}
        target={'seriesStaggered'}
      />
      <Tween
        from={{
          display: 'none',
        }}
        duration={0.25}
        position={'staggerSeries'}
        target="overlayText"
      />
      <Tween
        from={{ opacity: 0 }}
        stagger={0.025}
        duration={0.05}
        position={'staggerSeries+=.5'}
        target="overlayTextSplit"
      />
      <Tween
        to={{ opacity: 0 }}
        duration={0.25}
        position={'staggerSeries+=1.5'}
        target="overlayText"
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
