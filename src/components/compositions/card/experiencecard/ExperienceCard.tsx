import React from 'react'
import { BackgroundColorProperty } from 'csstype'
import { Reveal, Tween } from 'react-gsap'

import { Card } from '../Card'
import { Flex } from '../../../Flex'
import { DynamicIcon } from '../../../DynamicIcon'
import { DateFormatted } from '../../../DateFormatted'
import { ExperienceCardHeader } from './ExperienceCardHeader'
import { ExperienceCardHeaderText } from './ExperienceCardHeaderText'
import { CardBody } from '../CardBody'
import { CardHeaderIconWrapper } from '../CardHeaderIconWrapper'

interface IExperienceCardProps {
  index: number
  name: string
  type: string
  icon: string
  dateStart: string
  dateEnd: string
  description: string
  backgroundColor: BackgroundColorProperty
}

export const ExperienceCard: (props: IExperienceCardProps) => JSX.Element = ({
  name,
  type,
  icon,
  dateStart,
  dateEnd,
  description,
  backgroundColor,
}: IExperienceCardProps): JSX.Element => (
  <Reveal>
    <Tween
      from={{ width: '8rem', height: '8rem' }}
      to={{ width: '100%', height: 'auto' }}
      duration={0.75}
      ease={'power4'}
    >
      <Card>
        <ExperienceCardHeader>
          <Flex $justifyContent="flex-start">
            <CardHeaderIconWrapper $backgroundColor={backgroundColor}>
              <DynamicIcon path={icon} />
            </CardHeaderIconWrapper>
            <Tween from={{ display: 'none' }} delay={1}>
              <ExperienceCardHeaderText>
                <h1>
                  {name} ({type})
                </h1>
                <h2>
                  <DateFormatted dateString={dateStart} /> -{' '}
                  <DateFormatted dateString={dateEnd} />
                </h2>
              </ExperienceCardHeaderText>
            </Tween>
          </Flex>
        </ExperienceCardHeader>
        <CardBody>
          <Tween from={{ display: 'none' }} delay={1}>
            <main>
              <p>{description}</p>
            </main>
          </Tween>
        </CardBody>
      </Card>
    </Tween>
  </Reveal>
)
