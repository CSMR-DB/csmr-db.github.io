import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import {
  WidthProperty,
  HeightProperty,
  TopProperty,
  LeftProperty,
  // tslint:disable-next-line: no-implicit-dependencies
} from 'csstype'

interface IFixedElementProps {
  children: ReactNode
  top?: TopProperty<1>
  left?: LeftProperty<1>
  width?: WidthProperty<1>
  height?: HeightProperty<1>
}

const FixedElement: StyledComponent<
  'div',
  any,
  IFixedElementProps,
  never
> = styled.div`
  position: fixed;
  width: ${(props: IFixedElementProps): WidthProperty<1> =>
    props.width || '100%'};
  height: ${(props: IFixedElementProps): HeightProperty<1> =>
    props.height || '100%'};
  top: ${(props: IFixedElementProps): TopProperty<1> => props.top || '0'};
  left: ${(props: IFixedElementProps): LeftProperty<1> => props.left || '0'};
`

export const Fixed: ({
  children,
  top,
  left,
  width,
  height,
}: IFixedElementProps) => JSX.Element = ({
  children,
  top,
  left,
  width,
  height,
}: IFixedElementProps): JSX.Element => (
  <FixedElement top={top} left={left} width={width} height={height}>
    {children}
  </FixedElement>
)
