import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions'
// tslint:disable-next-line: no-import-side-effect
import '../css/reset.css'

import { IONavigator } from '../hooks/IONavigator'

import { Header } from '../components/compositions/header/Header'
import { Footer } from '../components/compositions/footer/Footer'
import {
  StaticDataManager,
  AStaticDataManager,
} from '../data/StaticDataManager'

interface ILayoutProps {
  children: ReactNode
  location: {
    hash: string
    host: string
    hostname: string
    href: string
    key: string
    origin: string
    pathname: string
    port: string
    protocol: string
    search: string
    state: {
      key: string
    }
  }
}

function TransitioningLayout({
  children,
  location,
}: ILayoutProps): JSX.Element {
  const { theme }: typeof AStaticDataManager = StaticDataManager

  const isLandingPage: boolean = location.pathname === '/'

  return (
    <IONavigator>
      <TransitionProvider
        location={location}
        // mode="immediate"
        enter={{
          opacity: 0,
          transform: 'scale(1)',
          config: {
            mass: 1,
            tension: 210,
            friction: 20,
            clamp: true,
          },
        }}
        usual={{
          opacity: 1,
          transform: 'scale(1)',
        }}
        leave={{
          opacity: 0,
          transform: 'scale(1)',
          config: {
            duration: 600,
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <Header
            $height={isLandingPage ? '100vh' : '24rem'}
            isLandingPage={isLandingPage}
            staticDataManager={StaticDataManager}
          />
          <TransitionViews>{children}</TransitionViews>
          <Footer />
        </ThemeProvider>
      </TransitionProvider>
    </IONavigator>
  )
}

// tslint:disable-next-line: no-default-export
export default TransitioningLayout
