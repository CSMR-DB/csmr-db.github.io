import styled, { StyledComponent } from 'styled-components'
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
  color: ${({ color = 'black' }: IColoredTextProps): ColorProperty => color};
`
