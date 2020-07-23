import styled, {
  StyledComponent,
  DefaultTheme,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components'

export interface IExcerptProps {
  theme?: DefaultTheme
}

export const Excerpt: StyledComponent<
  'div',
  any,
  IExcerptProps,
  never
> = styled.div`
  background: white;
  margin: auto 1rem;
  border-radius: 0.25rem;
  max-width: 36rem;
  padding: 1rem;
  text-align: center;

  & > h1 {
    margin: 0 auto 1rem;
    font-size: 1.1rem;
  }

  & > p {
    font-family: 'Fira Code';
    font-size: 1rem;
    line-height: initial;
    font-style: italic;
    font-weight: lighter;
    text-align: center;
  }

  ${({ theme }: IExcerptProps): FlattenSimpleInterpolation => css`
    @media ${theme!.breakpoints.min.smartphone} {
      padding: 2rem;
      margin: auto;

      & > h1 {
        margin: 0 auto 2rem;
        font-size: 1.5rem;
      }

      & > p {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
  `}
`
