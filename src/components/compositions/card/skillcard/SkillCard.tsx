import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Tween } from 'react-gsap'
import { ColorProperty } from 'csstype'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { StringOrUrlArray } from '../../../../types/common.types'
import { CodeSVGs } from '../../CodeSVGs'

import { SkillCardIndicator } from './SkillCardIndicator'
import { SkillCardBackdrop } from './SkillCardBackdrop'
import { SkillCardBody } from './SkillCardBody'
import { SkillCardHeader } from './SkillCardHeader'
import { CardFooter } from '../CardFooter'
import { CardHeader } from '../CardHeader'
import { CardBody } from '../CardBody'
import { Flex } from '../../../Flex'
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
  generatedRoute: string
  icon?: string
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
  generatedRoute,
  icon,
}: ISkillCardProps): JSX.Element {
  return (
    <MDXProvider components={CodeSVGs}>
      <StyledSkillCard index={index}>
        <SkillCardBackdrop index={index}>
          {icon && <MDXRenderer>{icon}</MDXRenderer>}
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
                <StyledLink to={generatedRoute} $color={skillColor}>
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
    </MDXProvider>
  )
}
