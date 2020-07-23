import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

interface ICenteredBlockProps {
  $maxWidth?: string
}

export const CenteredBlock: StyledComponent<
  'div',
  any,
  ICenteredBlockProps,
  never
> = styled.div`
  margin: 0 auto;

  ${({
    $maxWidth: maxWidth = '48rem',
  }: ICenteredBlockProps): FlattenSimpleInterpolation => css`
    max-width: ${maxWidth};
  `}
`
