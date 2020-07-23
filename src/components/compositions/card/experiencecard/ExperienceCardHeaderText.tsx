import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'

export interface IExperienceCardHeaderTextProps {
  theme?: DefaultTheme
}

export const ExperienceCardHeaderText: StyledComponent<
  'div',
  any,
  IExperienceCardHeaderTextProps,
  never
> = styled.div`
  padding: 0 0 0 1em;

  ${({
    theme,
  }: IExperienceCardHeaderTextProps): FlattenSimpleInterpolation => css`
    @media ${theme!.breakpoints.min.smartphone} {
      padding: 0 2rem;
    }
  `}
`
