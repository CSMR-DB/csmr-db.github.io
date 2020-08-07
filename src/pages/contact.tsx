import React from 'react'
import { helmetJsonLdProp } from 'react-schemaorg'
import { Person } from 'schema-dts'

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
        route={'/contact'}
        jsonLd={[
          helmetJsonLdProp<Person>({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: StaticDataManager.siteMetadata.author,
            email: 'casimir.db@gmail.com',
          }),
        ]}
      />
      <ContactLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default ContactPage
