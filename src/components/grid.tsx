import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import {
  HeightProperty,
  MaxWidthProperty,
  OverflowProperty,
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty,
  AlignItemsProperty,
} from 'csstype'
import { theme } from '../data/theme'

interface IGridMenuProps {
  children: ReactNode
  columns?: number | string
  rows?: number
  height?: string
  maxWidth?: string
  alignItems?: AlignItemsProperty
}

const StyledGrid: StyledComponent<
  'div',
  any,
  IGridMenuProps,
  never
> = styled.div`
  height: ${(props: IGridMenuProps): HeightProperty<1> =>
    props.height || 'auto'};
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
  grid-template-rows: ${(
      props: IGridMenuProps
    ): GridTemplateRowsProperty<1> =>
    props.rows
      ? typeof props.rows === 'number'
        ? `repeat(${props.rows}, 1fr)`
        : props.rows
      : 'auto'};
  margin: 0 auto;
  align-items: ${(props: IGridMenuProps): AlignItemsProperty =>
    props.alignItems || 'initial'};

  @media ${theme.breakpoints.max.smartphone} {
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
`

export const Grid: React.ForwardRefExoticComponent<IGridMenuProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef((props: IGridMenuProps, ref: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void) | null): JSX.Element => (
    <StyledGrid {...props} ref={ref} />
  ))
