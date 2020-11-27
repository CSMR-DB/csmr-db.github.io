import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'
import { GridAreaProperty } from 'csstype'

import { TestAttrs } from '../../../types/jest.types'

import { Link } from 'gatsby'

interface IWASDLinkOrbProps {
  theme?: DefaultTheme
  $area: GridAreaProperty
  $_testid: string
}

export const WASDLinkOrb: StyledComponent<
  typeof Link,
  any,
  IWASDLinkOrbProps,
  never
> = styled(Link).attrs(
  (props: IWASDLinkOrbProps): TestAttrs => ({ 'data-testid': props.$_testid })
)`
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 256rem;

  ${({ theme, $area }: IWASDLinkOrbProps): FlattenSimpleInterpolation => css`
    background: ${theme!.palette.first.lens};
    color: ${theme!.palette.light.normal};
    grid-area: ${$area};

    @media ${theme!.breakpoints.min.smartphone} {
      transition: background 200ms ease-in-out;
      width: 8rem;
      height: 8rem;

      &:hover {
        background: ${theme!.palette.first.hover};
        color: ${theme!.palette.light.hover};
      }
    }

    &.active {
      background: ${theme!.palette.first.active};
      color: ${theme!.palette.light.active};
    }
  `}
`
