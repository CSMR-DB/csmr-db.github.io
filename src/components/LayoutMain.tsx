import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

export interface ILayoutMainProps {
  theme?: DefaultTheme
}

export const LayoutMain: StyledComponent<'main', any, {}, never> = styled.main`
  margin: 0 auto;
  padding: 1rem;

  ${({ theme }: ILayoutMainProps): FlattenSimpleInterpolation => css`
    a {
      text-decoration: none;
      color: ${theme!.palette.first.normal};

      &:hover {
        color: ${theme!.palette.first.hover};
      }
    }

    @media ${theme!.breakpoints.min.smartphone} {
      padding: 4rem 1rem;
    }
  `}
`
