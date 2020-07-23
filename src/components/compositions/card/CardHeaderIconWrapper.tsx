import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { BackgroundColorProperty } from 'csstype'

interface ICardHeaderIconWrapperProps {
  $backgroundColor: BackgroundColorProperty
}

export const CardHeaderIconWrapper: StyledComponent<
  'div',
  any,
  ICardHeaderIconWrapperProps,
  never
> = styled.div`
  border-radius: 999px;
  overflow: hidden;
  width: 4em;
  padding: 0.5em;

  ${({
    $backgroundColor: backgroundColor = '#DDD',
  }: ICardHeaderIconWrapperProps): FlattenSimpleInterpolation => css`
    background: ${backgroundColor};
  `}
`
