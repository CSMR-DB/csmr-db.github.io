import styled, {
  StyledComponent,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components'
import { ColorProperty } from 'csstype'

interface IColoredTextProps {
  color: ColorProperty
}

export const ColoredText: StyledComponent<
  'span',
  any,
  Partial<IColoredTextProps>,
  never
> = styled.span`
  ${({ color = 'black' }: IColoredTextProps): FlattenSimpleInterpolation => css`
    color: ${color};
  `}
`
