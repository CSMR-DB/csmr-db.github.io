import React from 'react'
import { Timeline, Tween, SplitChars } from 'react-gsap'
import { AnyExoticRefComponent } from '../../../types/types'
import { Polaroid } from '../Polaroid'
import { DynamicImage } from '../../DynamicImage'
import { Flex } from '../../Flex'
import { Layer } from '../components/Layer'
import { WriteWithCursor } from '../components/WriteWithCursor'
import { InOut, AnimateCursor, Write } from '../gsap_abstractions'

const TimelineTarget: AnyExoticRefComponent<any> = React.forwardRef(
  (_props: any, targets: any): JSX.Element => {
    return (
      <div ref={(el: HTMLDivElement): void => targets.set('sceneRoot', el)}>
        <Layer ref={(el: HTMLDivElement): void => targets.set('introText', el)}>
          <h1 ref={(el: HTMLHeadingElement): void => targets.set('hi', el)}>
            Hi!
          </h1>
          <WriteWithCursor
            wrapperRef={(el: HTMLHeadingElement): void =>
              targets.set('nice', el)
            }
            ref={(el: HTMLHeadingElement): void =>
              targets.set('niceSplit', [el])
            }
            textWrapper={(children: React.ReactNode): JSX.Element => (
              <h2>{children}</h2>
            )}
          >
            You have finally arrived 😀
          </WriteWithCursor>
          {/* <h2 ref={(el: HTMLHeadingElement): void => targets.set('nice', el)}>
          <SplitChars ref={(el: HTMLHeadingElement): void => targets.set('niceSplit', [el])} wrapper={<span />}>You have finally arrived 😀</SplitChars>
        </h2> */}
        </Layer>
        <Layer ref={(el: HTMLDivElement): void => targets.set('itsMe', el)}>
          <Flex direction={'column'} justifyContent={'center'}>
            <Polaroid
              ref={(el: HTMLHeadingElement): void => targets.set('picture', el)}
              title={
                <h4>
                  <span>⬆️</span> THIS GUY <span>⬆️</span>
                </h4>
              }
            >
              <DynamicImage path="wallpaper/me.jpg" />
            </Polaroid>
            <WriteWithCursor
              wrapperRef={(el: HTMLHeadingElement): void =>
                targets.set('name', el)
              }
              ref={(el: HTMLHeadingElement): void =>
                targets.set('nameSplit', [el])
              }
              cursorRef={(el: HTMLHeadingElement): void =>
                targets.set('nameSplitCursor', el)
              }
              textWrapper={(children: React.ReactNode): JSX.Element => (
                <h2>{children}</h2>
              )}
            >
              My name is Casimir
            </WriteWithCursor>
            {/* <h2 ref={(el: HTMLHeadingElement): void => targets.set('name', el)}>
            <SplitChars ref={(el: HTMLHeadingElement): void => targets.set('nameSplit', [el])} wrapper={<span />}>My name is Casimir</SplitChars>
          </h2> */}
            <WriteWithCursor
              wrapperRef={(el: HTMLHeadingElement): void =>
                targets.set('portfolio', el)
              }
              ref={(el: HTMLHeadingElement): void =>
                targets.set('portfolioSplit', [el])
              }
              cursorRef={(el: HTMLHeadingElement): void =>
                targets.set('portfolioSplitCursor', el)
              }
              textWrapper={(children: React.ReactNode): JSX.Element => (
                <h3>{children}</h3>
              )}
            >
              And this is my portfolio
            </WriteWithCursor>
            {/* <h3 ref={(el: HTMLHeadingElement): void => targets.set('portfolio', el)}>
            <SplitChars ref={(el: HTMLHeadingElement): void => targets.set('portfolioSplit', [el])} wrapper={<span />}>And this is my portfolio</SplitChars>
          </h3> */}
          </Flex>
        </Layer>
      </div>
    )
  }
)

export function OpeningCredits({
  position,
}: {
  position: string
}): JSX.Element {
  return (
    <Timeline
      target={<TimelineTarget />}
      position={position}
      labels={[
        { label: 'fadeInRoot', position: 0 },
        { label: 'introText', position: 0.5 },
        { label: 'introduction', position: 2 },
        { label: 'picture', position: 2.5 },
        { label: 'myPortfolio', position: 3 },
        { label: 'outroText', position: 4.5 },
        { label: 'fadeOutRoot', position: 7 },
      ]}
    >
      <InOut positions={['fadeInRoot', 'fadeOutRoot']} target={'sceneRoot'} />

      <InOut positions={['fadeInRoot', 'introText']} target={'hi'} />

      <InOut positions={['fadeInRoot', 'introduction']} target={'introText'} />
      <InOut positions={['introText', 'introText+=1']} target={'nice'} />
      <Write position={'introText'} target={'niceSplit'} />

      <InOut positions={['introText+=1', 'outroText']} target={'itsMe'} />
      <InOut positions={['introText+=1', 'outroText']} target={'name'} />

      <Write position={'introduction'} target={'nameSplit'} />
      <AnimateCursor
        positions={['introductions', 'introduction+=1']}
        target="nameSplitCursor"
      />

      {/* A little too specific to abstract: my image transition */}
      <>
        <Tween
          from={{
            height: 0,
            padding: 0,
          }}
          duration={0.5}
          position={'picture'}
          target="picture"
        />
        <Tween
          from={{
            opacity: 0,
            scale: 0,
            rotate: '360deg',
          }}
          duration={0.5}
          position={'picture+=.25'}
          ease={'elastic'}
          target="picture"
        />
        <Tween
          from={{
            display: 'block',
          }}
          to={{
            display: 'none',
          }}
          duration={0}
          position={'outroText'}
          target="picture"
        />
      </>

      <InOut positions={['myPortfolio', 'outroText']} target={'portfolio'} />
      <Write position={'picture+=1'} target={'portfolioSplit'} />
      <AnimateCursor
        positions={['picture+=1', 'picture+=2']}
        target="portfolioSplitCursor"
      />
    </Timeline>
  )
}
