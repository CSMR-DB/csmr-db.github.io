import { BackgroundColorProperty } from 'csstype'

export interface IContact {
  background: BackgroundColorProperty
  iconPath: string
  href: string
  text: string
}

const CONTACTS: IContact[] = [
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

export function contactsProvider(): IContact[] {
  return CONTACTS
}
