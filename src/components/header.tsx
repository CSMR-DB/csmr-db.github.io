import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import {
  Absolute,
  AnimatedScroller,
  DynamicImage,
  Excerpt,
  Filter,
  Fixed,
  Flex,
  Grid,
  ImageDot,
  Logo,
  ScrollIconWrapper,
  WASDNav,
} from './'
import { graphql, useStaticQuery } from 'gatsby'
import { HeightProperty } from 'csstype'
import { ISiteMetadata } from '../layouts/IndexLayout'
import { routes } from '../data/routes'
import { theme } from '../data/theme'
import { CenteredBlock } from './CenteredBlock'

interface IHeaderProps {
  siteTitle?: string
  height: HeightProperty<1>
  isLandingPage: boolean
}

interface IStyledHeaderProps {
  height: HeightProperty<1>
}

const StyledHeader: StyledComponent<
  'header',
  any,
  IStyledHeaderProps,
  never
> = styled.header`
  position: relative;
  min-height: ${({ height }: IStyledHeaderProps): HeightProperty<1> => height};
  width: 100%;
  overflow: hidden;

  @media ${theme.breakpoints.max.smartphone} {
    padding-bottom: 0;
    padding-top: 0;
    height: auto;
  }
`

const StyledDynamicImage: StyledComponent<'div', any, {}, never> = styled.div`
  .gatsby-image-wrapper {
    height: 100vh;
  }
`

const StyledLogoWrapper: StyledComponent<
  'div',
  any,
  IStyledHeaderProps,
  never
> = styled.div`
  height: ${({ height }: IStyledHeaderProps): HeightProperty<1> => height};
  width: ${({ height }: IStyledHeaderProps): HeightProperty<1> => height};
  margin: auto;
  transform-origin: 50%;
  transform: rotate(-45deg) scale(1.5);
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
    <StyledHeader height={height}>
      <Fixed height={height} zIndex={-1}>
        <Filter>
          <StyledDynamicImage>
            <DynamicImage path="wallpaper/wallpaper.jpg" />
          </StyledDynamicImage>
        </Filter>
      </Fixed>
      <Absolute height={height}>
        <StyledLogoWrapper height={height}>
          <Logo
            fill={'rgba(256, 256, 256, .025)'}
            size={isLandingPage ? '100vh' : '25vh'}
          />
        </StyledLogoWrapper>
      </Absolute>
      <Absolute height={height}>
        <Flex justifyContent={'space-evenly'}>
          <Grid gap={isLandingPage ? '2rem' : '1rem'}>
            <CenteredBlock>
              <WASDNav
                routes={routes}
                background={'rgba(48, 48, 48, .96)'}
                gap={isLandingPage ? '4rem' : '2rem'}
                isLandingPage={isLandingPage}
              />
            </CenteredBlock>
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
