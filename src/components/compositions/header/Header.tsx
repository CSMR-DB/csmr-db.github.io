import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'

import {
  AStaticDataManager,
  StaticDataManager,
} from '../../../data/StaticDataManager'

import { Filter } from '../../Filter'
import { DynamicImage } from '../DynamicImage'
import { Fixed } from '../../Fixed'
import { Absolute } from '../../Absolute'
import { Flex } from '../../Flex'
import { Grid } from '../../Grid'
import { WASDNav } from '../wasdnav/WASDNav'
import { HeyItsMe } from './HeyItsMe'

interface IHeaderProps {
  theme?: DefaultTheme
  siteTitle?: string
  isLandingPage: boolean
  $height: string
}

const StyledHeader: StyledComponent<
  'header',
  any,
  IHeaderProps,
  never
> = styled.header`
  position: relative;
  height: auto;

  .gatsby-image-wrapper {
    height: 100vh;
  }

  ${({ $height: height }: IHeaderProps): FlattenSimpleInterpolation => css`
    min-height: ${height};
  `};
`

export function Header({
  $height: height = '16rem',
  isLandingPage,
}: IHeaderProps): JSX.Element {
  const {
    siteMetadata,
    routes: defaultRoutes,
  }: typeof AStaticDataManager = StaticDataManager

  return (
    <StyledHeader $height={height} isLandingPage={isLandingPage}>
      <Fixed $height={height} $zIndex={-1}>
        <Filter>
          <DynamicImage
            path="wallpaper/wallpaper.jpg"
            dynamicImages={StaticDataManager.dynamicImages}
          />
        </Filter>
      </Fixed>
      <Absolute $height={height}>
        <Flex $justifyContent={'space-evenly'}>
          <Grid $gap={isLandingPage ? '2rem' : '1rem'}>
            <WASDNav
              routes={defaultRoutes}
              background={'rgba(48, 48, 48, .96)'}
              gap={isLandingPage ? '4rem' : '2rem'}
              isLandingPage={isLandingPage}
            />
            {isLandingPage && <HeyItsMe {...siteMetadata} />}
          </Grid>
        </Flex>
      </Absolute>
    </StyledHeader>
  )
}
