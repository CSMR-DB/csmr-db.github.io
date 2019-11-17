import React from 'react'
import { BackgroundColorProperty, BlendMode } from 'csstype'
import { Blend } from './Blend'
import { DynamicImage } from './DynamicImage'
import { StyledLink } from './StyledLink'
import { Flex } from './Flex'
import styled, { StyledComponent } from 'styled-components'

interface IMenuTileProps {
  blendMode: BlendMode
  imagePath?: string
  to: string
  background: BackgroundColorProperty
  title: string
}

const StyledMenuTileH1: StyledComponent<'h1', any, {}, never> = styled.h1`
  margin: 0;
  padding: 0.5em;
`

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
    <StyledLink color="white" to={to} activeClassName="active" partiallyActive>
      <Flex background={background}>
        <StyledMenuTileH1>{title}</StyledMenuTileH1>
      </Flex>
    </StyledLink>
  </Blend>
)
