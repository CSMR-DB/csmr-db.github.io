import styled, { StyledComponent } from 'styled-components'
import YouTube from 'react-youtube'

export const StyledYoutube: StyledComponent<
  typeof YouTube,
  any,
  {},
  never
> = styled(YouTube)`
  max-width: 100%;
  border: none;
  width: 100%;
  margin: 0;
`
