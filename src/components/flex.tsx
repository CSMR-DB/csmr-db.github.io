import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { BackgroundColorProperty, JustifyContentProperty } from 'csstype'

export interface IFlexProps {
  children: ReactNode
  background?: BackgroundColorProperty
  justifyContent?: JustifyContentProperty
}

const StyledFlex: StyledComponent<'div', any, IFlexProps, never> = styled.div`
  position: relative;
  background: ${(props: IFlexProps): BackgroundColorProperty =>
    props.background || 'transparent'};

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props: IFlexProps): JustifyContentProperty =>
    props.justifyContent || 'space-around'};
  transition: all 0.25s ease-in-out;

  :hover {
    background: transparent;
  }
`

export const Flex: ({
  children,
  background,
  justifyContent,
}: IFlexProps) => JSX.Element = ({
  children,
  background,
  justifyContent,
}: IFlexProps): JSX.Element => (
  <StyledFlex background={background} justifyContent={justifyContent}>
    {children}
  </StyledFlex>
)
