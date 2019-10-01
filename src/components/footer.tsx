import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { theme } from '../data/theme'
import { CenteredBlock } from './CenteredBlock'
// tslint:disable-next-line: no-implicit-dependencies
import { PaddingProperty } from 'csstype'

const StyledFooter: StyledComponent<'footer', any, {}, never> = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 2rem;
  background: black;
  color: white;
  height: 32rem;
  z-index: -1;
`

const StyledA: StyledComponent<'a', any, {}, never> = styled.a`
  color: ${theme.primary};
  text-decoration: none;

  &:hover {
    color: ${theme.primary_hover};
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
`

const Gatsby: JSX.Element = (
  <StyledA href="https://www.gatsbyjs.org" target="blank">
    Gatsby
  </StyledA>
)
const StyledComponents: JSX.Element = (
  <StyledA href="https://www.styled-components.com/" target="blank">
    styled-components
  </StyledA>
)
const VSCodeIcons: JSX.Element = (
  <StyledA
    href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"
    target="blank"
  >
    vscode-icons
  </StyledA>
)
const FiraCode: JSX.Element = (
  <StyledA href="https://www.npmjs.com/package/firacode" target="blank">
    Fira Code
  </StyledA>
)
const GHPages: JSX.Element = (
  <StyledA href="https://www.npmjs.com/package/gh-pages" target="blank">
    gh-pages
  </StyledA>
)
const Prettier: JSX.Element = (
  <StyledA href="https://prettier.io/" target="blank">
    prettier
  </StyledA>
)
const AdobeIcons: JSX.Element = (
  <StyledA href="https://www.iconfinder.com/graphiqa" target="blank">
    Graphiqa Studio
  </StyledA>
)

export const Footer: () => JSX.Element = (): JSX.Element => (
  <StyledFooter>
    <h6>
      "Success is 1% inspiration, 98% perspiration and 2% attention to detail."
      - Phil Dunphy
    </h6>
    <CenteredBlock>
      <ProgramContainer>
        <ProgramLine>
          type Requirements {`{ essentialIngredients: emoji[] }`}
        </ProgramLine>
        <ProgramLine>
          interface IWebsite = {`{ url: string, visit: () => WebPage }`}
        </ProgramLine>
        <br />
        <ProgramLine>{`const WebsitePromise: Promise<IWebsite> = async ({ essentialIngredient }: Requirements) => {`}</ProgramLine>
        <ProgramLine padding={1}>
          const build: Website = await start({Gatsby})
        </ProgramLine>
        <ProgramLine padding={2}>.then(</ProgramLine>
        <ProgramLine padding={3}>pipe(</ProgramLine>
        <ProgramLine padding={4}>addStyle({StyledComponents}),</ProgramLine>
        <ProgramLine padding={4}>
          writePersonalStoryUsing({FiraCode}),
        </ProgramLine>
        <ProgramLine padding={4}>
          sprinkleWith(essentialIngredient),
        </ProgramLine>
        <ProgramLine padding={4}>
          giveCreditForCodeIcons({VSCodeIcons}),
        </ProgramLine>
        <ProgramLine padding={4}>
          giveCreditForAdobeIcons({AdobeIcons})
        </ProgramLine>
        <ProgramLine padding={4}>prettifyCodeUsing({Prettier}),</ProgramLine>
        <ProgramLine padding={4}>deployUsing({GHPages})</ProgramLine>
        <ProgramLine padding={3}>)</ProgramLine>
        <ProgramLine padding={2}>)</ProgramLine>
        <br />
        <ProgramLine padding={1}>return build</ProgramLine>
        <ProgramLine>{`}`}</ProgramLine>
        <br />
        <ProgramLine>
          WebsitePromise({`{ essentialIngredients: [ ❤️, ✨, 🎆 ] }`}
          ).then((website: Website) => website.visit())
        </ProgramLine>
      </ProgramContainer>
    </CenteredBlock>
  </StyledFooter>
)
