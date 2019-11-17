import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { MixBlendModeProperty, IsolationProperty } from 'csstype'

interface IBlend {
  children: ReactNode
  mode: MixBlendModeProperty
  hoverMode?: MixBlendModeProperty
  isolation?: boolean
}

const StyledDiv: StyledComponent<'div', any, IBlend, never> = styled.div`
  position: relative;
  isolation: ${(props: IBlend): IsolationProperty =>
    props.isolation ? 'isolate' : 'auto'};
  overflow: hidden; /** to make sure the containing element has no children overlapping parent's sibling elements */

  & > :first-child {
    position: relative !important;
  }

  :hover > :first-child {
    transform: scale(1.1);
  }

  & > * {
    mix-blend-mode: ${(props: IBlend): MixBlendModeProperty => props.mode};
    position: absolute !important; /** to work with gatsby-image, adding !important is a necessary override */
    width: 100%;
    height: 100%;
    top: 0;
    transition: all 0.25s ease-in-out;

    :hover {
      mix-blend-mode: ${(props: IBlend): MixBlendModeProperty =>
        props.hoverMode || props.mode};
    }
  }
`

export const Blend: ({
  children,
  mode,
  hoverMode,
  isolation,
}: IBlend) => JSX.Element = ({
  children,
  mode,
  hoverMode,
  isolation = false,
}: IBlend): JSX.Element => (
  <StyledDiv mode={mode} isolation={isolation} hoverMode={hoverMode}>
    {children}
  </StyledDiv>
)
