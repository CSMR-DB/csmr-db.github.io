import styled, {
  StyledComponent,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components'

interface ICardFooterProps {
  $style?: boolean
}

export const CardFooter: StyledComponent<
  'footer',
  any,
  ICardFooterProps,
  never
> = styled.footer`
  ${({ $style: style = false }: ICardFooterProps): FlattenSimpleInterpolation =>
    style
      ? css`
          background: #eee;
          padding: 2rem;
          border-top: 1px solid #ddd;
          grid-area: footer;
        `
      : css`
          padding: 0 2rem 2rem;
        `}
`
