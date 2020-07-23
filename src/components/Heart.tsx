import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { FillProperty } from 'csstype'

import { AnyExoticRefComponent, AnyExoticRefTargets } from '../types/types'

export interface IHeartProps {
  $width: string
  $height: string
  $fill: FillProperty
}

export const StyledHeart: StyledComponent<
  'svg',
  any,
  IHeartProps,
  never
> = styled.svg`
  ${({
    $fill: fill,
    $width: width,
    $height: height,
  }: IHeartProps): FlattenSimpleInterpolation => css`
    fill: ${fill};
    width: ${width};
    height: ${height};
  `}
`

export const Heart: AnyExoticRefComponent<IHeartProps> = React.forwardRef(
  (props: IHeartProps, ref: AnyExoticRefTargets): JSX.Element => (
    <StyledHeart {...props} viewBox="0 0 315 342" ref={ref}>
      <g id="heart">
        <path d="M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z" />
      </g>
    </StyledHeart>
  )
)
