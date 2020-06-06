import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import {
  HeightProperty,
  MaxWidthProperty,
  OverflowProperty,
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty,
} from 'csstype'
import { theme } from '../data/theme'

interface IGridMenuProps {
  children: ReactNode
  columns?: number | string
  rows?: number
  height?: string
  maxWidth?: string
}

const GridElement: StyledComponent<
  'div',
  any,
  IGridMenuProps,
  never
> = styled.div`
  height: ${(props: IGridMenuProps): HeightProperty<1> =>
    props.height || 'auto'};
  width: 100%;
  max-width: ${(props: IGridMenuProps): MaxWidthProperty<1> =>
    props.maxWidth || 'auto'};
  overflow: ${(props: IGridMenuProps): OverflowProperty =>
    props.height === '100vh' ? 'hidden' : 'initial'};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${(
    props: IGridMenuProps
  ): GridTemplateColumnsProperty<1> =>
    props.columns
      ? typeof props.columns === 'number'
        ? `repeat(${props.columns}, 1fr)`
        : props.columns
      : 'auto'};
  grid-template-rows: repeat(
    ${(props: IGridMenuProps): GridTemplateRowsProperty<1> | number =>
      props.rows || 1},
    1fr
  );
  margin: 0 auto;

  @media ${theme.breakpoints.max.smartphone} {
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
`

export const Grid: (props: IGridMenuProps) => JSX.Element = (props: IGridMenuProps): JSX.Element => (
  <GridElement {...props} />
)
