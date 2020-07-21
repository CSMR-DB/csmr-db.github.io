import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { WidthProperty } from 'csstype'

import { theme } from '../data/theme'

export interface IImageDotProps {
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
  
  ${({ width }: IImageDotProps): FlattenSimpleInterpolation => css`
    width: ${width};
    height: ${width};

    .gatsby-image-wrapper {
      max-width: ${width};
      max-height: ${width};
    }
  `}

  @media ${theme.breakpoints.max.smartphone} {
    margin: 0 auto 1rem;

    ${({ width }: IImageDotProps): FlattenSimpleInterpolation => css`
      width: calc(${width} / 2);
      height: calc(${width} / 2);

      .gatsby-image-wrapper {
        max-width: calc(${width} / 2);
        max-height: calc(${width} / 2);
      }
    `}
  }
`
