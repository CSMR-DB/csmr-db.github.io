import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'
import { ColorProperty, BackgroundColorProperty } from 'csstype'

interface IClippedBtnProps {
  theme?: DefaultTheme
  $color?: ColorProperty
  $background?: BackgroundColorProperty
}

export const ClippedBtn: StyledComponent<
  'div',
  any,
  IClippedBtnProps,
  never
> = styled.div`
  height: 100%;
  border-radius: 0.25rem;
  transition: color 0.1s ease-in 0.1s;
  transition: all 0.25s ease-in-out;
  font-size: 1rem;

  ${({
    theme,
    $color = 'white',
    $background = 'grey',
  }: IClippedBtnProps): FlattenSimpleInterpolation => css`
    color: ${$color};
    background: ${$background};

    @media ${theme!.breakpoints.min.smartphone} {
      clip-path: circle(16em at 50% 50%);
    }

    @media ${theme!.breakpoints.min.tablet} {
      clip-path: circle(1em at 50% 50%);
      font-size: 2rem;

      &:hover {
        clip-path: circle(8em at 50% 50%);
      }
    }
  `}
`
