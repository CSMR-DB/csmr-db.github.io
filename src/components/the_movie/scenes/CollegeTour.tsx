import React from 'react'
import { Timeline, Tween, SplitChars } from 'react-gsap'
import { AnyExoticRefComponent } from '../../../types/types.interface'
import styled, { StyledComponent } from 'styled-components'
import { Polaroid } from '../Polaroid'
import { DynamicImage } from '../../DynamicImage'
import { ColorProperty } from 'csstype'
import { Flex } from '../../Flex'
import { Filter } from '../../Filter'
import { ICourse, courses } from '../static_data/courses'
import { Layer } from '../components/Layer'

const PaddedH1: StyledComponent<'h1', any, {}, never> = styled.h1`
  padding: 2rem;
`

const ColoredText: StyledComponent<
  'span',
  any,
  Partial<ICourse>,
  never
> = styled.span`
  color: ${(props: ICourse): ColorProperty => props.color || 'black'};
`

// interface ISceneCurriedProps {
//   courses: ICourse[]
// }

const CollegeTourDecor: AnyExoticRefComponent<any> = React.forwardRef(
  (_props: any, targets: any): JSX.Element => {
    return (
      <div ref={(el: HTMLDivElement): void => targets.set('sceneRoot', el)}>
        <Layer
          ref={(el: HTMLHeadingElement): void => targets.set('courseGrid', el)}
        >
          <Flex
            direction={'column'}
            justifyContent={'center'}
            ref={(el: HTMLDivElement): void => {
              if (el !== null && el.childNodes !== null) {
                targets.set('coursesStaggered', el.childNodes)
              }
            }}
          >
            {courses.map(
              (course: ICourse, i: number): JSX.Element => (
                <div key={i}>
                  <h2>
                    <ColoredText color={course.color}>
                      {course.name}
                    </ColoredText>
                  </h2>
                  {/* <h6>{course.description}</h6> */}
                </div>
              )
            )}
          </Flex>
        </Layer>
        <Layer
          ref={(el: HTMLHeadingElement): void =>
            targets.set('aboutCollege', el)
          }
        >
          <Polaroid
            title="location two"
            ref={(el: HTMLDivElement): void =>
              targets.set('collegeImageOld', el)
            }
          >
            <Filter>
              <DynamicImage path={'bio_movie/hu_old.jpg'} />
            </Filter>
          </Polaroid>
          <PaddedH1
            ref={(el: HTMLHeadingElement): void =>
              targets.set('collegeName', el)
            }
          >
            <SplitChars
              ref={(el: HTMLHeadingElement): void =>
                targets.set('collegeNameSplit', [el])
              }
              wrapper={<span />}
            >
              Digital Media & Communication @ UAS Utrecht
            </SplitChars>
          </PaddedH1>
          <Polaroid
            title="location three"
            ref={(el: HTMLDivElement): void =>
              targets.set('collegeImageNew', el)
            }
          >
            <Filter>
              <DynamicImage path={'bio_movie/hu_new.jpg'} />
            </Filter>
          </Polaroid>
        </Layer>
        <Layer ref={(el: HTMLHeadingElement): void => targets.set('intro', el)}>
          <h2>
            <SplitChars
              ref={(el: HTMLHeadingElement): void =>
                targets.set('introSplit', [el])
              }
              wrapper={<span />}
            >
              I started getting into programming at college...
            </SplitChars>
          </h2>
        </Layer>
        <Layer
          ref={(el: HTMLHeadingElement): void => targets.set('busyKeep', el)}
        >
          <h2>
            <SplitChars
              ref={(el: HTMLHeadingElement): void =>
                targets.set('busyKeepSplit', [el])
              }
              wrapper={<span />}
            >
              ...even though we barely did any "programming"
            </SplitChars>
          </h2>
        </Layer>
      </div>
    )
  }
)

export function CollegeTour({ position }: { position: string }): JSX.Element {
  // const TimelineTarget: AnyExoticRefComponent<any> = CollegeTourDecor({ courses });

  return (
    <Timeline
      target={<CollegeTourDecor />}
      position={position}
      labels={[
        { label: 'fadeInRoot', position: 0 },
        { label: 'introText', position: 0.5 },
        { label: 'collegePictures', position: 2 },
        { label: 'courses', position: 3.5 },
        { label: 'outroText', position: 6.5 },
        { label: 'fadeOutRoot', position: 7 },
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
        target={'intro'}
      />
      <Tween
        from={{ opacity: 0 }}
        stagger={0.025}
        duration={0.05}
        position={'introText'}
        target="introSplit"
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'collegePictures'}
        target={'intro'}
      />

      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'collegePictures'}
        target={'aboutCollege'}
      />
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'collegePictures'}
        target={'collegeName'}
      />
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'collegePictures'}
        target={'collegeImageOld'}
      />
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'collegePictures'}
        target={'collegeImageNew'}
      />
      <Tween
        from={{ opacity: 0 }}
        stagger={0.025}
        duration={0.05}
        position={'collegePictures'}
        target="collegeNameSplit"
      />
      <Tween
        from={{
          opacity: 0,
          transformPerspective: 500,
          scale: 1.5,
          rotationY: 45,
          x: -800,
          y: 0,
          z: -200,
        }}
        to={{
          opacity: 1,
          transformPerspective: 500,
          scale: 1,
          rotationY: 0,
          x: 0,
          y: 0,
          z: 0,
        }}
        duration={0.25}
        position={'collegePictures'}
        target={'collegeImageOld'}
      />
      <Tween
        from={{
          opacity: 0,
          transformPerspective: 500,
          scale: 1.5,
          rotationY: -45,
          x: 800,
          y: 0,
          z: -200,
        }}
        to={{
          opacity: 1,
          transformPerspective: 500,
          scale: 1,
          rotationY: 0,
          x: 0,
          y: 0,
          z: 0,
        }}
        duration={0.25}
        position={'collegePictures'}
        target={'collegeImageNew'}
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'courses'}
        target={'collegeName'}
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'courses'}
        target={'collegeImageOld'}
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'courses'}
        target={'collegeImageNew'}
      />

      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={'courses'}
        target={'busyKeep'}
      />
      <Tween
        from={{ opacity: 0 }}
        stagger={0.025}
        duration={0.05}
        position={'courses+=.25'}
        target={'busyKeepSplit'}
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        duration={0}
        position={'courses+=1.75'}
        target={'busyKeep'}
      />

      <Tween
        from={{ display: 'none' }}
        to={{ display: 'block' }}
        position={'courses+=1.75'}
        target={'courseGrid'}
      />
      <Tween
        from={{ opacity: 0, scale: 0 }}
        duration={0.75}
        stagger={0.025}
        ease={'elastic'}
        position={'courses+=1.75'}
        target={'coursesStaggered'}
      />
      <Tween
        from={{ display: 'block' }}
        to={{ display: 'none' }}
        position={'outroText'}
        target={'courseGrid'}
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
        position={'fadeOutRoot+=.25'}
        target={'sceneRoot'}
      />
    </Timeline>
  )
}
