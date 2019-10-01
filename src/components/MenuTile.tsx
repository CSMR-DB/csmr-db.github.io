import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { BackgroundColorProperty, BlendMode } from 'csstype'
import { Blend } from './blend'
import { DynamicImage } from './dynamicimage'
import { StyledLink } from './StyledLink'
import { Flex } from './flex'

interface IMenuTileProps {
  blendMode: BlendMode
  imagePath?: string
  to: string
  background: BackgroundColorProperty
  title: string
}

export const MenuTile: ({
  blendMode,
  imagePath,
  to,
  background,
  title,
}: IMenuTileProps) => JSX.Element = ({
  blendMode,
  imagePath,
  to,
  background,
  title,
}: IMenuTileProps): JSX.Element => (
  <Blend mode={blendMode} isolation={true}>
    {imagePath ? <DynamicImage path={imagePath} /> : null}
    <StyledLink color="white" to={to}>
      <Flex background={background}>
        <h1>{title}</h1>
      </Flex>
    </StyledLink>
  </Blend>
)
