import React from 'react'
import styled, { StyledComponent } from 'styled-components'

export const StyledStage: StyledComponent<"div", any, {}, never> = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  max-width: 1920px;
  height: 1080px;
  position: relative;
  display: grid;
`

export function Stage({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StyledStage>
      {children}
    </StyledStage>
  )
}