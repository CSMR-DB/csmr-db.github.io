import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Tween } from 'react-gsap'

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

export interface ISkillCardBackdrop {
  children: ReactNode
  index: number
}

export function SkillCardBackdrop({
  children,
  index,
}: ISkillCardBackdrop): JSX.Element {
  return (
    <Tween
      to={{ opacity: 0.25 }}
      duration={1}
      delay={1 + index * 0.125}
      ease="power1"
    >
      <StyledSkillCardBackdrop>{children}</StyledSkillCardBackdrop>
    </Tween>
  )
}
