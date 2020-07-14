import React from 'react'
import { Timeline, Tween, SplitChars } from 'react-gsap'
import { AnyExoticRefComponent } from '../types.interface'
import styled, { StyledComponent } from 'styled-components'
import { ColorProperty } from 'csstype'
import { Layer } from '../components/Layer'
import { ITool, allSVGs } from '../static_data/tools'
import { Grid } from '../../Grid'
import { Write, InOut } from '../gsap_abstractions'
import { Cursor } from '../components/Cursor'
import { Flex } from '../../Flex'
import { WriteWithCursor } from '../components/WriteWithCursor'

// interface ISceneCurriedProps {
//   tools: ITool[]
//   frameworks: ITool[]
// }

const ColoredText: StyledComponent<
  'span',
  any,
  Partial<ITool>,
  never
> = styled.span`
  color: ${(props: ITool): ColorProperty => props.color || 'black'};
`

const ColoredCircle: StyledComponent<
  'div',
  any,
  Partial<ITool>,
  never
> = styled.div`
  width: 8rem;
  height: 8rem;
  /* background: ${(props: ITool): ColorProperty => props.color || 'black'}; */
  border: 4px solid ${(props: ITool): ColorProperty => props.color || 'black'};
  border-radius: 999rem;
  padding: 1.5rem;
  margin: auto;

  & > * {
    max-width: 100%;
    max-height: 100%;
  }
`

const TimelineTarget: AnyExoticRefComponent<any> = React.forwardRef(
  (_props: any, targets: any): JSX.Element => {
    return (
      <div ref={(el: HTMLDivElement): void => targets.set('sceneRoot', el)}>
        <Layer
          ref={(el: HTMLHeadingElement): void => targets.set('frameworks', el)}
        >
          <Grid
            columns={4}
            rows={4}
            ref={(el: HTMLDivElement): void => {
              if (el !== null && el.childNodes !== null) {
                targets.set(`codeIcons`, el.childNodes)
              }
            }}
          >
            {allSVGs.map(
              (framework: ITool, i: number): JSX.Element => (
                <ColoredCircle color={framework.color} key={i}>
                  <framework.svg
                    ref={(el: SVGSVGElement): void => {
                      if (el !== null && el.childNodes !== null) {
                        targets.set(`${framework.name}SVG`, el.childNodes)
                      }
                    }}
                  />
                  {/* <h1>
                  <ColoredText color={framework.color}>{framework.name}</ColoredText>
                </h1> */}
                </ColoredCircle>
              )
            )}
          </Grid>
        </Layer>
        <Layer ref={(el: HTMLDivElement): void => targets.set('intro', el)}>
          {/* <Flex direction="row">
          <h2>
            <SplitChars ref={(el: HTMLHeadingElement): void => targets.set('introSplit', [el])} wrapper={<span />}>I have played with...</SplitChars>
          </h2>
          <Cursor />
        </Flex> */}
          <WriteWithCursor
            ref={(el: HTMLHeadingElement): void =>
              targets.set('introSplit', [el])
            }
            textWrapper={(children: React.ReactNode): JSX.Element => (
              <h2>{children}</h2>
            )}
          >
            I have played with...
          </WriteWithCursor>
        </Layer>
      </div>
    )
  }
)

export function ToolsUsed({ position }: { position: string }): JSX.Element {
  // const TimelineTarget: AnyExoticRefComponent = CurriedTimelineTarget({ frameworks: [], tools: [] });

  return (
    <Timeline
      target={<TimelineTarget />}
      position={position}
      labels={[
        { label: 'fadeInRoot', position: 0 },
        { label: 'introText', position: 0.5 },
        { label: 'frameworks', position: 1.5 },
        { label: 'outroText', position: 6.5 },
        { label: 'fadeOutRoot', position: 7 },
      ]}
    >
      <InOut positions={['fadeInRoot', 'fadeOutRoot']} target={'sceneRoot'} />

      <InOut positions={['fadeInRoot', 'frameworks']} target={'intro'} />
      <Write position={'introText'} target="introSplit" />

      <Tween
        from={{ opacity: 0, scale: 2, rotate: '360deg' }}
        stagger={{ from: 'random', amount: 0.5, grid: [4, 4] }}
        duration={1}
        ease={'elastic'}
        position={'frameworks'}
        target="codeIcons"
      />
      <InOut positions={['frameworks', 'outroText']} target={'frameworks'} />
      {allSVGs.map(
        (framework: ITool, i: number): JSX.Element => (
          <>
            <Tween
              from={{
                svgDraw: 0,
                scale: 0.5,
                transformOrigin: '50% 50%',
              }}
              to={{
                svgDraw: 1,
                scale: 1,
                transformOrigin: '50% 50%',
              }}
              position={'frameworks'}
              duration={0.5}
              delay={i * 0.1}
              target={`${framework.name}SVG`}
            />
            <Tween
              from={{
                fill: 'transparent',
              }}
              position={'frameworks+=.5'}
              duration={1}
              delay={i * 0.1}
              target={`${framework.name}SVG`}
            />
            <Tween
              from={{
                svgDraw: 1,
              }}
              to={{
                svgDraw: 0,
              }}
              position={'frameworks+=.5'}
              duration={1}
              delay={i * 0.1}
              target={`${framework.name}SVG`}
            />
          </>
        )
      )}

      {/* Scene fadeOut */}
      {/* <Tween
        from={{ opacity: 1 }}
        to={{ opacity: 0 }}
        duration={.25}
        position={'fadeOutRoot'}
        target={'sceneRoot'}
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'fadeOutRoot+=.25'}
        target={'sceneRoot'}
      /> */}
    </Timeline>
  )
}
