import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { ReactNode } from 'react'

export interface IAbsoluteProps {
  children: ReactNode
  $top?: string
  $left?: string
  $bottom?: string
  $right?: string
  $width?: string
  $height?: string
}

export const Absolute: StyledComponent<
  'div',
  any,
  IAbsoluteProps,
  never
> = styled.div`
  position: absolute;

  ${({
    $width: width = 'auto',
    $height: height = 'auto',
    $top: top = '0',
    $left: left = '0',
    $bottom: bottom = '0',
    $right: right = '0',
  }: IAbsoluteProps): FlattenSimpleInterpolation => css`
    width: ${width};
    min-height: ${height};
    top: ${top};
    left: ${left};
    bottom: ${bottom};
    right: ${right};
  `}
`
