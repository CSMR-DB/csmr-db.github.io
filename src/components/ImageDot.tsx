import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'

export interface IImageDotProps {
  theme?: DefaultTheme
  $width: string
}

export const ImageDot: StyledComponent<
  'div',
  any,
  IImageDotProps,
  never
> = styled.div`
  margin: 0 auto 1rem;
  border-radius: 256rem;
  overflow: hidden;

  ${({
    theme,
    $width: width,
  }: IImageDotProps): FlattenSimpleInterpolation => css`
    width: calc(${width} / 2);
    height: calc(${width} / 2);

    .gatsby-image-wrapper {
      max-width: calc(${width} / 2);
      max-height: calc(${width} / 2);
    }

    @media ${theme!.breakpoints.min.smartphone} {
      margin: 0 auto 8rem;
      width: ${width};
      height: ${width};

      .gatsby-image-wrapper {
        max-width: ${width};
        max-height: ${width};
      }
    }
  `}
`
