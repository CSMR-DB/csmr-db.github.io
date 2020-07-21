import React, { ReactNode } from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { AlignItemsProperty } from 'csstype'

import { theme } from '../data/theme'
import { AnyExoticRefComponent, AnyExoticRefTargets } from '../types/types'

export interface IGridProps {
  children: ReactNode
  gap?: string
  columns?: string | number
  rows?: string | number
  height?: string
  maxWidth?: string
  alignItems?: AlignItemsProperty
}

const StyledGrid: StyledComponent<'div', any, IGridProps, never> = styled.div`
  display: grid;
  margin: 0 auto;
  
  ${({
    height = 'auto',
    maxWidth = 'auto',
    gap = '1rem',
    columns = 'auto',
    rows = 'auto',
    alignItems = 'initial',
  }: IGridProps): FlattenSimpleInterpolation => css`
    height: ${height};
    max-width: ${maxWidth};
    gap: ${gap};
    grid-template-columns: ${
      typeof columns === 'number' ? `repeat(${columns}, 1fr);` : columns
    };
    grid-template-rows: ${
      typeof rows === 'number' ? `repeat(${rows}, 1fr);` : rows
    }
    align-items: ${alignItems};
  `}

  @media ${theme.breakpoints.max.smartphone} {
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));

    grid-gap: ${({ gap }: IGridProps): string => `calc(${gap} / 2)` || '.5rem'};
  }
`

export const Grid: AnyExoticRefComponent<IGridProps> = React.forwardRef(
  (props: IGridProps, ref: AnyExoticRefTargets): JSX.Element => (
    <StyledGrid {...props} ref={ref} />
  )
)
