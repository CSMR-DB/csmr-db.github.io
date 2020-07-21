import styled, { StyledComponent } from 'styled-components'

import { theme } from '../../../data/theme'

export const WASDLinkOrbKey: StyledComponent<
  'span',
  any,
  {},
  never
> = styled.span`
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  line-height: 2rem;

  @media ${theme.breakpoints.max.smartphone} {
    display: none;
  }
`
