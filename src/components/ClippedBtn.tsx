import styled, { StyledComponent } from 'styled-components'
import { ColorProperty, BackgroundColorProperty } from 'csstype'
import { theme } from '../data/theme'

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
  height: 100%;
  background: transparent;
  border-radius: 0.25rem;
  transition: color 0.1s ease-in 0.1s;

  @media ${theme.breakpoints.max.tablet} {
    color: ${(props: IClippedBtnProps): ColorProperty =>
      props.color || 'white'};
    clip-path: circle(16em at 50% 50%);
    background: ${(props: IClippedBtnProps): BackgroundColorProperty =>
      props.background || 'grey'};
  }

  @media ${theme.breakpoints.min.desktop} {
    transition: all 0.25s ease-in-out;
    clip-path: circle(1em at 50% 50%);
    font-size: 2rem;
    color: transparent;

    :hover {
      color: ${(props: IClippedBtnProps): ColorProperty =>
        props.color || 'white'};
      clip-path: circle(8em at 50% 50%);
      background: ${(props: IClippedBtnProps): BackgroundColorProperty =>
        props.background || 'grey'};
    }
  }
`
