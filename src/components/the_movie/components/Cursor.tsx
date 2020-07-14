import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { WidthProperty, BackgroundColorProperty } from 'csstype'

export interface ICursorProps {
  background?: BackgroundColorProperty
  width?: WidthProperty<1>
}

const StyledCursor: StyledComponent<
  'span',
  any,
  ICursorProps,
  never
> = styled.span`
  @keyframes blink {
    0% {
      height: 0;
      opacity: 0.25;
    }
    50% {
      height: 1rem;
      opacity: 1;
      border-radius: 0;
    }
    100% {
      height: 0;
      opacity: 0.25;
    }
  }

  animation: blink infinite 0.5s ease-in-out;

  display: inline-block;
  margin-left: 0.25rem;
  width: ${({ width = '.25rem' }: ICursorProps): WidthProperty<1> => width};
  background: ${({
    background = 'black',
  }: ICursorProps): BackgroundColorProperty => background};
  height: 1rem;
  opacity: 0;

  &.start {
    animation: blink infinite 0.5s ease-in-out;
  }

  &.stop {
    animation: none;
  }
`

export const Cursor: React.ForwardRefExoticComponent<
  ICursorProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef(
  (
    props: ICursorProps,
    ref:
      | React.RefObject<HTMLDivElement>
      | ((instance: HTMLDivElement) => void)
      | null
  ): JSX.Element => <StyledCursor {...props} ref={ref} />
)
