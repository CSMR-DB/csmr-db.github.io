import React from 'react'
import { BackgroundColorProperty } from 'csstype'
import { Card, CardHeaderIconWrapper, CardBody } from './Card'
import { Flex } from './Flex'
import { DynamicIcon } from './DynamicIcon'
import styled, { StyledComponent } from 'styled-components'
import { DateFormatted } from './DateFormatted'
import { theme } from '../data/theme'

interface IExperienceCardProps {
  name: string
  type: string
  icon: string
  dateStart: string
  dateEnd: string
  description: string
  backgroundColor: BackgroundColorProperty
}

const ExperienceCardHeader: StyledComponent<
  'header',
  any,
  {},
  never
> = styled.header`
  padding: 2em 2em 0em 2em;

  h2 {
    margin: 0;
  }
`

const ExperienceCardHeaderText: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding: 0 2em;

  @media ${theme.breakpoints.max.smartphone} {
    padding: 0 0 0 1em;
  }
`

export const ExperienceCard: ({
  name,
  type,
  icon,
  dateStart,
  dateEnd,
  description,
  backgroundColor,
}: IExperienceCardProps) => JSX.Element = ({
  name,
  type,
  icon,
  dateStart,
  dateEnd,
  description,
  backgroundColor,
}: IExperienceCardProps): JSX.Element => (
  <Card>
    <ExperienceCardHeader>
      <Flex justifyContent="flex-start">
        <CardHeaderIconWrapper backgroundColor={backgroundColor}>
          <DynamicIcon path={icon} />
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
)
