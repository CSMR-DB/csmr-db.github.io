import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

import { theme } from '../../../data/theme'

export interface IWASDGridProps {
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
  justify-content: space-between;
  align-items: center;
  grid-template-areas:
    '. w .'
    'a s d';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  ${({ gap }: IWASDGridProps): FlattenSimpleInterpolation => css`
    gap: ${gap};
  `}

  & > * {
    justify-self: center;
  }

  @media ${theme.breakpoints.max.smartphone} {
    grid-gap: 2rem;
  }
`
