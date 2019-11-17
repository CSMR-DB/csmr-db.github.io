import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CenteredBlock } from './CenteredBlock'
import { PaddingProperty } from 'csstype'
import { StyledA } from './StyledLink'
import { theme } from '../data/theme'

const StyledFooter: StyledComponent<'footer', any, {}, never> = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 2rem;
  background: black;
  color: white;
  height: 48rem;
  z-index: -1;

  @media ${theme.breakpoints.max.smartphone} {
    height: 100vh;
  }
`

const ProgramContainer: StyledComponent<'div', any, {}, never> = styled.div`
  margin-bottom: 1rem;

  & > p {
    margin: 0;
    text-align: left;
  }
`

interface IProgramLineProps {
  padding?: number
}

const ProgramLine: StyledComponent<
  'p',
  any,
  IProgramLineProps,
  never
> = styled.p`
  padding-left: ${(props: IProgramLineProps): PaddingProperty<1> | number =>
    props.padding + 'rem' || 0};
  margin: 0 !important;
`

type CreditFn = (href: string, title: string) => JSX.Element

const Credit: CreditFn = (href: string, title: string): JSX.Element => (
  <StyledA href={href} target="blank">
    {title}
  </StyledA>
)

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
}

const FooterQuote: StyledComponent<'h6', any, {}, never> = styled.h6`
  line-height: 1.2rem !important;
`

export const Footer: () => JSX.Element = (): JSX.Element => (
  <StyledFooter>
    <FooterQuote>
      "Success is 1% inspiration, 98% perspiration and 2% attention to detail."
      - Phil Dunphy
    </FooterQuote>
    <CenteredBlock>
      <ProgramContainer>
        <ProgramLine>type Requirements = {`{ essence: emoji[] }`}</ProgramLine>
        <ProgramLine>type DevWebsite = {`{ typescript: boolean }`}</ProgramLine>
        <ProgramLine>interface IWebsite {'{'}</ProgramLine>
        <ProgramLine padding={1}>{`url: string`}</ProgramLine>
        <ProgramLine padding={1}>{`visit: () => WebPage`}</ProgramLine>
        <ProgramLine>{'}'}</ProgramLine>
        <br />
        <ProgramLine>{`async function websitePromise({ essence }: Requirements): Promise<IWebsite> {`}</ProgramLine>
        <ProgramLine padding={1}>
          return await start({CREDITS.gatsby})
        </ProgramLine>
        <ProgramLine padding={2}>.then((dev: DevWebsite) => </ProgramLine>
        <ProgramLine padding={3}>pipe(</ProgramLine>
        <ProgramLine padding={4}>
          addStyle({CREDITS.styledComponents}),
        </ProgramLine>
        <ProgramLine padding={4}>useFont({CREDITS.firaCode}),</ProgramLine>
        <ProgramLine padding={4}>sprinkleWith(essence),</ProgramLine>
        <ProgramLine padding={4}>
          addCodeIcons({CREDITS.vsCodeIcons}),
        </ProgramLine>
        <ProgramLine padding={4}>
          addAdobeIcons({CREDITS.adobeIcons})
        </ProgramLine>
        <ProgramLine padding={4}>
          prettifyCodeUsing({CREDITS.prettier}),
        </ProgramLine>
        <ProgramLine padding={4}>
          makeCodeImagesUsing({CREDITS.carbon}),
        </ProgramLine>
        <ProgramLine padding={4}>deployUsing({CREDITS.ghPages})</ProgramLine>
        <ProgramLine padding={3}>)(dev)</ProgramLine>
        <ProgramLine padding={2}>)</ProgramLine>
        <ProgramLine>{`}`}</ProgramLine>
        <br />
        <ProgramLine>
          websitePromise({`{ essence: [ ❤️, ✨, 🎆 ] }`})
        </ProgramLine>
        <ProgramLine padding={1}>.then((website: IWebsite) =></ProgramLine>
        <ProgramLine padding={2}>website.visit())</ProgramLine>
        <ProgramLine padding={1}>)</ProgramLine>
      </ProgramContainer>
    </CenteredBlock>
  </StyledFooter>
)
