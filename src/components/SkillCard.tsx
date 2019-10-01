import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Card, CardBody } from './Card'
import { Flex } from './flex'
import { DynamicImage } from './dynamicimage'
import { StyledA } from './StyledLink'
import { StringOrUrlObject, StringOrUrlArray } from '../types/StringOrUrlObject'
// tslint:disable-next-line: no-implicit-dependencies
import { BackgroundColorProperty } from 'csstype'

interface ISkillCardProps {
  children?: ReactNode
  level: number
  title: string
  description: StringOrUrlArray
  time: number
}

interface IStyledIndicator {
  lit: boolean
}

const StyledIndicator: StyledComponent<
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
    props.lit ? '#ffb74d' : 'lightgrey'};
`

const StyledIndicatorGrid: StyledComponent<'div', any, {}, never> = styled.div`
  min-width: 8rem;
  margin-right: 1rem;
`

const StyledSkillCardHeader: StyledComponent<
  'header',
  any,
  {},
  never
> = styled.header`
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

const SkillCardBackdrop: StyledComponent<'div', any, {}, never> = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 100%;
  max-width: 8rem;
  filter: opacity(0.075);
`

export const SkillCard: ({
  level,
  title,
  description,
  time,
}: ISkillCardProps) => JSX.Element = ({
  // children,
  level,
  title,
  description,
  time,
}: ISkillCardProps): JSX.Element => (
  <Card>
    <SkillCardBackdrop>
      <DynamicImage
        path={`code-icons/${title
          .replace(/\([0-9]*\)|\s+/gi, '')
          .toLocaleLowerCase()}.png`}
      />
    </SkillCardBackdrop>
    <CardBody>
      <StyledSkillCardHeader>
        <Flex justifyContent="space-between">
          <StyledIndicatorGrid>
            <StyledIndicator lit={level >= 1}></StyledIndicator>
            <StyledIndicator lit={level >= 2}></StyledIndicator>
            <StyledIndicator lit={level >= 3}></StyledIndicator>
            <StyledIndicator lit={level >= 4}></StyledIndicator>
            <StyledIndicator lit={level === 5}></StyledIndicator>
          </StyledIndicatorGrid>
          <h1>{title}</h1>
        </Flex>
        <h2>(time spent: ~{time} hours)</h2>
      </StyledSkillCardHeader>

      <p>
        {Array.isArray(description)
          ? description.map((string: StringOrUrlObject, i: number) => {
              if (typeof string !== 'string' && string.url) {
                return (
                  <StyledA href={string.url} target="blank" key={i}>
                    {string.text}
                  </StyledA>
                )
              }

              return string
            })
          : description}
      </p>
    </CardBody>
  </Card>
)
