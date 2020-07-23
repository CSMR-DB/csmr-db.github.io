import React from 'react'
import styled, {
  StyledComponent,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components'

import { StyledA } from '../../StyledLink'

const StyledPseudoCode: StyledComponent<'div', any, {}, never> = styled.div`
  margin-bottom: 1rem;

  & > p {
    margin: 0;
    text-align: left;
  }
`
interface IProgramLineProps {
  $padding?: number
}

const ProgramLine: StyledComponent<
  'p',
  any,
  IProgramLineProps,
  never
> = styled.p`
  margin: 0 !important;

  ${({ $padding: padding = 0 }: IProgramLineProps): FlattenSimpleInterpolation => css`
    padding-left: ${padding}rem;
  `}
`

function Credit(href: string, title: string): JSX.Element {
  return (
    <StyledA $color={'white'} href={href} target="blank">
      {title}
    </StyledA>
  )
}

const CREDITS: { [key: string]: JSX.Element } = {
  gatsby: Credit('https://www.gatsbyjs.org', 'Gatsby'),
  styledComponents: Credit(
    'https://www.styled-components.com/',
    'styled-components'
  ),
  firaCode: Credit('https://www.npmjs.com/package/firacode', 'Fira Code'),
  vsCodeIcons: Credit(
    'https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons',
    'vscode-icons'
  ),
  adobeIcons: Credit('https://www.iconfinder.com/graphiqa', 'Graphiqa Studio'),
  prettier: Credit('https://prettier.io/', 'Prettier'),
  carbon: Credit('https://carbon.now.sh/', 'Carbon'),
  ghPages: Credit('https://www.npmjs.com/package/gh-pages', 'gh-pages'),
  gsap: Credit('https://greensock.com/gsap/', 'GSAP'),
  reactGsap: Credit('https://www.npmjs.com/package/react-gsap', 'react-gsap'),
  pageTransitions: Credit(
    'https://www.gatsbyjs.org/packages/gatsby-plugin-transitions/',
    'gatsby-plugin-transitions'
  ),
}

export function PseudoCode(): JSX.Element {
  return (
    <StyledPseudoCode>
      <ProgramLine>type Requirements = {`{ essence: Emoji[] }`}</ProgramLine>
      <ProgramLine>type DevWebsite = {`{ typescript: boolean }`}</ProgramLine>
      <ProgramLine>interface IWebsite {'{'}</ProgramLine>
      <ProgramLine $padding={1}>{`url: string`}</ProgramLine>
      <ProgramLine $padding={1}>{`visit: () => WebPage`}</ProgramLine>
      <ProgramLine>{'}'}</ProgramLine>
      <br />
      <ProgramLine>{`async function websitePromise({ essence }: Requirements): Promise<IWebsite> {`}</ProgramLine>
      <ProgramLine $padding={1}>
        return await start({CREDITS.gatsby})
      </ProgramLine>
      <ProgramLine $padding={2}>.then((dev: DevWebsite) ={'>'} </ProgramLine>
      <ProgramLine $padding={3}>pipe(</ProgramLine>
      <ProgramLine $padding={4}>
        addStyle({CREDITS.styledComponents}),
      </ProgramLine>
      <ProgramLine $padding={4}>useFont({CREDITS.firaCode}),</ProgramLine>
      <ProgramLine $padding={4}>
        addCodeIcons({CREDITS.vsCodeIcons}),
      </ProgramLine>
      <ProgramLine $padding={4}>
        addAdobeIcons({CREDITS.adobeIcons}),
      </ProgramLine>
      <ProgramLine $padding={4}>
        prettifyCodeUsing({CREDITS.prettier}),
      </ProgramLine>
      <ProgramLine $padding={4}>
        makeCodeImagesUsing({CREDITS.carbon}),
      </ProgramLine>
      <ProgramLine $padding={4}>
        useAnimationLibraries({CREDITS.gsap}, {CREDITS.reactGsap},{' '}
        {CREDITS.pageTransitions}),
      </ProgramLine>
      <ProgramLine $padding={4}>sprinkleWith(essence),</ProgramLine>
      <ProgramLine $padding={4}>deployUsing({CREDITS.ghPages})</ProgramLine>
      <ProgramLine $padding={3}>)(dev)</ProgramLine>
      <ProgramLine $padding={2}>)</ProgramLine>
      <ProgramLine>{`}`}</ProgramLine>
      <br />
      <ProgramLine>websitePromise({`{ essence: [ ❤️, ✨, 🎆 ] }`})</ProgramLine>
      <ProgramLine $padding={1}>.then((website: IWebsite) ={'>'}</ProgramLine>
      <ProgramLine $padding={2}>website.visit())</ProgramLine>
      <ProgramLine $padding={1}>)</ProgramLine>
    </StyledPseudoCode>
  )
}
