import React, { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { ColorProperty, BackgroundColorProperty } from 'csstype'

import { StaticDataManager } from '../../data/StaticDataManager'

import { StyledA } from '../StyledLink'
import { Relative } from '../Relative'
import { DynamicIcon } from './DynamicIcon'
import { Absolute } from '../Absolute'
import { ClippedBtn } from '../ClippedBtn'
import { Flex } from '../Flex'

interface ISocialButtonsProps {
  children: ReactNode
  href: string
  iconPath: string
  $color?: ColorProperty
  $background?: BackgroundColorProperty
  $_testid?: string
}

const StyledSocialIcon: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;
  max-width: 4rem;
`

export function SocialButton({
  children,
  $color: color,
  $background: background,
  href,
  iconPath,
  $_testid,
}: ISocialButtonsProps): JSX.Element {
  return (
    <StyledA href={href} target="blank" $_testid={$_testid}>
      <Relative>
        <StyledSocialIcon>
          <DynamicIcon
            path={iconPath}
            dynamicIcons={StaticDataManager.dynamicIcons}
          />
        </StyledSocialIcon>
        <Absolute>
          <ClippedBtn $background={background} $color={color}>
            <Flex $justifyContent="space-around">
              <span>{children}</span>
            </Flex>
          </ClippedBtn>
        </Absolute>
      </Relative>
    </StyledA>
  )
}
