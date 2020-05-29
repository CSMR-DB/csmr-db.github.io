import styled, { StyledComponent } from 'styled-components'

export const Filter: StyledComponent<'div', any, {}, never> = styled.div`
  /* filter: sepia(0.5) saturate(2) grayscale(0.75); */
  filter: sepia(0.25) saturate(2) brightness(0.75) blur(4px);
  transform: scale(1.2);
  /* height: 100%; */
`
