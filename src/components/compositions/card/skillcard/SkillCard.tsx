import React from 'react'
import { Tween } from 'react-gsap'
import { ColorProperty } from 'csstype'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { CodeSVGs } from '../../CodeSVGs'

import { SkillCardIndicator } from './SkillCardIndicator'
import { SkillCardBackdrop } from './SkillCardBackdrop'
import { SkillCardHeader } from './SkillCardHeader'
import { CardFooter } from '../CardFooter'
import { CardHeader } from '../CardHeader'
import { CardBody } from '../CardBody'
import { Flex } from '../../../Flex'
import { StyledLink } from '../../../StyledLink'
import { Card } from '../Card'

interface ISkillCardProps {
  title: string
  body: string
  skillColor: ColorProperty
  time?: number
  generatedRoute: string
  icon?: string
  index?: number
}

export function SkillCard({
  title,
  body,
  skillColor,
  generatedRoute,
  icon,
  time = 0,
  index = 0,
}: ISkillCardProps): JSX.Element {
  return (
    <MDXProvider components={CodeSVGs}>
      <Card index={index} $_testid={'SkillCard'}>
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
                <StyledLink
                  to={generatedRoute}
                  $color={skillColor}
                  $_testid={'SkillPageLink'}
                >
                  {title}
                </StyledLink>
              </h1>
            </Flex>
          </SkillCardHeader>
        </CardHeader>
        <CardBody>
          <p>{body}</p>
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
      </Card>
    </MDXProvider>
  )
}
