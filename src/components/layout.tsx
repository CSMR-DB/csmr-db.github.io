import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'

import { theme } from '../data/theme'

import { LayoutMain } from './LayoutMain'

export interface ILayoutProps {
  children?: ReactNode
  isLandingPage?: boolean
}

export const StyledLayout: StyledComponent<
  'div',
  any,
  ILayoutProps,
  never
> = styled.div`
  min-height: 100vh;

  background: ${theme.background};
`

export function Layout({
  children,
  isLandingPage = false,
}: ILayoutProps): JSX.Element {
  return (
    <StyledLayout isLandingPage={isLandingPage}>
      <LayoutMain>{children}</LayoutMain>
    </StyledLayout>
  )
}
