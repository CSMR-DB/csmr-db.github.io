import styled, { StyledComponent } from 'styled-components'
import { ReactNode } from 'react'
import { LeftProperty, TopProperty, WidthProperty, HeightProperty, BottomProperty, RightProperty } from 'csstype'

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
  width: ${(props: IAbsoluteProps): WidthProperty<1> =>
    props.width || '100%'};
  height: ${(props: IAbsoluteProps): HeightProperty<1> =>
    props.height || '100%'};
  top: ${(props: IAbsoluteProps): TopProperty<1> => props.top || '0'};
  left: ${(props: IAbsoluteProps): LeftProperty<1> => props.left || '0'};
  bottom: ${(props: IAbsoluteProps): TopProperty<1> => props.bottom || '0'};
  right: ${(props: IAbsoluteProps): TopProperty<1> => props.right || '0'};
`