import styled, { StyledComponent } from 'styled-components'

interface IStyledIFrameProps {
  frameborder: string
  allow: string
  allowfullscreen: boolean
}

export const StyledIFrame: StyledComponent<
  'iframe',
  any,
  IStyledIFrameProps,
  never
> = styled.iframe`
  max-width: 100%;
  border: none;
  width: 100%;
  margin: 0;
`
