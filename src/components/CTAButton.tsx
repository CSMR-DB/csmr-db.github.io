import { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Link } from 'gatsby'

import { theme } from '../data/theme'

interface ICTAButtonProps {
  children: ReactNode
  to: string
}

export const CTAButton: StyledComponent<
  typeof Link,
  any,
  ICTAButtonProps,
  never
> = styled(Link)`
  display: block;
  background: palevioletred;
  border: 4px dotted black;
  font-size: 1.25rem;
  cursor: pointer;
  color: white !important;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 1.5rem;
  max-width: 24rem;
  border: none;
  border-radius: 999rem;
  margin: 0 auto;

  &:hover {
    filter: grayscale(0.5);
  }

  @media ${theme.breakpoints.max.smartphone} {
    font-size: 1rem;
  }
`
