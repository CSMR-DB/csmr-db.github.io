import styled, { StyledComponent } from 'styled-components'

export const CardHeaderText: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding: 2rem 2rem 0 2rem;

  & > h6 {
    margin-bottom: 0;
  }
`
