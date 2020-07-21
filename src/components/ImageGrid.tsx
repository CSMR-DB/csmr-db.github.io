import styled, { StyledComponent } from 'styled-components'

export interface IStyledImageGridProps {
  columns: number
  rows: number
}

export const ImageGrid: StyledComponent<
  'div',
  any,
  IStyledImageGridProps,
  never
> = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(
    ${({ columns }: IStyledImageGridProps): number => columns},
    1fr
  );
  grid-template-rows: repeat(
    ${({ rows }: IStyledImageGridProps): number => rows},
    1fr
  );

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`
