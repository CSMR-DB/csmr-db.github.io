import { BackgroundColorProperty, ColorProperty, FontProperty } from 'csstype'

interface IThemeBreakpoints {
  smartphone: string
  tablet: string
  desktop: string
}

interface ITheme {
  background: BackgroundColorProperty
  primary: ColorProperty
  active: ColorProperty
  primaryHover: ColorProperty
  activeIndicator: ColorProperty
  inactiveIndicator: ColorProperty
  mainNav: {
    main: ColorProperty
    active: ColorProperty
  }
  font: {
    headers: FontProperty
    content: FontProperty
  }

  breakpoints: {
    min: IThemeBreakpoints
    max: IThemeBreakpoints
  }
}

export const theme: ITheme = {
  background: '#F8F8F8',
  primary: '#0088CD',
  active: '#00D8FD',
  primaryHover: '#00C6FF',
  activeIndicator: '#ffb74d',
  inactiveIndicator: 'lightgrey',
  mainNav: {
    main: 'rgba(0, 0, 0, 1)',
    active: 'rgba(32, 32, 32, 1)',
  },
  font: {
    headers: 'Merriweather',
    content: 'Fira Code',
  },

  breakpoints: {
    min: {
      smartphone: `only screen and (min-width: 600px) and (orientation: portrait)`,
      tablet: `only screen and (min-width: 960px)`,
      desktop: `only screen and (min-width: 1200px)`,
    },
    max: {
      smartphone: `only screen and (max-width: 600px) and (orientation: portrait)`,
      tablet: `only screen and (max-width: 960px)`,
      desktop: `only screen and (max-width: 1200px)`,
    },
  },
}
