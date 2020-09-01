import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

export interface ILiftedUpWrapperProps {
  theme?: DefaultTheme
}

export const LiftedUpWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  margin: 0 auto;

  ${({ theme }: ILiftedUpWrapperProps): FlattenSimpleInterpolation => css`
    @media ${theme!.breakpoints.min.smartphone} {
      margin: -8rem auto 0;
    }
  `}
`
