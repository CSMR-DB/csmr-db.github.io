import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { routes } from '../data/routes'
// import { DesktopNav } from './DesktopNav'
import { ColorProperty, HeightProperty } from 'csstype'
import { Filter } from './Filter'
import { DynamicImage } from './DynamicImage'
import { Absolute } from './Absolute'
import { Flex } from './Flex'
import { WASDNav } from './WASDNav'

interface IHeaderProps {
  siteTitle: string
  height: HeightProperty<1>
  color: ColorProperty
  showImage: boolean
}

const StyledHeader: StyledComponent<'header', any, { height: HeightProperty<1> }, never> = styled.header`
  position: relative;
  height: ${(props: { height: HeightProperty<1> }): HeightProperty<1> => props.height};
  /* paddingBottom: 2rem; */
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding-bottom: 0;
    padding-top: 0;
  }
`

const StyledHeaderDiv: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;
  /* width: 100%; */
  /* max-width: 960px; */
  /* padding: 2rem; */

  @media screen and (max-width: 600px) {
    /* display: none; */
  }
`

const StyledDynamicImage: StyledComponent<'div', any, {}, never> = styled.div`
  .gatsby-image-wrapper {
    height: 100vh;
  }
`

export function Header({ height = '16rem', color, showImage }: IHeaderProps): JSX.Element {
  return (
    <StyledHeader height={height}>
      {showImage && (
        <Absolute height={height}>
          <Filter>
            <StyledDynamicImage>
              <DynamicImage path="wallpaper/wallpaper.jpg" />
            </StyledDynamicImage>
          </Filter>
        </Absolute>
      )}
      <Absolute height={height}>
        <Flex justifyContent={'center'}>
          <StyledHeaderDiv>
            {/* <DesktopNav routes={routes} color={color} /> */}
            <WASDNav routes={routes} color={color}/>
          </StyledHeaderDiv>
        </Flex>
      </Absolute>
    </StyledHeader>
  )
}
