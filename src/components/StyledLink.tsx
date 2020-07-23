import styled, {
  StyledComponent,
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { Link } from 'gatsby'
import { ColorProperty } from 'csstype'

interface IStyledALinkProps {
  theme?: DefaultTheme
  $color?: ColorProperty
}

const LinkStyles: FlattenInterpolation<ThemedStyledProps<
  IStyledALinkProps,
  any
>> = css`
  text-decoration: none;
  display: inline-block;

  ${({
    theme,
    $color: color,
  }: IStyledALinkProps): FlattenSimpleInterpolation => css`
    color: ${color || theme!.palette.first.normal} !important;

    &:hover {
      color: ${theme!.palette.first.hover};
    }

    &.active {
      color: ${theme!.palette.first.active};
    }
  `}
`
export const StyledLink: StyledComponent<
  typeof Link,
  any,
  IStyledALinkProps,
  never
> = styled(Link)`
  ${LinkStyles}
`

export const StyledA: StyledComponent<
  'a',
  any,
  IStyledALinkProps,
  never
> = styled.a`
  ${LinkStyles}
`
