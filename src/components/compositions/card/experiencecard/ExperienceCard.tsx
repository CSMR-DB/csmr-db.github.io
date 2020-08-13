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
        <main>
          <p>{description}</p>
        </main>
      </CardBody>
    </Card>
  </Reveal>
)
