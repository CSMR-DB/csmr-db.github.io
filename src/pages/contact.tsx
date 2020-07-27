import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { ContactLayout, IContactLayoutProps } from '../layouts/ContactLayout'

function ContactPage(): JSX.Element {
  const data: IContactLayoutProps = {
    contacts: StaticDataManager.contacts,
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch via Mail, LinkedIn or Discord"
        siteMetadata={StaticDataManager.siteMetadata}
      />
      <ContactLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default ContactPage
