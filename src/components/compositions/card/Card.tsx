import React, { ReactNode } from 'react'
import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { Tween } from 'react-gsap'

export interface ICardProps {
  theme?: DefaultTheme
  children: ReactNode
  index?: number
}

export const StyledCard: StyledComponent<
  'article',
  any,
  ICardProps,
  never
> = styled.article`
  position: relative;
  height: 100%;
  border-radius: 0.25rem;
  display: grid;
  grid-template-areas: 'header' 'body' 'footer';
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  box-shadow: 0 0.075rem 0.075rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  & header img {
    transition: all 0.2s ease-in-out !important;
  }

  & h1 {
    font-size: 1.1rem;
    margin: 0;
  }

  & h2 {
    font-size: 1rem;
    font-style: italic;
    margin: 0;
    color: #aaa;
    margin-bottom: 1rem;
  }

  & p {
    text-align: left;
  }

  ${({ theme }: ICardProps): FlattenSimpleInterpolation => css`
    background: ${theme!.palette.light.normal};

    @media ${theme!.breakpoints.min.smartphone} {
      text-align: justify;
    }

    @media ${theme!.breakpoints.min.desktop} {
      &:hover {
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25),
          0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);

        & header img {
          transform: scale(1.1);
        }
      }
    }
  `}
`

export function Card({ children, index = 0 }: ICardProps): JSX.Element {
  return (
    <Tween
      from={{ scale: 0.95, opacity: 0 }}
      duration={0.5}
      delay={0.25 + index * 0.125}
      ease="back"
    >
      <StyledCard>{children}</StyledCard>
    </Tween>
  )
}
