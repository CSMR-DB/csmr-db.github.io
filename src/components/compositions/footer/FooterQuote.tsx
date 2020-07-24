import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

export interface IFooterQuoteProps {
  theme?: DefaultTheme
}

export const FooterQuote: StyledComponent<
  'h6',
  any,
  IFooterQuoteProps,
  never
> = styled.h6`
  padding: 1rem;
  line-height: 1.2rem !important;

  ${({ theme }: IFooterQuoteProps): FlattenSimpleInterpolation => css`
    color: ${theme!.palette.light.normal};
  `}
`
