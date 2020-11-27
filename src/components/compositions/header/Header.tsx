import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'

import { AStaticDataManager } from '../../../data/StaticDataManager'

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
  isLandingPage?: boolean
  $height?: string
  staticDataManager: typeof AStaticDataManager
}

const StyledHeader: StyledComponent<
  'header',
  any,
  Partial<IHeaderProps>,
  never
> = styled.header.attrs({ 'data-testid': 'SiteHeader' })`
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
  isLandingPage = false,
  staticDataManager,
}: IHeaderProps): JSX.Element {
  return (
    <StyledHeader $height={height} isLandingPage={isLandingPage}>
      <Fixed $height={height} $zIndex={-1}>
        <Filter>
          <DynamicImage
            path="wallpaper/wallpaper.jpg"
            dynamicImages={staticDataManager.dynamicImages}
          />
        </Filter>
      </Fixed>
      <Absolute $height={height}>
        <Flex $justifyContent={'space-evenly'}>
          <Grid $gap={isLandingPage ? '2rem' : '1rem'}>
            <WASDNav
              routes={staticDataManager.routes}
              isLandingPage={isLandingPage}
            />
            {isLandingPage && <HeyItsMe {...staticDataManager.siteMetadata} />}
          </Grid>
        </Flex>
      </Absolute>
    </StyledHeader>
  )
}
