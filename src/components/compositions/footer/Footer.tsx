import React from 'react'
import styled, { StyledComponent } from 'styled-components'

import { theme } from '../../../data/theme'

import { CenteredBlock } from '../../CenteredBlock'
import { PseudoCode } from './PseudoCode'
import { FooterQuote } from './FooterQuote'

const StyledFooter: StyledComponent<'footer', any, {}, never> = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 2rem;
  background: black;
  min-height: 100vh;
  z-index: -1;

  @media ${theme.breakpoints.max.smartphone} {
    padding: 1rem;

    & p,
    & a {
      font-size: 0.9rem;
    }
  }
`

export const Footer: () => JSX.Element = (): JSX.Element => (
  <StyledFooter>
    <FooterQuote>
      "Success is 1% inspiration, 98% perspiration and 2% attention to detail."
      - Phil Dunphy
    </FooterQuote>
    <CenteredBlock>
      <PseudoCode />
    </CenteredBlock>
  </StyledFooter>
)
