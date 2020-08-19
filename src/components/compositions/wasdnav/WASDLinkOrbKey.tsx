import styled, {
  StyledComponent,
  FlattenSimpleInterpolation,
  css,
  DefaultTheme,
} from 'styled-components'

export interface IWASDLinkOrbKeyProps {
  theme?: DefaultTheme
}

export const WASDLinkOrbKey: StyledComponent<
  'span',
  any,
  {},
  never
> = styled.span`
  display: none;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  line-height: 2rem;

  ${({ theme }: IWASDLinkOrbKeyProps): FlattenSimpleInterpolation => css`
    border: 1px solid ${theme!.palette.light.normal};

    @media ${theme!.breakpoints.min.smartphone} {
      display: initial;
    }
  `}
`
