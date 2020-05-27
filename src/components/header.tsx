import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { routes } from '../data/routes'
import { DesktopNav } from './DesktopNav'

interface IHeaderProps {
  siteTitle: string
}

const StyledHeader: StyledComponent<'header', any, {}, never> = styled.header({
  // background: theme.background,
  paddingBottom: '2rem',
  // paddingTop: '2rem',

  '@media screen and (max-width: 600px)': {
    paddingBottom: 0,
    paddingTop: 0,
  },
})

const StyledHeaderDiv: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export function Header({ siteTitle }: IHeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <StyledHeaderDiv>
        <DesktopNav routes={routes} />
      </StyledHeaderDiv>
    </StyledHeader>
  )
}
