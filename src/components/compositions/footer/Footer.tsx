import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'

import { CenteredBlock } from '../../CenteredBlock'
import { PseudoCode } from './PseudoCode'
import { FooterQuote } from './FooterQuote'

export interface IFooterProps {
  theme?: DefaultTheme
}

const StyledFooter: StyledComponent<
  'footer',
  any,
  IFooterProps,
  never
> = styled.footer.attrs({ 'data-testid': 'SiteFooter' })`
  width: 100%;
  text-align: center;
  padding: 1rem;
  min-height: 100vh;

  & p,
  & a {
    font-size: 0.9rem;
  }

  ${({ theme }: IFooterProps): FlattenSimpleInterpolation => css`
    background: ${theme!.palette.dark.normal};

    @media ${theme!.breakpoints.min.smartphone} {
      padding: 2rem;

      & p,
      & a {
        font-size: 1rem;
      }
    }
  `}
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
