import React from 'react'
import { Timeline, Tween } from 'react-gsap'

import {
  StringOrUrlArray,
  StringOrUrlObject,
} from '../../../../types/StringOrUrlObject'

import { StyledA } from '../../../StyledLink'

interface ISkillCardBodyProps {
  description: StringOrUrlArray
  index: number
}
export function SkillCardBody({
  description,
  index,
}: ISkillCardBodyProps): JSX.Element {
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
