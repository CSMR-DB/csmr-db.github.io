import styled, { StyledComponent } from 'styled-components'

export const AbsoluteCenter: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`
