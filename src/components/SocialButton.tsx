import React, { ReactNode } from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { ColorProperty, BackgroundColorProperty } from 'csstype'
import { Relative } from './Relative'
import { DynamicIcon } from './DynamicIcon'
import { AbsoluteCenter } from './Absolute'
import { ClippedBtn } from './ClippedBtn'
import { Flex } from './flex'
import styled, { StyledComponent } from 'styled-components'

interface ISocialButtonsProps {
  children: ReactNode
  href: string
  color?: ColorProperty
  background?: BackgroundColorProperty
  iconPath: string
}

const StyledDynamicIcon: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;
  max-width: 4rem;
`

export const SocialButton: ({
  children,
  color,
  background,
  href,
  iconPath,
}: ISocialButtonsProps) => JSX.Element = ({
  children,
  color,
  background,
  href,
  iconPath,
}: ISocialButtonsProps): JSX.Element => (
  <a href={href} target="blank">
    <Relative>
      <StyledDynamicIcon>
        <DynamicIcon path={iconPath} />
      </StyledDynamicIcon>
      <AbsoluteCenter>
        <ClippedBtn background={background} color={color}>
          <Flex justifyContent="space-around">
            <span>{children}</span>
          </Flex>
        </ClippedBtn>
      </AbsoluteCenter>
    </Relative>
  </a>
)
