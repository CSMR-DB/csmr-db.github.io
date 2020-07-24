import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

export interface IBlendBlockProps {
  theme?: DefaultTheme
}

export const BlendBlock: StyledComponent<
  'div',
  any,
  IBlendBlockProps,
  never
> = styled.div`
  padding: 1rem;
  border-radius: 999rem;

  ${({ theme }: IBlendBlockProps): FlattenSimpleInterpolation => css`
    background: ${theme!.palette.light.normal};
  `}
`
