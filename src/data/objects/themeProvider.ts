import { ColorProperty, FilterProperty, FontProperty } from 'csstype'
import { DefaultTheme } from 'styled-components'
import { lighten, opacify } from 'polished'

export type ThemeBreakpoints = {
  smartphone: string
  tablet: string
  desktop: string
  ultrawide: string
}

export type ThemeBreakpointsGroups = {
  min: ThemeBreakpoints
  max: ThemeBreakpoints
}

export type ThemeFonts = {
  headings: FontProperty
  copy: FontProperty
}

export type ThemePaletteObject<T> = {
  normal: T
  hover: T
  active: T
  lens: T
}

export type ThemePalette = {
  first: ThemePaletteObject<ColorProperty>
  second: ThemePaletteObject<ColorProperty>
  third: ThemePaletteObject<ColorProperty>
  light: ThemePaletteObject<ColorProperty>
  dark: ThemePaletteObject<ColorProperty>
  filter: Omit<ThemePaletteObject<FilterProperty>, 'lens'>
}

type ThemeBuilderArgs = {
  first: ColorProperty
  second: ColorProperty
  third: ColorProperty
  light: ColorProperty
  dark: ColorProperty
  filter: FilterProperty
  fonts: [FontProperty, FontProperty]
  breakpoints: [number, number, number, number]
}

class Theme implements DefaultTheme {
  #palette: DefaultTheme['palette']

  #breakpoints: DefaultTheme['breakpoints']

  #fonts: DefaultTheme['fonts']

  static createHoverVariant(color: ColorProperty): string {
    return lighten(0.1)(color)
  }

  static createActiveVariant(color: ColorProperty): string {
    return lighten(0.2)(color)
  }

  static createMediaQueryScreenSizeString(
    minMax: 'min' | 'max',
    size: number
  ): string {
    return `only screen and (${minMax}-width: ${size}px)`
  }

  static createBreakpoints(
    sizes: [number, number, number, number]
  ): ThemeBreakpointsGroups {
    return {
      min: {
        smartphone: Theme.createMediaQueryScreenSizeString('min', sizes[0]),
        tablet: Theme.createMediaQueryScreenSizeString('min', sizes[1]),
        desktop: Theme.createMediaQueryScreenSizeString('min', sizes[2]),
        ultrawide: Theme.createMediaQueryScreenSizeString('min', sizes[3]),
      },
      max: {
        smartphone: Theme.createMediaQueryScreenSizeString('max', sizes[0]),
        tablet: Theme.createMediaQueryScreenSizeString('max', sizes[1]),
        desktop: Theme.createMediaQueryScreenSizeString('max', sizes[2]),
        ultrawide: Theme.createMediaQueryScreenSizeString('max', sizes[3]),
      },
    }
  }

  static createPaletteProperties(
    color: ColorProperty
  ): ThemePaletteObject<ColorProperty> {
    return {
      normal: color,
      hover: Theme.createHoverVariant(color),
      active: Theme.createActiveVariant(color),
      lens: opacify(-0.75)(color),
    }
  }

  constructor({
    first,
    second,
    third,
    light,
    dark,
    filter,
    fonts,
    breakpoints,
  }: ThemeBuilderArgs) {
    this.#palette = {
      first: Theme.createPaletteProperties(first),
      second: Theme.createPaletteProperties(second),
      third: Theme.createPaletteProperties(third),
      light: Theme.createPaletteProperties(light),
      dark: Theme.createPaletteProperties(dark),
      filter: {
        normal: filter,
        hover: 'none',
        active: 'none',
      },
    }
    this.#breakpoints = Theme.createBreakpoints(breakpoints)
    this.#fonts = {
      headings: fonts[0],
      copy: fonts[1],
    }
  }

  get palette(): DefaultTheme['palette'] {
    return this.#palette
  }

  get breakpoints(): DefaultTheme['breakpoints'] {
    return this.#breakpoints
  }

  get fonts(): DefaultTheme['fonts'] {
    return this.#fonts
  }
}

// export const theme: DefaultTheme = new Theme({
//   first: 'rgb(72, 99, 156)',
//   second: 'rgb(76, 76, 157)',
//   third: 'rgb(113, 47, 121)',
//   light: 'rgb(240, 240, 240)',
//   dark: 'rgb(20, 20, 20)',
//   filter: 'sepia(0.25) saturate(2) grayscale(1) brightness(.5)',
//   fonts: [ "'Inter', serif", "Fira Code" ],
//   breakpoints: [600, 960, 1200, 1920],
// })

const THEME: DefaultTheme = new Theme({
  first: '#0088CD',
  second: '#00D8FD',
  third: '#EFEFEF',
  light: '#F8F8F8',
  dark: '#000',
  filter: 'sepia(0.25) saturate(2) grayscale(1) brightness(.5)',
  fonts: ["'Inter', serif", 'Fira Code'],
  breakpoints: [600, 960, 1200, 1920],
})

export function themeProvider(): DefaultTheme {
  return THEME
}
