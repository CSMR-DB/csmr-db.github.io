import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { routes } from '../../../data/routes'
import { theme } from '../../../data/theme'

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
import { ISiteMetadata } from '../../../types/interfaces'

interface IHeaderProps {
  siteTitle?: string
  height: string
  isLandingPage: boolean
}

const StyledHeader: StyledComponent<
  'header',
  any,
  IHeaderProps,
  never
> = styled.header`
  position: relative;
  width: 100%;
  overflow: hidden;

  ${({ height }: IHeaderProps): FlattenSimpleInterpolation => css`
    min-height: ${height};
  `};

  @media ${theme.breakpoints.max.smartphone} {
    padding-bottom: 0;
    padding-top: 0;
    height: auto;
  }

  .gatsby-image-wrapper {
    height: 100vh;
  }
`

export function Header({
  height = '16rem',
  isLandingPage,
}: IHeaderProps): JSX.Element {
  // tslint:disable-next-line: no-void-expression
  const data: ISiteMetadata = useStaticQuery(graphql`
    query SiteTitleQueryHeader {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <StyledHeader height={height} isLandingPage={isLandingPage}>
      <Fixed height={height} zIndex={-1}>
        <Filter>
          <DynamicImage path="wallpaper/wallpaper.jpg" />
        </Filter>
      </Fixed>
      <Absolute height={height}>
        <FullSizeLogo height={height}>
          <Logo
            fill={'rgba(256, 256, 256, .025)'}
            size={isLandingPage ? '100vh' : '25vh'}
          />
        </FullSizeLogo>
      </Absolute>
      <Absolute height={height}>
        <Flex justifyContent={'space-evenly'}>
          <Grid gap={isLandingPage ? '2rem' : '1rem'}>
            <WASDNav
              routes={routes}
              background={'rgba(48, 48, 48, .96)'}
              gap={isLandingPage ? '4rem' : '2rem'}
              isLandingPage={isLandingPage}
            />
            {isLandingPage && (
              <>
                <Excerpt>
                  <ImageDot width={'8rem'}>
                    <Filter>
                      <DynamicImage path="wallpaper/me.jpg" />
                    </Filter>
                  </ImageDot>
                  <h1>Hey, I'm {data.site.siteMetadata.author}</h1>
                  <p>{data.site.siteMetadata.description}</p>
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
