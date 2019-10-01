import React from 'react'
// import {SEO} from '../components/seo'
import { Flex } from '../components/flex'
import { Grid } from '../components/grid'
import { Fixed } from '../components/Fixed'
import { Logo } from '../components/logo'
import { routes, IRouteObject } from '../data/routes'
import { MenuTile } from '../components/MenuTile'
import { DynamicImage } from '../components/dynamicimage'
import { Filter } from '../components/Filter'
import styled, { StyledComponent } from 'styled-components'
import { AbsoluteCenter } from '../components/Absolute'

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

const IndexPage: () => JSX.Element = (): JSX.Element => (
  <StyledIndexPage>
    {/* <SEO title="Homepage" /> */}
    <Fixed top={'0px'} left={'0px'} height="100vh" width="100vw">
      <Filter>
        <DynamicImage path="wallpaper/wallpaper.jpg" />
      </Filter>
    </Fixed>
    <Grid height="100vh" rows={2} columns={2}>
      {routes.map((route: IRouteObject, i: number) => (
        <MenuTile
          key={i}
          blendMode="overlay"
          to={route.path}
          background="rgba(66, 66, 66, .2)"
          title={route.title}
        />
      ))}
    </Grid>
    <Fixed
      top="calc(50% - 8em)"
      left="calc(50% - 8em)"
      width="16em"
      height="16em"
    >
      <Flex>
        <AbsoluteCenter>
          <StyledIndexLogoImageContainer>
            <DynamicImage path="wallpaper/me.jpg" />
          </StyledIndexLogoImageContainer>
        </AbsoluteCenter>
        <Logo
          size={192}
          strokeColor="white"
          strokeSize={4}
          fill="transparent"
        />
      </Flex>
    </Fixed>
  </StyledIndexPage>
)

// tslint:disable-next-line: no-default-export
export default IndexPage
