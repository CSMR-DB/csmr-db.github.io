import React, { ReactNode } from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import {
  JustifyContentProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  AlignItemsProperty,
} from 'csstype'

import {
  AnyExoticRefComponent,
  AnyExoticRefTargets,
} from '../types/react.types'

export interface IFlexProps {
  children: ReactNode
  $justifyContent?: JustifyContentProperty
  $alignItems?: AlignItemsProperty
  $direction?: FlexDirectionProperty
  $wrap?: FlexWrapProperty
}

const StyledFlex: StyledComponent<'div', any, IFlexProps, never> = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  height: 100%;
  width: 100%;
  transition: all 0.25s ease-in-out;

  ${({
    $direction: direction = 'column',
    $wrap: wrap = 'initial',
    $alignItems: alignItems = 'center',
    $justifyContent: justifyContent = 'space-around',
  }: IFlexProps): FlattenSimpleInterpolation => css`
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `}
`

export const Flex: AnyExoticRefComponent<IFlexProps> = React.forwardRef(
  (props: IFlexProps, ref: AnyExoticRefTargets): JSX.Element => (
    <StyledFlex {...props} ref={ref} />
  )
)
