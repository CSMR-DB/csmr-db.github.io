import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { JustifyContentProperty } from 'csstype'

import { Absolute } from '../Absolute'
import { Flex } from '../Flex'

export const StyledImageContainer: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  position: relative;
  overflow: hidden;

  & > div:first-child {
    position: relative;
    transition: all 300ms ease-in-out;
    transform: scale(1.01);
  }

  &:hover > div:first-child {
    transform: scale(1.1);

    & > * {
      filter: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`

export interface IImageContainer {
  children: ReactNode
  overlay: {
    node: ReactNode
    justifyContent?: JustifyContentProperty
  }
}

export function ImageContainer({
  children,
  overlay,
}: IImageContainer): JSX.Element {
  return (
    <StyledImageContainer>
      <div className={'children'}>{children}</div>
      {overlay && (
        <Absolute $top={'1rem'} $bottom={'1rem'}>
          <Flex $justifyContent={overlay.justifyContent}>{overlay.node}</Flex>
        </Absolute>
      )}
    </StyledImageContainer>
  )
}
