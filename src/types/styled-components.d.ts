import 'styled-components'
import { ColorProperty, FilterProperty } from 'csstype'
import {
  ThemePalette,
  ThemeBreakpointsGroups,
  ThemeFonts,
} from '../data/objects/themeProvider'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: ThemePalette
    fonts: ThemeFonts
    breakpoints: ThemeBreakpointsGroups
  }
}
