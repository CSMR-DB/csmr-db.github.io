import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'

export interface IWideBoiProps {
  theme?: DefaultTheme
  $maxWidth?: string
}

export const WideBoi: StyledComponent<
  'div',
  any,
  IWideBoiProps,
  never
> = styled.div`
  position: relative;
  padding: 4rem;
  margin: 4rem auto;

  ${({
    theme,
    $maxWidth: maxWidth,
  }: IWideBoiProps): FlattenSimpleInterpolation => css`
    background: ${theme!.palette.third.normal};
    max-width: ${maxWidth};
  `}
`
