import styled, { StyledComponent } from 'styled-components'
import { Link } from 'gatsby'
import { theme } from '../data/theme'
import { ColorProperty } from 'csstype'

interface IStyledALinkProps {
  color?: ColorProperty
}

export const StyledLink: StyledComponent<
  typeof Link,
  any,
  IStyledALinkProps,
  string | number | symbol
> = styled(Link)`
  text-decoration: none;
  color: ${(props: IStyledALinkProps): ColorProperty =>
    props.color || theme.primary} !important;
  display: inline-block;

  & :hover {
    color: ${theme.primaryHover};
  }

  &.active {
    color: ${theme.primaryHover};
  }
`

export const StyledA: StyledComponent<
  'a',
  any,
  IStyledALinkProps,
  never
> = styled.a`
  text-decoration: none;
  color: ${(props: IStyledALinkProps): ColorProperty =>
    props.color || theme.primary} !important;
  display: inline-block;

  & :hover {
    color: ${theme.primaryHover};
  }

  &.active {
    color: ${theme.primaryHover};
  }
`
