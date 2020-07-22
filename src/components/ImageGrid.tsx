import styled, { StyledComponent, css, FlattenSimpleInterpolation } from 'styled-components'

export interface IImageGridProps {
  columns: number
  rows: number
}

export const ImageGrid: StyledComponent<
  'div',
  any,
  IImageGridProps,
  never
> = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ${({ columns, rows }: IImageGridProps): FlattenSimpleInterpolation => css`
    grid-template-columns: repeat(${columns},
      1fr
    );
    grid-template-rows: repeat(${rows},
      1fr
    );
  `}
`
