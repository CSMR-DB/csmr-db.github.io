import styled, { StyledComponent } from 'styled-components'
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
  width: ${({ width = 'auto' }: IAbsoluteProps): WidthProperty<1> => width};
  min-height: ${({ height = 'auto' }: IAbsoluteProps): HeightProperty<1> =>
    height};
  top: ${({ top = '0' }: IAbsoluteProps): TopProperty<1> => top};
  left: ${({ left = '0' }: IAbsoluteProps): LeftProperty<1> => left};
  bottom: ${({ bottom = '0' }: IAbsoluteProps): TopProperty<1> => bottom};
  right: ${({ right = '0' }: IAbsoluteProps): TopProperty<1> => right};
`
