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
} from '../../../data/DataManager'

import { FullSizeLogo } from './FullSizeLogo'
import { Filter } from '../../Filter'
import { DynamicImage } from '../../DynamicImage'
import { Fixed } from '../../Fixed'
import { Absolute } from '../../Absolute'
import { Logo } from '../Logo'
import { Flex } from '../../Flex'
import { Grid } from '../../Grid'
import { WASDNav } from '../wasdnav/WASDNav'
import { Excerpt } from '../../Excerpt'
import { ImageDot } from '../../ImageDot'
import { ScrollIconWrapper, AnimatedScroller } from '../ScrollIndicator'
import { Tween } from 'react-gsap'

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
    siteMetadata: { site },
    routes: defaultRoutes,
  }: typeof AStaticDataManager = StaticDataManager

  return (
    <StyledHeader $height={height} isLandingPage={isLandingPage}>
      <Fixed $height={height} $zIndex={-1}>
        <Filter>
          <DynamicImage path="wallpaper/wallpaper.jpg" />
        </Filter>
      </Fixed>
      <Absolute $height={height}>
        <FullSizeLogo $height={height}>
          <Logo
            $fill={'rgba(256, 256, 256, .025)'}
            $size={isLandingPage ? '100vh' : '25vh'}
          />
        </FullSizeLogo>
      </Absolute>
      <Absolute $height={height}>
        <Flex $justifyContent={'space-evenly'}>
          <Grid $gap={isLandingPage ? '2rem' : '1rem'}>
            <WASDNav
              routes={defaultRoutes}
              background={'rgba(48, 48, 48, .96)'}
              gap={isLandingPage ? '4rem' : '2rem'}
              isLandingPage={isLandingPage}
            />
            {isLandingPage && (
              <>
                <Excerpt>
                  <Tween
                    from={{ opacity: 0, scale: 0 }}
                    duration={1}
                    delay={0.25}
                    ease={'back'}
                  >
                    <ImageDot $width={'8rem'}>
                      <Filter>
                        <DynamicImage path="wallpaper/me.jpg" />
                      </Filter>
                    </ImageDot>
                  </Tween>
                  <h1>Hey, I'm {site.siteMetadata.author}</h1>
                  <p>{site.siteMetadata.description}</p>
                </Excerpt>
                <div>
                  <ScrollIconWrapper>
                    <AnimatedScroller></AnimatedScroller>
                  </ScrollIconWrapper>
                </div>
              </>
            )}
          </Grid>
        </Flex>
      </Absolute>
    </StyledHeader>
  )
}
