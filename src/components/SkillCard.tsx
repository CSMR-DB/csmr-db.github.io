import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Card, CardBody, CardHeader } from './Card'
import { Flex } from './Flex'
import { DynamicImage } from './DynamicImage'
import { StyledA, StyledLink } from './StyledLink'
import { StringOrUrlObject, StringOrUrlArray } from '../types/StringOrUrlObject'
import { BackgroundColorProperty } from 'csstype'
import { theme } from '../data/theme'
import { Timeline, Tween } from 'react-gsap'

interface ISkillCardProps {
  index: number
  children?: ReactNode
  level: number
  title: string
  description: StringOrUrlArray
  time?: number
}

interface IStyledIndicator {
  lit: boolean
}

const StyledIndicatorDot: StyledComponent<
  'span',
  any,
  IStyledIndicator,
  never
> = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: ${(props: IStyledIndicator): BackgroundColorProperty =>
    props.lit ? theme.activeIndicator : theme.inactiveIndicator};
`

function StyledIndicator({ lit, index, instance }: { lit: boolean, index: number, instance: number }): JSX.Element {
  return (
    <Timeline>
      <Tween from={{ scale: 8, opacity: 0 }} duration={.125} delay={1 + index / 8 + instance * .125}>
        <StyledIndicatorDot lit={lit} />
      </Tween>
    </Timeline>
  )
}

const StyledIndicatorGrid: StyledComponent<'div', any, {}, never> = styled.div`
  min-width: 8rem;
  margin-right: 1rem;
`

const StyledSkillCardHeader: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding: 2rem 2rem 0 2rem;

  h1 {
    font-size: 1rem;
    font-weight: 100;
    text-align: right;
    align-self: normal;
  }
  h2 {
    font-size: 0.8rem;
    font-weight: 100;
  }
`

const StyledSkillCardBackdrop: StyledComponent<'div', any, {}, never> = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 100%;
  max-width: 8rem;
  /* filter: opacity(0.075); */
`

function SkillCardBackdrop({children, index}: { children: ReactNode, index: number }): JSX.Element {
  return (
    <Timeline>
      <Tween to={{ opacity: .075 }} duration={1} delay={1 + index * .125} ease="power1">
        <StyledSkillCardBackdrop>
          {children}
        </StyledSkillCardBackdrop>
      </Tween>
    </Timeline>
  )
}

function SkillCardBody({ description, index }: { description: StringOrUrlArray, index: number }): JSX.Element {
  return (
    <Timeline>
      <Tween from={{ opacity: 0 }} duration={1} delay={1 + index * .125} ease="power1">
        <p>
          {Array.isArray(description)
            ? description.map((string: StringOrUrlObject, i: number): JSX.Element | string => {
                if (typeof string !== 'string' && string.url !== '') {
                  return (
                    <StyledA href={string.url} target="blank" key={i}>
                      {string.text}
                    </StyledA>
                  )
                }

                return string as string
              })
            : description}
        </p>
      </Tween>
    </Timeline>
  )
}

export const SkillCard: ({
  index,
  level,
  title,
  description,
  time,
}: ISkillCardProps) => JSX.Element = ({
  // children,
  index,
  level,
  title,
  description,
  time,
}: ISkillCardProps): JSX.Element => (
  <Tween from={{ x: '-400px', opacity: 0 }} duration={1} delay={.25 + index * .125} ease="elastic">
    <Card>
      <SkillCardBackdrop index={index}>
        <DynamicImage
          path={`code-icons/${title
            .replace(/\([0-9]*\)|\s+/gi, '')
            .toLocaleLowerCase()}.png`}
        />
      </SkillCardBackdrop>
      <CardHeader>
        <StyledSkillCardHeader>
          <Flex justifyContent="space-between">
            {/* {level && level >= -1 && ( */}
            <StyledIndicatorGrid>
              <StyledIndicator instance={index} index={0} lit={level >= 1}></StyledIndicator>
              <StyledIndicator instance={index} index={1} lit={level >= 2}></StyledIndicator>
              <StyledIndicator instance={index} index={2} lit={level >= 3}></StyledIndicator>
              <StyledIndicator instance={index} index={3} lit={level >= 4}></StyledIndicator>
              <StyledIndicator instance={index} index={4} lit={level === 5}></StyledIndicator>
            </StyledIndicatorGrid>
            {/* )} */}
            <h1>
              <StyledLink
                to={`/tag/${title.toLocaleLowerCase().replace(/\s+/gi, '_')}`}
              >
                {title}
              </StyledLink>
            </h1>
          </Flex>
          <h2>(time spent: {' '}
          <Tween to={{ count: time }} ease="none" duration={2}>
            <span>0</span>
          </Tween>
          {' '} hours)</h2>
        </StyledSkillCardHeader>
      </CardHeader>
      <CardBody>
        <SkillCardBody description={description} index={index} />
      </CardBody>
    </Card>
  </Tween>
)
