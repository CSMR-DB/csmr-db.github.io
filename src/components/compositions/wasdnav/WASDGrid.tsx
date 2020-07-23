import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'

export interface IWASDGridProps {
  theme?: DefaultTheme
  gap: string
}

export const WASDGrid: StyledComponent<
  'nav',
  any,
  IWASDGridProps,
  never
> = styled.nav`
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  grid-template-areas:
    '. w .'
    'a s d';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  & > * {
    justify-self: center;
  }

  ${({ theme, gap }: IWASDGridProps): FlattenSimpleInterpolation => css`
    @media ${theme!.breakpoints.min.smartphone} {
      gap: ${gap};
    }
  `}
`
