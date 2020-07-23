import { ReactNode } from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { ZIndexProperty } from 'csstype'

export interface IFixedElementProps {
  children: ReactNode
  $top?: string
  $left?: string
  $bottom?: string
  $right?: string
  $width?: string
  $height?: string
  $zIndex?: ZIndexProperty
}

export const Fixed: StyledComponent<
  'div',
  any,
  IFixedElementProps,
  never
> = styled.div`
  position: fixed;

  ${({
    $width = '100%',
    $height = 'auto',
    $top = 'unset',
    $left = 'unset',
    $bottom = 'unset',
    $right = 'unset',
    $zIndex = 1,
  }: IFixedElementProps): FlattenSimpleInterpolation => css`
    width: ${$width};
    height: ${$height};
    top: ${$top};
    left: ${$left};
    bottom: ${$bottom};
    right: ${$right};
    z-index: ${$zIndex};
  `}
`
