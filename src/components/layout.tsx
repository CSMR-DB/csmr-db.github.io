import React, { ReactNode } from 'react'
import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

import { LayoutMain } from './LayoutMain'

export interface ILayoutProps {
  theme?: DefaultTheme
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

  ${({ theme, isLandingPage }: ILayoutProps): FlattenSimpleInterpolation => css`
    background: ${isLandingPage ? 'transparent' : theme!.palette.light.normal};
  `}
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
