import styled, { StyledComponent } from 'styled-components'
import { WidthProperty } from 'csstype'
import { theme } from '../data/theme'

interface ICenteredBlockProps {
  maxWidth?: WidthProperty<1>
}

export const CenteredBlock: StyledComponent<
  'div',
  any,
  ICenteredBlockProps,
  never
> = styled.div`
  max-width: ${({
    maxWidth = '48rem',
  }: ICenteredBlockProps): WidthProperty<1> => maxWidth};
  margin: 0 auto;

  @media ${theme.breakpoints.max.smartphone} {
    padding: 0 1rem;
  }
`
