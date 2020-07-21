import styled, { StyledComponent } from 'styled-components'

import { theme } from '../../../../data/theme'

export const ExperienceCardHeaderText: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding: 0 2em;

  ${theme.breakpoints.max.smartphone} {
    padding: 0 0 0 1em;
  }
`
