import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { FillProperty, HeightProperty, WidthProperty } from 'csstype'

interface IHeartProps {
  height: HeightProperty<1>
  width: WidthProperty<1>
  fill: FillProperty
}

export const StyledHeart: StyledComponent<
  'svg',
  any,
  IHeartProps,
  never
> = styled.svg`
  fill: ${({ fill }: IHeartProps): FillProperty => fill};
`

export function Heart(props: IHeartProps): JSX.Element {
  return (
    <StyledHeart {...props} viewBox="0 0 315 342">
      <g id="heart">
        <path d="M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z" />
      </g>
    </StyledHeart>
  )
}
