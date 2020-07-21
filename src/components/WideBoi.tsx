import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

export interface IWideBoiProps {
  maxWidth?: string
}

export const WideBoi: StyledComponent<
  'div',
  any,
  IWideBoiProps,
  never
> = styled.div`
  position: relative;
  padding: 4rem;
  background: #efefef;
  margin: 4rem auto;

  ${({ maxWidth }: IWideBoiProps): FlattenSimpleInterpolation => css`
    max-width: ${maxWidth};
  `}
`
