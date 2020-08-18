import React from 'react'
import { BackgroundColorProperty } from 'csstype'
import { Reveal } from 'react-gsap'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { Card } from '../Card'
import { Flex } from '../../../Flex'
import { DynamicIcon } from '../../DynamicIcon'
import { DateFormatted } from '../../../DateFormatted'
import { ExperienceCardHeader } from './ExperienceCardHeader'
import { ExperienceCardHeaderText } from './ExperienceCardHeaderText'
import { CardBody } from '../CardBody'
import { CardHeaderIconWrapper } from '../CardHeaderIconWrapper'

interface IExperienceCardProps {
  name: string
  body: string
  type: string
  icon: string
  dateStart: string
  dateEnd: string
  backgroundColor: BackgroundColorProperty
}

export function ExperienceCard({
  name,
  body,
  type,
  icon,
  dateStart,
  dateEnd,
  backgroundColor,
}: IExperienceCardProps): JSX.Element {
  return (
    <Reveal>
      <Card>
        <ExperienceCardHeader>
          <Flex $justifyContent="flex-start">
            <CardHeaderIconWrapper $backgroundColor={backgroundColor}>
              <DynamicIcon
                path={icon}
                dynamicIcons={StaticDataManager.dynamicIcons}
              />
            </CardHeaderIconWrapper>
            <ExperienceCardHeaderText>
              <h1>
                {name} ({type})
              </h1>
              <h2>
                <DateFormatted dateString={dateStart} /> -{' '}
                <DateFormatted dateString={dateEnd} />
              </h2>
            </ExperienceCardHeaderText>
          </Flex>
        </ExperienceCardHeader>
        <CardBody>
          <p>{body}</p>
        </CardBody>
      </Card>
    </Reveal>
  )
}
