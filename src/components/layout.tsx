import React, { ReactNode } from 'react';
import styled, { CSSObject, StyledComponent } from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';
import { IONavigator } from '../hooks/IONavigator';
import { theme } from '../data/theme';
// tslint:disable-next-line: no-import-side-effect
import '../css/reset.css';

interface ILayoutProps {
  children?: ReactNode
  isLandingPage?: boolean
}

interface IStyledLayoutProps {
  isLandingPage?: boolean
}

export const StyledLayout: StyledComponent<
  'div',
  any,
  IStyledLayoutProps,
  never
> = styled.div`
  background: ${theme.background};
  min-height: 100vh;
  margin-bottom: ${({ isLandingPage = false }: IStyledLayoutProps): string | number =>
    isLandingPage ? 0 : '100vh'};

  ${(props: IStyledLayoutProps): CSSObject => props.isLandingPage && {
    background: 'transparent',
    position: "fixed",
    display: "flex",
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  } || {}}

  @media ${theme.breakpoints.max.smartphone} {
    margin-bottom: ${({ isLandingPage = false }): string | number =>
    isLandingPage ? 0 : '100vh'};
  }
`

const StyledMain: StyledComponent<'main', any, {}, never> = styled.main`
  margin: 0 auto;
  padding: 4rem 0;

  a {
    text-decoration: none;
    color: ${theme.primary};

    &:hover {
      color: ${theme.primaryHover};
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`

export function Layout({
  children,
  isLandingPage = false
}: ILayoutProps): JSX.Element {
  return (
    <IONavigator>
      <StyledLayout isLandingPage={isLandingPage}>
        {
          isLandingPage ? (
            <>
              <Header height={'100vh'} isLandingPage={isLandingPage} />
            </>
          ) : (
              <>
                <Header height={'24rem'} isLandingPage={isLandingPage} />
                <StyledMain>{children}</StyledMain>
                <Footer />
              </>
            )
        }
      </StyledLayout>
    </IONavigator>
  )
}
