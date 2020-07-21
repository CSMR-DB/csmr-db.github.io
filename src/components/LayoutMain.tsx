import styled, { StyledComponent } from 'styled-components'

import { theme } from '../data/theme'

export const LayoutMain: StyledComponent<'main', any, {}, never> = styled.main`
  margin: 0 auto;
  padding: 4rem 1rem;

  a {
    text-decoration: none;
    color: ${theme.primary};

    &:hover {
      color: ${theme.primaryHover};
    }
  }

  @media ${theme.breakpoints.max.smartphone} {
    padding: 1rem;
  }
`
