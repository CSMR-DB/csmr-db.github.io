import styled, {
  css,
  FlattenSimpleInterpolation,
  StyledComponent,
  DefaultTheme,
} from 'styled-components'
import { ColorProperty, FilterProperty } from 'csstype'

export interface IFilterProps {
  theme?: DefaultTheme
  $filter?: FilterProperty
  $filterHover?: FilterProperty
  $lens?: ColorProperty
}

export const Filter: StyledComponent<
  'div',
  any,
  IFilterProps,
  never
> = styled.div`
  position: relative;
  transition: all 200ms ease-in-out;
  overflow: hidden;

  ${({
    theme,
    $filter: filter = theme!.palette.filter.normal,
    $filterHover: filterHover = theme!.palette.filter.hover,
  }: IFilterProps): FlattenSimpleInterpolation => css`
    filter: ${filter};

    &:hover {
      filter: ${filterHover};
    }
  `};

  ${({
    theme,
    $lens: lens = theme!.palette.first.lens,
  }: IFilterProps): FlattenSimpleInterpolation | null =>
    lens
      ? css`
          &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: ${lens};
          }
        `
      : null}
`
