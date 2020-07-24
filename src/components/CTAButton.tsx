import { ReactNode } from 'react'
import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { Link } from 'gatsby'

interface ICTAButtonProps {
  theme?: DefaultTheme
  children: ReactNode
  to: string
  $margin?: string
}

export const CTAButton: StyledComponent<
  typeof Link,
  any,
  ICTAButtonProps,
  never
> = styled(Link)`
  display: block;
  font-size: 1rem;
  cursor: pointer;
  color: white !important;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 1.5rem;
  max-width: 24rem;
  border-radius: 999rem;

  &:hover {
    filter: grayscale(0.5);
  }

  ${({ theme, $margin: margin = '0 auto' }: ICTAButtonProps): FlattenSimpleInterpolation => css`
    background: ${theme!.palette.second.normal};
    margin: ${margin};

    @media ${theme!.breakpoints.min.smartphone} {
      font-size: 1.25rem;
    }
  `}
`
