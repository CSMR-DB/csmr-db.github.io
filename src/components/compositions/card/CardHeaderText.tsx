import styled, { StyledComponent } from 'styled-components'

export const CardHeaderText: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding: 2em 2em 0 2em;

  & > h6 {
    margin-bottom: 0;
  }
`
