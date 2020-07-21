import styled, { StyledComponent } from 'styled-components'

export const SkillCardHeader: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding: 2rem 2rem 0 2rem;

  h1 {
    font-size: 1rem;
    font-weight: 100;
    text-align: right;
    align-self: normal;
  }
  h2 {
    font-size: 0.8rem;
    font-weight: 100;
  }
`
