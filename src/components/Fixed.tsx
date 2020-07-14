import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import {
  WidthProperty,
  HeightProperty,
  TopProperty,
  LeftProperty,
  BottomProperty,
  RightProperty,
  ZIndexProperty,
} from 'csstype'

export interface IFixedElementProps {
  children: ReactNode
  top?: TopProperty<1>
  left?: LeftProperty<1>
  bottom?: BottomProperty<1>
  right?: RightProperty<1>
  width?: WidthProperty<1>
  height?: HeightProperty<1>
  zIndex?: ZIndexProperty
}

const StyledFixed: StyledComponent<
  'div',
  any,
  IFixedElementProps,
  never
> = styled.div`
  position: fixed;
  width: ${({ width = '100%' }: IFixedElementProps): WidthProperty<1> => width};
  height: ${({ height = 'auto' }: IFixedElementProps): HeightProperty<1> =>
    height};
  top: ${({ top = 'unset' }: IFixedElementProps): TopProperty<1> => top};
  left: ${({ left = 'unset' }: IFixedElementProps): LeftProperty<1> => left};
  bottom: ${({ bottom = 'unset' }: IFixedElementProps): TopProperty<1> =>
    bottom};
  right: ${({ right = 'unset' }: IFixedElementProps): LeftProperty<1> => right};
  z-index: ${({ zIndex = 1 }: IFixedElementProps): ZIndexProperty => zIndex};
`

export function Fixed(props: IFixedElementProps): JSX.Element {
  return <StyledFixed {...props} />
}
