import styled, { StyledComponent } from 'styled-components'

export const Filter: StyledComponent<'div', any, {}, never> = styled.div`
  filter: blur(0.5em) sepia(0.5) saturate(2) grayscale(0.5);
  transform: scale(1.2);
  height: 100%;
`
