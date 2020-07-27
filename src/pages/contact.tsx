import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { Layout } from '../components/Layout'
import { ContactLayout, IContactLayoutProps } from '../layouts/ContactLayout'

function ContactPage(): JSX.Element {
  const data: IContactLayoutProps = {
    contacts: StaticDataManager.contacts,
  }

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Get in touch via Mail, LinkedIn or Discord"
        siteMetadata={StaticDataManager.siteMetadata}
      />
      <ContactLayout {...data} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ContactPage
