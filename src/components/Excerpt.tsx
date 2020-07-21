import styled, { StyledComponent } from 'styled-components'

import { theme } from '../data/theme'

export const Excerpt: StyledComponent<'div', any, {}, never> = styled.div`
  background: white;
  margin: auto;
  border-radius: 0.25rem;
  max-width: 36rem;
  padding: 2rem;
  text-align: center;

  & > p {
    font-family: 'Fira Code';
    font-size: 1.5rem;
    line-height: 2rem;
    font-style: italic;
    font-weight: lighter;
    text-align: center;
  }

  @media ${theme.breakpoints.max.smartphone} {
    padding: 1rem;
    margin: auto 1rem;

    & > h1 {
      margin: 0 auto 1rem;
      font-size: 1.1rem;
    }

    & > p {
      font-size: 1rem;
      line-height: initial;
    }
  }
`
