import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import {
  Absolute,
  DynamicImage,
  Filter,
  Flex,
  Logo,
  WASDNav
} from './';
import { graphql, useStaticQuery } from 'gatsby';
import { HeightProperty } from 'csstype';
import { ISiteMetadata } from '../layouts/IndexLayout';
import { routes } from '../data/routes';
import { Grid } from './Grid';

interface IHeaderProps {
  siteTitle?: string
  height: HeightProperty<1>
  isLandingPage: boolean
}

interface IStyledHeaderProps {
  height: HeightProperty<1>
}

const StyledHeader: StyledComponent<'header', any, IStyledHeaderProps, never> = styled.header`
  position: relative;
  height: ${({ height }: IStyledHeaderProps): HeightProperty<1> => height};
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding-bottom: 0;
    padding-top: 0;
  }
`

const StyledHeaderDiv: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    /* display: none; */
  }
`

const StyledDynamicImage: StyledComponent<'div', any, {}, never> = styled.div`
  .gatsby-image-wrapper {
    height: 100vh;
  }
`

const ImageDot: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto 8rem;
  border-radius: 256rem;
  overflow: hidden;
  max-width: 8rem;
`

const StyledLogoWrapper: StyledComponent<'div', any, IStyledHeaderProps, never> = styled.div`
  height: ${({ height }: IStyledHeaderProps): HeightProperty<1> => height};
  width: ${({ height }: IStyledHeaderProps): HeightProperty<1> => height};
  margin: auto;
  transform-origin: 50%;
  transform: rotate(-45deg) scale(1.5);
`

export const StyledExcerpt: StyledComponent<'div', any, {}, never> = styled.div`
  background: white;
  border-radius: .25rem;
  max-width: 48rem;
  padding: 2rem;
  /* color: white; */
  text-align: center;
  
  & > p {
    font-family: 'Fira Code';
    font-size: 1.5rem;
    line-height: 2rem;
    font-style: italic;
    font-weight: lighter;
    text-align: center;
  }
`

export function Header({ height = '16rem', isLandingPage = false }: IHeaderProps): JSX.Element {
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
      <Absolute height={height}>
        <Filter>
          <StyledDynamicImage>
            <DynamicImage path="wallpaper/wallpaper.jpg" />
          </StyledDynamicImage>
        </Filter>
      </Absolute>
      <Absolute height={height}>
        <StyledLogoWrapper height={height}>
          <Logo fill={'rgba(256, 256, 256, .025)'} size={isLandingPage ? '100vh' : '25vh'} strokeColor={'red'} strokeSize={0} />
        </StyledLogoWrapper>
      </Absolute>
      <Absolute height={height}>
        <Flex justifyContent={'space-evenly'}>
          <Grid gap={isLandingPage ? '2rem' : '1rem'} >
            <StyledHeaderDiv>
              <WASDNav routes={routes} background={isLandingPage ? 'rgba(48, 48, 48, .96)' : 'transparent'} gap={isLandingPage ? '4rem' : '2rem'} />
            </StyledHeaderDiv>
            {
              isLandingPage && (
                <StyledExcerpt>
                  <ImageDot>
                    <Filter>
                      <DynamicImage path="wallpaper/me.jpg" />
                    </Filter>
                  </ImageDot>
                  <h1>Hey, I'm {data.site.siteMetadata.author}</h1>
                  <p>{data.site.siteMetadata.description}</p>
                </StyledExcerpt>
              )
            }
          </Grid>
        </Flex>
      </Absolute>
    </StyledHeader>
  )
}
