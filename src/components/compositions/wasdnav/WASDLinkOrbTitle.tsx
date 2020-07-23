import styled, {
  StyledComponent,
  DefaultTheme,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components'

export interface IWASDLinkOrbTitleProps {
  theme?: DefaultTheme
}

export const WASDLinkOrbTitle: StyledComponent<
  'h1',
  any,
  {},
  never
> = styled.h1`
  line-height: inherit;
  margin: 0;
  font-size: 0.75rem;

  ${({ theme }: IWASDLinkOrbTitleProps): FlattenSimpleInterpolation => css`
    @media ${theme!.breakpoints.min.smartphone} {
      font-size: 1.25rem;
    }
  `}
`
