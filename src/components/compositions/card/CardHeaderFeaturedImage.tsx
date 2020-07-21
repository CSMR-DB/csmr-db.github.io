import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { MaxHeightProperty } from 'csstype'

interface ICardHeaderFeaturedImageProps {
  maxHeight?: MaxHeightProperty<1>
}

export const CardHeaderFeaturedImage: StyledComponent<
  'div',
  any,
  ICardHeaderFeaturedImageProps,
  never
> = styled.div`
  overflow: hidden;

  ${({
    maxHeight = '18rem',
  }: ICardHeaderFeaturedImageProps): FlattenSimpleInterpolation => css`
    max-height: ${maxHeight};
    min-height: ${maxHeight};

    & > * {
      max-height: ${maxHeight};
      min-height: ${maxHeight};
    }
  `}
`
