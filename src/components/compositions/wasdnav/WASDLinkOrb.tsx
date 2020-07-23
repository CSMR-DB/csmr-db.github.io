import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'
import { ColorProperty, GridAreaProperty } from 'csstype'
import { Link } from 'gatsby'

interface IWASDLinkOrbProps {
  theme?: DefaultTheme
  $color: ColorProperty
  $bordercolor: ColorProperty
  $area: GridAreaProperty
  $background?: string
}

export const WASDLinkOrb: StyledComponent<
  typeof Link,
  any,
  IWASDLinkOrbProps,
  never
> = styled(Link)`
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 256rem;

  ${({
    theme,
    $background = 'transparent',
    $bordercolor,
    $color,
    $area,
  }: IWASDLinkOrbProps): FlattenSimpleInterpolation => css`
    background: ${$background};
    border: 1px solid ${$bordercolor};
    color: ${$color};
    grid-area: ${$area};

    @media ${theme!.breakpoints.min.smartphone} {
      width: 8rem;
      height: 8rem;

      &:hover {
        border: 1px solid ${theme!.palette.first.hover};
        color: ${theme!.palette.first.hover};
      }

      &.active {
        border: 1px solid ${theme!.palette.first.normal};
        color: ${theme!.palette.first.normal};
      }
    }
  `}
`
