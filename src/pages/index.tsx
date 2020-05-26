import React from 'react'
import { SEO } from '../components/SEO'
import { Flex } from '../components/Flex'
import { Fixed } from '../components/Fixed'
import { Logo } from '../components/Logo'
import { routes, IRouteObject } from '../data/routes'
import { MenuTile } from '../components/MenuTile'
import { DynamicImage } from '../components/DynamicImage'
import { Filter } from '../components/Filter'
import styled, { StyledComponent } from 'styled-components'
import { AbsoluteCenter } from '../components/Absolute'
import { MainNav } from '../components/MainNav'
import { StyledLayout } from '../components/Layout'
import { IONavigator } from '../hooks/IONavigator'

const StyledIndexPage: StyledComponent<'div', any, {}, never> = styled.div`
  .gatsby-image-wrapper {
    height: 100%;
  }
`

const StyledIndexLogoImageContainer: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  border-radius: 999rem;
  overflow: hidden;
`

const StyledHomepageLayoutWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-rows: 999fr 1fr;
    height: 100vh;
  }
`

const StyledHomepageMenuWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  max-height: 100vh;

  @media screen and (max-width: 600px) {
    position: relative;
    order: 2;
  }
`

const StyledHomepageMenuGrid: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;
  }

  display: none;
`

const StyledHomepageImageWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  position: fixed;
  top: calc(50% - 8em);
  left: calc(50% - 8em);
  width: 16em;
  height: 16em;

  @media screen and (max-width: 600px) {
    position: relative;
    order: 1;
    padding: 4em;
  }
`

const IndexPage: () => JSX.Element = (): JSX.Element => (
  <IONavigator routes={routes}>
    <StyledIndexPage>
      <StyledLayout hasFooter={false}>
        <SEO title="Homepage" />
        <Fixed top={'0px'} left={'0px'} height="100vh" width="100vw">
          <Filter>
            <DynamicImage path="wallpaper/code.jpg" />
          </Filter>
        </Fixed>
        <StyledHomepageLayoutWrapper>
          <StyledHomepageMenuWrapper>
            <StyledHomepageMenuGrid>
              {routes.map((route: IRouteObject, i: number): JSX.Element => (
                <MenuTile
                  key={i}
                  blendMode="overlay"
                  to={route.path}
                  background="rgba(66, 66, 66, .2)"
                  title={route.title}
                />
              ))}
            </StyledHomepageMenuGrid>
          </StyledHomepageMenuWrapper>
          <StyledHomepageImageWrapper>
            <Flex>
              <AbsoluteCenter>
                <StyledIndexLogoImageContainer>
                  <DynamicImage path="wallpaper/me.jpg" />
                </StyledIndexLogoImageContainer>
              </AbsoluteCenter>
              <Logo
                size={128}
                strokeColor="white"
                strokeSize={4}
                fill="transparent"
              />
            </Flex>
          </StyledHomepageImageWrapper>
        </StyledHomepageLayoutWrapper>
        <MainNav />
      </StyledLayout>
    </StyledIndexPage>
  </IONavigator>
)

// tslint:disable-next-line: no-default-export
export default IndexPage
