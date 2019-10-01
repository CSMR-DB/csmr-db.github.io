import styled, { StyledComponent } from 'styled-components'
import { Link } from 'gatsby'
import { theme } from '../data/theme'

const Styler: (
  element: any
) => StyledComponent<any, any, object, string | number | symbol> = (
  element: any
): StyledComponent<any, any, object, string | number | symbol> => styled(
  element
)`
  text-decoration: none;
  color: ${theme.primary};

  & :hover {
    color: ${theme.primary_hover};
  }
`

export const StyledLink: StyledComponent<
  typeof Link,
  any,
  object,
  string | number | symbol
> = Styler(Link)

export const StyledA: StyledComponent<'a', any, object, never> = Styler('a')
