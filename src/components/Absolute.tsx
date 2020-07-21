import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { ReactNode } from 'react'
import {
  LeftProperty,
  TopProperty,
  WidthProperty,
  HeightProperty,
  BottomProperty,
  RightProperty,
} from 'csstype'

export interface IAbsoluteProps {
  children: ReactNode
  top?: TopProperty<1>
  left?: LeftProperty<1>
  bottom?: BottomProperty<1>
  right?: RightProperty<1>
  width?: WidthProperty<1>
  height?: HeightProperty<1>
}

export const Absolute: StyledComponent<
  'div',
  any,
  IAbsoluteProps,
  never
> = styled.div`
  position: absolute;

  ${({
    width = 'auto',
    height = 'auto',
    top = '0',
    left = '0',
    bottom = '0',
    right = '0',
  }: IAbsoluteProps): FlattenSimpleInterpolation => css`
    width: ${width};
    min-height: ${height};
    top: ${top};
    left: ${left};
    bottom: ${bottom};
    right: ${right};
  `}
`
