import styled, { StyledComponent } from 'styled-components'

import { theme } from '../data/theme'

export const LiftedUpWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  margin: -8rem auto 0;

  @media ${theme.breakpoints.max.smartphone} {
    margin: 0 auto;
  }
`
