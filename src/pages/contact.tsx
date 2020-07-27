import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { Layout } from '../components/Layout'
import { ContactLayout, IContactLayoutProps } from '../layouts/ContactLayout'

function ContactPage(): JSX.Element {
  const data: IContactLayoutProps = {
    contacts: StaticDataManager.contacts,
  }

  return (
    <Layout>
      <ContactLayout {...data} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ContactPage
