import styled, { StyledComponent } from 'styled-components'

import { theme } from '../../../data/theme'

export const WASDLinkOrbTitle: StyledComponent<
  'h1',
  any,
  {},
  never
> = styled.h1`
  line-height: inherit;
  margin: 0;

  @media ${theme.breakpoints.max.smartphone} {
    font-size: 0.75rem;
  }
`
