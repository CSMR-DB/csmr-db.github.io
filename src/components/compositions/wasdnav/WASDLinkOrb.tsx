import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { ColorProperty, GridAreaProperty } from 'csstype'
import { Link } from 'gatsby'

import { theme } from '../../../data/theme'

interface IWASDLinkOrbProps {
  color: ColorProperty
  bordercolor: ColorProperty
  area: GridAreaProperty
  background?: string
  inverted?: boolean
}

export const WASDLinkOrb: StyledComponent<
  typeof Link,
  any,
  IWASDLinkOrbProps,
  never
> = styled(Link)`
  height: 8rem;
  width: 8rem;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 256rem;

  ${({
    background = 'transparent',
    bordercolor,
    color,
    area,
  }: IWASDLinkOrbProps): FlattenSimpleInterpolation => css`
    background: ${background};
    border: 1px solid ${bordercolor};
    color: ${color};
    grid-area: ${area};
  `}

  &:hover {
    border: 1px solid ${theme.primaryHover};
    color: ${theme.primaryHover};
  }

  &.active {
    border: 1px solid ${theme.primary};
    color: ${theme.primary};
  }

  @media ${theme.breakpoints.max.smartphone} {
    height: 4rem;
    width: 4rem;
  }
`
