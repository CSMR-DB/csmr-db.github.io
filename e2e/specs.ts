export type SPECSDEF = {
  ANIMATION_WAIT_TIME: number
  LIST_TOP_COUNT: number
  PAGE_PREFIXES: {
    PROJECTS: string
    SKILLSET: string
  }
  REQUIRED_SKILLSET_PAGES: string[]
  REQUIRED_CONTACT_OPTIONS: {
    HREF: string
    NAME: string
    OPENS: 'POPUP' | 'PAGE'
  }[]
  REM_TO_PX: number
}

export const SPECS: SPECSDEF = {
  ANIMATION_WAIT_TIME: 2000,
  LIST_TOP_COUNT: 3,
  PAGE_PREFIXES: {
    PROJECTS: 'projects',
    SKILLSET: 'skillset',
  },
  REQUIRED_SKILLSET_PAGES: [
    'html',
    'css',
    'javascript',
    'typescript',
    'react',
    'angular',
    'jest',
    'git',
    'php',
    'adobe_illustrator',
    'adobe_indesign',
    'adobe_after_effects',
    'vue',
    'graphql',
    'mongodb',
  ],
  REQUIRED_CONTACT_OPTIONS: [
    { HREF: 'mailto://casimir.db@outlook.com', NAME: 'Mail', OPENS: 'POPUP' },
    {
      HREF: 'https://www.linkedin.com/in/casimir-de-bruijn-309990161/',
      NAME: 'LinkedIn',
      OPENS: 'PAGE',
    },
    {
      HREF: 'https://discord.com/users/187303558599671808',
      NAME: 'Discord',
      OPENS: 'PAGE',
    },
  ],
  REM_TO_PX: 16,
}
