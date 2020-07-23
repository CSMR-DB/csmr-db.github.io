import 'styled-components'
import { ColorProperty, FilterProperty } from 'csstype'
import { IThemePalette, IThemeBreakpointsGroups, IThemeFonts } from '../data/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IThemePalette
    fonts: IThemeFonts
    breakpoints: IThemeBreakpointsGroups
  }
}
