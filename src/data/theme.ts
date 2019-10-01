// tslint:disable-next-line: no-implicit-dependencies
import { BackgroundColorProperty, ColorProperty } from 'csstype'
interface ITheme {
  background: BackgroundColorProperty
  primary: ColorProperty
  active: ColorProperty
  primary_hover: ColorProperty
}

export const theme: ITheme = {
  background: '#F8F8F8',
  primary: '#0098CD',
  active: '#00D8FD',
  primary_hover: '#00B6FC',
}
