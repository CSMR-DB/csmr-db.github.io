import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { SEO } from '../components/SEO'
import { Fixed } from '../components/Fixed'
import { DynamicImage } from '../components/DynamicImage'
import { Filter } from '../components/Filter'
import { Layout } from '../components/Layout'

const StyledDynamicImage: StyledComponent<'div', any, {}, never> = styled.div`
  .gatsby-image-wrapper {
    height: 100vh;
  }
`

export function IndexLayout(): JSX.Element {
  return (
    <>
      <SEO title="Homepage" />
      <Fixed>
        <Filter>
          <StyledDynamicImage>
            <DynamicImage path="wallpaper/wallpaper.jpg" />
          </StyledDynamicImage>
        </Filter>
      </Fixed>
      <Layout hasFooter={false} fixed showImage={false} headerHeight={'100%'} />
    </>
  )
}