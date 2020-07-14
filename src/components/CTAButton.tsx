import React from 'react'
import { Link } from 'gatsby'
import styled, { StyledComponent } from 'styled-components'
import { MarginProperty } from 'csstype'
import { theme } from '../data/theme'

interface IStyledCTAProps {
  iscentered: string
}

export const StyledCTAButton: StyledComponent<
  typeof Link,
  any,
  IStyledCTAProps,
  never
> = styled(Link)`
  @keyframes RGB {
    0%,
    100% {
      background: red;
    }
    33% {
      background: blue;
    }
    67% {
      background: green;
    }
  }

  display: block;
  background: palevioletred;
  /* filter: grayscale(.9); */
  /* animation: 4000ms RGB infinite linear; */
  border: 4px dotted black;
  font-size: 1.25rem;
  margin: ${({ iscentered }: IStyledCTAProps): MarginProperty<1> =>
    iscentered === 'true' ? 'auto' : ''};
  /* margin-top: 8rem; */
  cursor: pointer;
  color: white !important;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 1.5rem;
  max-width: 24rem;
  border: none;
  border-radius: 999rem;

  &:hover {
    filter: grayscale(0.5);
  }

  @media ${theme.breakpoints.max.smartphone} {
    font-size: 1rem;
  }
`

export function CTAButton({
  to,
  iscentered = true,
  children,
}: {
  to: string
  iscentered?: boolean
  children: React.ReactNode
}): JSX.Element {
  return (
    <StyledCTAButton to={to} iscentered={iscentered.toString()}>
      {children}
    </StyledCTAButton>
  )
}
