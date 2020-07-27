import React from 'react'

import { IContact } from '../data/objects/contactsProvider'

import { Layout } from '../components/Layout'
import { Grid } from '../components/Grid'
import { CenteredBlock } from '../components/CenteredBlock'
import { Contacts } from '../components/compositions/Contacts'

export interface IContactLayoutProps {
  contacts: IContact[]
}

export function ContactLayout({ contacts }: IContactLayoutProps): JSX.Element {
  return (
    <Layout>
      <CenteredBlock>
        <h1>Get in touch!</h1>
        <p>
          I don't do Twitter and I don't really use Facebook other than checking
          it about twice a year. However, there are other ways to get in touch
          with me. I don't have a fancy form (yet), but that shouldn't be a
          dealbreaker. I check my mail at least once a day, LinkedIn weekly and
          I'm pretty much always available on Discord. You just do whatever
          feels right 😉.
        </p>
        <Grid $columns={3} $rows={1}>
          <Contacts contacts={contacts} />
        </Grid>
      </CenteredBlock>
    </Layout>
  )
}
