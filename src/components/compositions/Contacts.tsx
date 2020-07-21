import React from 'react'

import { IContact } from '../../data/contacts'

import { SocialButton } from './SocialButton'

export interface IContactsProps {
  contacts: IContact[]
}

export function Contacts({ contacts }: IContactsProps): JSX.Element {
  return (
    <>
      {contacts.map(
        (
          { background, iconPath, href, text }: IContact,
          key: number
        ): JSX.Element => (
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
    </>
  )
}
