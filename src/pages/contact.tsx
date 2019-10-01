import React from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Grid } from '../components/grid'
import { SocialButton } from '../components/SocialButton'
import { CenteredBlock } from '../components/CenteredBlock'
// tslint:disable-next-line: no-implicit-dependencies
import { BackgroundColorProperty } from 'csstype'

interface IContact {
  background: BackgroundColorProperty
  iconPath: string
  href: string
  text: string
}

const Contacts: IContact[] = [
  {
    background: '#000000',
    iconPath: 'icons/email.png',
    href: 'mailto://casimir.db@outlook.com',
    text: 'Mail',
  },
  {
    background: '#007AB9',
    iconPath: 'icons/linkedin.png',
    href: 'https://www.linkedin.com/in/casimir-de-bruijn-309990161/',
    text: 'LinkedIn',
  },
  {
    background: '#8C9EFF',
    iconPath: 'icons/discord.png',
    href: 'https://discordapp.com/users/187303558599671808',
    text: 'Discord',
  },
]

const SecondPage: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <SEO
      title="Contact"
      // description="Get in touch with me through some social links"
    />
    <CenteredBlock>
      <h1>Get in touch!</h1>
      <p>
        I don't do Twitter and I don't really use Facebook other than checking
        it about twice a year. However, there are other ways to get in touch
        with me. I don't have a fancy form (yet), but that shouldn't be a
        dealbreaker. I check my mail at least once a day, LinkedIn weekly and
        I'm pretty much always available on Discord. You just do whatever feels
        right 😉.
      </p>
      <Grid columns={3} rows={1}>
        {Contacts.map(
          ({ background, iconPath, href, text }: IContact, key: number) => (
            <SocialButton
              background={background}
              iconPath={iconPath}
              href={href}
              key={key}
            >
              {text}
            </SocialButton>
          )
        )}
      </Grid>
    </CenteredBlock>
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default SecondPage
