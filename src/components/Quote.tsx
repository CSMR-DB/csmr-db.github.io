import styled, { StyledComponent } from 'styled-components'

export const Quote: StyledComponent<'div', any, {}, never> = styled.div`
  text-align: center;
  font-style: italic;
  color: #888;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem;
    font-weight: 300;
  }
`
