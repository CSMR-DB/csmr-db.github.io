import React from 'react'
import styled, {
  StyledComponent,
  DefaultTheme,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

import { Card } from './card/Card'
import { CardBody } from './card/CardBody'
import { StyledLink } from '../StyledLink'

export interface IReadMoreProps {
  theme?: DefaultTheme
  title: string
  link: {
    path: string
    text: string
  }
  $_testid?: string
}

export const StyledReadMore: StyledComponent<
  'div',
  any,
  Pick<IReadMoreProps, 'theme'>,
  never
> = styled.div`
  display: flex;

  ${({ theme }: IReadMoreProps): FlattenSimpleInterpolation => css`
    flex-direction: column;
    gap: 1rem;

    @media ${theme!.breakpoints.min.smartphone} {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
    }
  `}
`

export function ReadMore({
  title,
  link,
  $_testid,
}: IReadMoreProps): JSX.Element {
  return (
    <Card $_testid={$_testid}>
      <CardBody>
        <StyledReadMore>
          <h1>{title}</h1>
          <StyledLink to={link.path} $_testid={'ReadMoreLink'}>
            {link.text}
          </StyledLink>
        </StyledReadMore>
      </CardBody>
    </Card>
  )
}
