import React from 'react'

import { CONTACTS } from '../data/contacts'

import { Layout } from '../components/Layout'
import { ContactLayout } from '../layouts/ContactLayout'

function ContactPage(): JSX.Element {
  return (
    <Layout>
      <ContactLayout contacts={CONTACTS} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ContactPage
