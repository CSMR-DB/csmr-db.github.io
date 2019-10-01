import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { BackgroundColorProperty } from 'csstype'
import {
  Card,
  CardHeader,
  CardHeaderIconWrapper,
  CardHeaderText,
  CardBody,
} from './Card'
import { Flex } from './flex'
import { DynamicIcon } from './DynamicIcon'

interface IExperienceCardProps {
  name: string
  type: string
  icon: string
  dateRange: string
  description: string
  backgroundColor: BackgroundColorProperty
}

export const ExperienceCard: ({
  name,
  type,
  icon,
  dateRange,
  description,
  backgroundColor,
}: IExperienceCardProps) => JSX.Element = ({
  name,
  type,
  icon,
  dateRange,
  description,
  backgroundColor,
}: IExperienceCardProps): JSX.Element => (
  <Card>
    <CardBody>
      <CardHeader>
        <Flex justifyContent="flex-start">
          <CardHeaderIconWrapper backgroundColor={backgroundColor}>
            <DynamicIcon path={icon} />
          </CardHeaderIconWrapper>
          <CardHeaderText>
            <h1>
              {name} ({type})
            </h1>
            <h2>{dateRange}</h2>
          </CardHeaderText>
        </Flex>
      </CardHeader>
      <main>
        <p>{description}</p>
      </main>
    </CardBody>
  </Card>
)
