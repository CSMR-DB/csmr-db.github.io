import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { theme } from '../data/theme'
import { WidthProperty } from 'csstype'

interface IImageDotProps {
  width: WidthProperty<1>
}

export const ImageDot: StyledComponent<
  'div',
  any,
  IImageDotProps,
  never
> = styled.div`
  margin: 0 auto 8rem;
  border-radius: 256rem;
  overflow: hidden;
  max-width: ${({ width }: IImageDotProps): WidthProperty<1> => width};

  @media ${theme.breakpoints.max.smartphone} {
    max-width: ${({ width }: IImageDotProps): WidthProperty<1> =>
      `calc(${width} / 2)`};
    margin: 0 auto 1rem;
  }
`
