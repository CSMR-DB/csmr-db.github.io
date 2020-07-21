import styled, {
  StyledComponent,
  css,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components'
import { Link } from 'gatsby'
import { ColorProperty } from 'csstype'

import { theme } from '../data/theme'

interface IStyledALinkProps {
  color?: ColorProperty
}

const LinkStyles: FlattenInterpolation<ThemedStyledProps<
  IStyledALinkProps,
  any
>> = css`
  text-decoration: none;
  display: inline-block;

  color: ${(props: IStyledALinkProps): ColorProperty =>
    props.color || theme.primary} !important;

  &:hover {
    color: ${theme.primaryHover};
  }

  &.active {
    color: ${theme.primaryHover};
  }
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
