import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { FillProperty } from 'csstype'

import { AnyExoticRefComponent, AnyExoticRefTargets } from '../types/types'

export interface IHeartProps {
  height: string
  width: string
  fill: FillProperty
}

export const StyledHeart: StyledComponent<
  'svg',
  any,
  IHeartProps,
  never
> = styled.svg`
  ${({ fill }: IHeartProps): FlattenSimpleInterpolation => css`
    fill: ${fill};
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
