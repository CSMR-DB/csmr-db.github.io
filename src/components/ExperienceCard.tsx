import React from 'react'
import { BackgroundColorProperty } from 'csstype'
import { Card, CardHeaderIconWrapper, CardBody } from './Card'
import { Flex } from './Flex'
import { DynamicIcon } from './DynamicIcon'
import styled, { StyledComponent } from 'styled-components'
import { DateFormatted } from './DateFormatted'
import { theme } from '../data/theme'
import { Reveal, Tween } from 'react-gsap'

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

export const ExperienceCard: (props: IExperienceCardProps) => JSX.Element = ({
  // index,
  name,
  type,
  icon,
  dateStart,
  dateEnd,
  description,
  backgroundColor,
}: IExperienceCardProps): JSX.Element => (
  <Reveal>
    <Tween from={{ width: '8rem', height: '8rem' }} to={{ width: '100%', height: 'auto' }} duration={.75} ease={"power4"}>
      <Card>
        <ExperienceCardHeader>
          <Flex justifyContent="flex-start">
            <CardHeaderIconWrapper backgroundColor={backgroundColor}>
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
