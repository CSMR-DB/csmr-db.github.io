import React from 'react'

import { Contact } from '../../data/objects/contactsProvider'

import { SocialButton } from './SocialButton'

export interface IContactsProps {
  contacts: Contact[]
}

export function Contacts({ contacts }: IContactsProps): JSX.Element {
  return (
    <>
      {contacts.map(
        (
          { background, iconPath, href, text }: Contact,
          key: number
        ): JSX.Element => (
          <SocialButton
            $background={background}
            iconPath={iconPath}
            href={href}
            key={key}
            $_testid={`SocialButton${text}`}
          >
            {text}
          </SocialButton>
        )
      )}
    </>
  )
}
