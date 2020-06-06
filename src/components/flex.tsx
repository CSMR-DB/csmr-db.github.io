import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { BackgroundColorProperty, JustifyContentProperty, FlexDirectionProperty } from 'csstype'

export interface IFlexProps {
  children: ReactNode
  background?: BackgroundColorProperty
  justifyContent?: JustifyContentProperty
  direction?: FlexDirectionProperty
}

const StyledFlex: StyledComponent<'div', any, IFlexProps, never> = styled.div`
  position: relative;
  background: ${(props: IFlexProps): BackgroundColorProperty =>
    props.background || 'transparent'};
  flex-direction: ${(props: IFlexProps): FlexDirectionProperty =>
    props.direction || 'column'};

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

export const Flex: React.ForwardRefExoticComponent<IFlexProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef((props: IFlexProps, ref: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void) | null): JSX.Element => (
    <StyledFlex {...props} ref={ref} />
  ))
