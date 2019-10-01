import styled, { StyledComponent } from 'styled-components'
// tslint:disable-next-line: no-implicit-dependencies
import { ColorProperty, BackgroundColorProperty } from 'csstype'

interface IClippedBtnProps {
  color?: ColorProperty
  background?: BackgroundColorProperty
}

export const ClippedBtn: StyledComponent<
  'div',
  any,
  IClippedBtnProps,
  never
> = styled.div`
  color: transparent;
  height: 100%;
  font-size: 2rem;
  clip-path: circle(1em at 50% 50%);
  background: transparent;
  border-radius: 0.25rem;
  transition: color 0.1s ease-in 0.1s;
  transition: all 0.25s ease-in-out;

  :hover {
    color: ${(props: IClippedBtnProps): ColorProperty =>
      props.color || 'white'};
    clip-path: circle(8em at 50% 50%);
    background: ${(props: IClippedBtnProps): BackgroundColorProperty =>
      props.background || 'grey'};
  }
`
