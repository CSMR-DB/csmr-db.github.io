import styled, { StyledComponent, css, FlattenSimpleInterpolation } from 'styled-components'
import { ColorProperty } from 'csstype'

interface IColoredCircleProps {
  color?: ColorProperty
}

export const ColoredCircle: StyledComponent<
  'div',
  any,
  IColoredCircleProps,
  never
> = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 999rem;
  padding: 1.5rem;
  margin: auto;

  /* Filter */
  filter: grayscale(1);
  transition: all 100ms ease-in-out;

  & svg {
    transition: inherit;
  }

  &:hover {
    filter: none;

    & svg {
      transform: scale(1.1);
    }
  }

  & > * {
    max-width: 100%;
    max-height: 100%;
  }

  ${({ color = "black" }: IColoredCircleProps): FlattenSimpleInterpolation => css`
    border: 4px solid ${color};
  `}
`
