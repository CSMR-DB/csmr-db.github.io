import { ReactNode } from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { MixBlendModeProperty } from 'csstype'

interface IBlendProps {
  children: ReactNode
  mode: MixBlendModeProperty
  hoverMode?: MixBlendModeProperty
  isolation?: boolean
}

export const Blend: StyledComponent<
  'div',
  any,
  IBlendProps,
  never
> = styled.div`
  position: relative;
  overflow: hidden; /** to make sure the containing element has no children overlapping parent's sibling elements */

  ${({ isolation }: IBlendProps): FlattenSimpleInterpolation => css`
    isolation: ${isolation ? 'isolate' : 'auto'};
  `}

  & > :first-child {
    position: relative !important;
  }

  & > * {
    position: absolute !important; /** to work with gatsby-image, adding !important is a necessary override */
    width: 100%;
    height: 100%;
    top: 0;
    transition: all 0.25s ease-in-out;

    ${({ mode, hoverMode }: IBlendProps): FlattenSimpleInterpolation => css`
      mix-blend-mode: ${mode};

      &:hover {
        mix-blend-mode: ${hoverMode || mode};
      }
    `}
  }
`
