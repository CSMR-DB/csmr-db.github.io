import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { BackgroundColorProperty } from 'csstype'

interface ICardHeaderIconWrapperProps {
  $backgroundColor?: BackgroundColorProperty
}

export const CardHeaderIconWrapper: StyledComponent<
  'div',
  any,
  ICardHeaderIconWrapperProps,
  never
> = styled.div`
  border-radius: 999rem;
  overflow: hidden;
  width: 4rem;
  padding: 0.5rem;

  ${({
    $backgroundColor: backgroundColor = '#DDD',
  }: ICardHeaderIconWrapperProps): FlattenSimpleInterpolation => css`
    background: ${backgroundColor};
  `}
`
