import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Tween } from 'react-gsap'
import { ColorProperty } from 'csstype'

import { StringOrUrlArray } from '../../../../types/StringOrUrlObject'

import { SkillCardIndicator } from './SkillCardIndicator'
import { SkillCardBackdrop } from './SkillCardBackdrop'
import { SkillCardBody } from './SkillCardBody'
import { SkillCardHeader } from './SkillCardHeader'
import { CardFooter } from '../CardFooter'
import { CardHeader } from '../CardHeader'
import { CardBody } from '../CardBody'
import { Flex } from '../../../Flex'
import { DynamicImage } from '../../../DynamicImage'
import { StyledLink } from '../../../StyledLink'
import { Card } from '../Card'

interface ISkillCardProps {
  index: number
  children?: ReactNode
  level: number
  title: string
  description: StringOrUrlArray
  skillColor: ColorProperty
  time?: number
  fileAbsolutePath: string
}

const StyledSkillCard: StyledComponent<typeof Card, any, {}, never> = styled(
  Card
)`
  &:hover {
    .backdrop {
      opacity: 0.75 !important;
    }
  }
`

export function SkillCard({
  index,
  title,
  description,
  skillColor,
  time = 0,
  fileAbsolutePath,
}: ISkillCardProps): JSX.Element {
  return (
    <StyledSkillCard index={index}>
      <SkillCardBackdrop index={index}>
        <DynamicImage
          path={`code_icons/${title
            .replace(/\([0-9]*\)|\s+/gi, '')
            .toLocaleLowerCase()}.png`}
        />
      </SkillCardBackdrop>
      <CardHeader>
        <SkillCardHeader>
          <Flex $justifyContent="space-between" $direction="row">
            <SkillCardIndicator
              instance={index}
              index={0}
              litColor={skillColor}
            ></SkillCardIndicator>
            <h1>
              <StyledLink to={fileAbsolutePath} $color={skillColor}>
                {title}
              </StyledLink>
            </h1>
          </Flex>
        </SkillCardHeader>
      </CardHeader>
      <CardBody>
        <SkillCardBody description={description} />
      </CardBody>
      <CardFooter>
        <p>
          (time spent:{' '}
          <Tween
            to={{ count: time }}
            ease="none"
            duration={Math.sqrt(Math.sqrt(time)) * 0.5}
          >
            <span>0</span>
          </Tween>{' '}
          hours)
        </p>
      </CardFooter>
    </StyledSkillCard>
  )
}
