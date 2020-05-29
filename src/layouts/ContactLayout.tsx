import React from 'react'
import { SEO } from '../components/SEO'
import { Grid } from '../components/Grid'
import { SocialButton } from '../components/SocialButton'
import { CenteredBlock } from '../components/CenteredBlock'

import { BackgroundColorProperty } from 'csstype'

export interface IContact {
  background: BackgroundColorProperty
  iconPath: string
  href: string
  text: string
}

export interface IContactLayoutProps {
  contacts: IContact[]
}

export function ContactLayout({ contacts }: IContactLayoutProps): JSX.Element {
  return (
    <>
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
          {contacts.map(
            ({ background, iconPath, href, text }: IContact, key: number): JSX.Element => (
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
    </>
  )
}