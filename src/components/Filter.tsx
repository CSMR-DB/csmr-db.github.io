import styled, {
  css,
  FlattenSimpleInterpolation,
  StyledComponent,
} from 'styled-components'
import { ColorProperty, FilterProperty } from 'csstype'

export interface IFilterProps {
  filter?: FilterProperty
  filterHover?: FilterProperty
  lens?: ColorProperty
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
    filter = 'sepia(0.25) saturate(2) grayscale(1) brightness(.5)',
    filterHover = 'none',
  }: IFilterProps): FlattenSimpleInterpolation => css`
    filter: ${filter};

    &:hover {
      filter: ${filterHover};
    }
  `};

  ${({ lens }: IFilterProps): FlattenSimpleInterpolation | null =>
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
