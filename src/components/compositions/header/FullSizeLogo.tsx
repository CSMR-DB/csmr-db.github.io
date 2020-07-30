import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

import {
  AnyExoticRefComponent,
  AnyExoticRefTargets,
} from '../../../types/react.types'

interface IFullSizeLogoProps {
  children: React.ReactNode
  $height: string
}

const StyledFullSizeLogo: StyledComponent<
  'div',
  any,
  IFullSizeLogoProps,
  never
> = styled.div`
  margin: auto;
  transform-origin: 50%;
  transform: rotate(-45deg) scale(1.5);

  ${({
    $height: height,
  }: IFullSizeLogoProps): FlattenSimpleInterpolation => css`
    height: ${height};
    width: ${height};
  `}
`

export const FullSizeLogo: AnyExoticRefComponent<IFullSizeLogoProps> = React.forwardRef(
  (props: IFullSizeLogoProps, ref: AnyExoticRefTargets): JSX.Element => (
    <StyledFullSizeLogo ref={ref} {...props} />
  )
)
