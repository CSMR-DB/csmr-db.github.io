import React, { ReactNode } from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'
import { AlignItemsProperty } from 'csstype'

import { AnyExoticRefComponent, AnyExoticRefTargets } from '../types/types'

export interface IGridProps {
  theme?: DefaultTheme
  children: ReactNode
  $gap?: string
  $columns?: string | number
  $rows?: string | number
  $height?: string
  $maxWidth?: string
  $alignItems?: AlignItemsProperty
}

const StyledGrid: StyledComponent<'div', any, IGridProps, never> = styled.div`
  display: grid;
  margin: 0 auto;

  ${({
    theme,
    $height: height = 'auto',
    $maxWidth: maxWidth = 'auto',
    $gap: gap = '1rem',
    $columns: columns = 'auto',
    $rows: rows = 'auto',
    $alignItems: alignItems = 'initial',
  }: IGridProps): FlattenSimpleInterpolation => css`
    height: ${height};
    max-width: ${maxWidth};
    gap: calc(${gap}/2);
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-template-rows: ${
      typeof rows === 'number' ? `repeat(${rows}, 1fr);` : rows
    }
    align-items: ${alignItems};

    @media ${theme!.breakpoints.min.smartphone} {
      grid-template-columns: ${
        typeof columns === 'number' ? `repeat(${columns}, 1fr);` : columns
      };

      gap: ${gap};
    }
  `}
`

export const Grid: AnyExoticRefComponent<IGridProps> = React.forwardRef(
  (props: IGridProps, ref: AnyExoticRefTargets): JSX.Element => (
    <StyledGrid {...props} ref={ref} />
  )
)
