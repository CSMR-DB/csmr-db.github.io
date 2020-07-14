import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { ColorProperty } from 'csstype'
import { StringOrUrlArray, StringOrUrlObject } from '../types/StringOrUrlObject'
import { Timeline, Tween } from 'react-gsap'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  DynamicImage,
  StyledA,
  StyledLink,
  Heart,
} from './'

interface ISkillCardProps {
  index: number
  children?: ReactNode
  level: number
  title: string
  description: StringOrUrlArray
  skillColor: ColorProperty
  time?: number
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

interface IStyledIndicatorProps {
  litColor: ColorProperty
  index: number
  instance: number
}

function StyledIndicator({
  litColor,
  index,
  instance,
}: IStyledIndicatorProps): JSX.Element {
  return (
    <Timeline>
      <Tween
        from={{ scale: 8, opacity: 0 }}
        duration={0.125}
        delay={1 + index / 8 + instance * 0.125}
      >
        <Heart fill={litColor} width={'1rem'} height={'1rem'} />
      </Tween>
    </Timeline>
  )
}

const StyledIndicatorGrid: StyledComponent<'div', any, {}, never> = styled.div`
  min-width: 2rem;
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

const StyledSkillCardBackdrop: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div.attrs({ className: 'backdrop' })`
  transition: all ease 0.5s;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 100%;
  max-width: 8rem;
`

function SkillCardBackdrop({
  children,
  index,
}: {
  children: ReactNode
  index: number
}): JSX.Element {
  return (
    <Timeline>
      <Tween
        to={{ opacity: 0.25 }}
        duration={1}
        delay={1 + index * 0.125}
        ease="power1"
      >
        <StyledSkillCardBackdrop>{children}</StyledSkillCardBackdrop>
      </Tween>
    </Timeline>
  )
}

function SkillCardBody({
  description,
  index,
}: {
  description: StringOrUrlArray
  index: number
}): JSX.Element {
  return (
    <Timeline>
      <Tween
        from={{ opacity: 0 }}
        duration={1}
        delay={1 + index * 0.125}
        ease="power1"
      >
        <p>
          {Array.isArray(description)
            ? description.map((string: StringOrUrlObject, i: number):
                | JSX.Element
                | string => {
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

export const SkillCard: (props: ISkillCardProps) => JSX.Element = ({
  index,
  title,
  description,
  skillColor,
  time = 0,
}: ISkillCardProps): JSX.Element => (
  <Tween
    from={{ x: '-400px', opacity: 0 }}
    duration={1}
    delay={0.25 + index * 0.125}
    ease="elastic"
  >
    <StyledSkillCard>
      <SkillCardBackdrop index={index}>
        <DynamicImage
          path={`code_icons/${title
            .replace(/\([0-9]*\)|\s+/gi, '')
            .toLocaleLowerCase()}.png`}
        />
      </SkillCardBackdrop>
      <CardHeader>
        <StyledSkillCardHeader>
          <Flex justifyContent="space-between" direction="row">
            <StyledIndicatorGrid>
              <StyledIndicator
                instance={index}
                index={0}
                litColor={skillColor}
              ></StyledIndicator>
            </StyledIndicatorGrid>
            <h1>
              <StyledLink
                to={`/tag/${title.toLocaleLowerCase().replace(/\s+/gi, '_')}`}
                color={skillColor}
              >
                {title}
              </StyledLink>
            </h1>
          </Flex>
        </StyledSkillCardHeader>
      </CardHeader>
      <CardBody>
        <SkillCardBody description={description} index={index} />
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
  </Tween>
)
