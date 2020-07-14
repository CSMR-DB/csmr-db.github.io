import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { theme } from '../data/theme'

export const ScrollText: StyledComponent<'p', any, {}, never> = styled.p`
  max-width: 64rem;
  margin: 1rem auto;
  color: white;
  text-align: center;
`

export const ScrollIconWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  display: block;
  margin: 0 auto 2rem;
  width: 1.75rem;
  height: 2.75rem;
  border: 0.125rem solid white;
  border-radius: 999rem;
  padding: 0.25rem;
`

export const AnimatedScroller: StyledComponent<
  'span',
  any,
  {},
  never
> = styled.span`
  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    5% {
      opacity: 1;
      transform: translateY(0);
    }
    80% {
      transform: translateY(1rem);
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
      transform: translateY(1rem);
    }
  }

  display: block;
  width: 1rem;
  height: 1rem;
  background: white;
  border-radius: 999rem;
  animation: scrollDown 2000ms infinite ease-in-out;

  @media ${theme.breakpoints.max.smartphone} {
    animation: scrollDown 2000ms infinite ease-in-out reverse;
  }
`
