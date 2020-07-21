import styled, { StyledComponent } from 'styled-components'

import { theme } from '../data/theme'

interface ICenteredBlockProps {
  maxWidth?: string
}

export const CenteredBlock: StyledComponent<
  'div',
  any,
  ICenteredBlockProps,
  never
> = styled.div`
  margin: 0 auto;

  max-width: ${({ maxWidth = '48rem' }: ICenteredBlockProps): string =>
    maxWidth};

  @media ${theme.breakpoints.max.smartphone} {
    padding: 0 1rem;
  }
`
