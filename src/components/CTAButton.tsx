import React from 'react'
import { Link } from 'gatsby'
import styled, { StyledComponent } from 'styled-components'
import { MarginProperty } from 'csstype'

interface IStyledCTAProps {
  center: boolean
}

export const StyledCTAButton: StyledComponent<typeof Link, any, IStyledCTAProps, never> = styled(Link)`
  @keyframes RGB {
    0%, 100% {
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
  margin: ${({ center }: IStyledCTAProps): MarginProperty<1> => center ? 'auto' : ''};
  margin-top: 8rem;
  cursor: pointer;
  color: white !important;
  text-transform: uppercase;
  text-align: center;
  padding: 1.5rem;
  max-width: 24rem;
  border: none;
  border-radius: 999rem;

  &:hover {
    filter: grayscale(.5);
  }
`

export function CTAButton({ to, center = true, children }: { to: string, center?: boolean, children: React.ReactNode }): JSX.Element {
  return (
    <StyledCTAButton
      to={to}
      center={center}>
      {children}
    </StyledCTAButton>
  )
}