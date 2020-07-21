import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import {
  BackgroundColorProperty,
  BorderProperty,
  StrokeProperty,
  WidthProperty,
} from 'csstype'

import { theme } from '../../data/theme'

interface ILogoProps {
  size: WidthProperty<1>
  strokeColor?: string
  strokeSize?: number
  fill: string
  background?: BackgroundColorProperty
  bordered?: boolean
}

const StyledLogoBase: StyledComponent<
  'div',
  any,
  Partial<ILogoProps>,
  never
> = styled.div`
  float: left;
  border-radius: 999rem;
  display: block;
  z-index: 999;

  border: ${(props: Partial<ILogoProps>): BorderProperty<1> =>
    props.bordered ? `1px solid ${theme.primary}` : 'none'};

  & svg {
    float: left;
  }
`

interface ILogoPathProps {
  strokeWidth: number
  stroke: StrokeProperty
}

const StyledPath: StyledComponent<
  'path',
  any,
  ILogoPathProps,
  never
> = styled.path`
  ${({
    stroke = 'white',
    strokeWidth = 0,
  }: ILogoPathProps): FlattenSimpleInterpolation => css`
    stroke: ${stroke};
    stroke-width: ${strokeWidth};
  `}
`

export const Logo: (props: ILogoProps) => JSX.Element = ({
  size,
  strokeColor = 'transparent',
  strokeSize = 0,
  fill,
  background,
}: ILogoProps): JSX.Element => (
  <StyledLogoBase background={background}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 270.93333 270.93333"
      version="1.1"
      id="svg3719"
    >
      <g id="layer1" transform="translate(0,-26.06667)">
        <g
          transform="matrix(0.35277777,0,0,-0.35277777,11.994447,373.2)"
          id="g3729"
        >
          <StyledPath
            stroke={strokeColor}
            strokeWidth={strokeSize}
            fill={fill}
            d="M 500,850.00049 C 444.771,850.00049 399.99951,805.22901 399.99951,750 h 0.001 V 600.10694 c -3e-5,-0.0358 -0.001,-0.0712 -0.001,-0.10694 V 536.61914 C 385.2906,545.12797 368.21496,550.00048 350,550.00048 294.77099,550.00048 249.99951,505.229 249.99951,450 c 0,-55.22901 44.77148,-100.00049 100.00049,-100.00049 55.229,0 100.00049,44.77148 100.00049,100.00049 v 63.38086 C 464.7091,504.87148 481.78571,499.99951 500,499.99951 c 55.22901,0 99.99903,44.77149 99.99903,100.00049 0,29.87 -13.0988,56.676 -33.8628,75 20.763,18.324 33.86426,45.13 33.86426,75 0,55.22901 -44.77148,100.00049 -100.00049,100.00049 z m 0,-50.00097 c 27.57,0 49.99952,-22.42951 49.99952,-49.99952 0,-27.57 -22.42952,-49.99951 -49.99952,-49.99951 v -50.00097 c 27.571,0 49.99952,-22.42952 49.99952,-49.99952 0,-27.57 -22.42852,-49.99952 -49.99952,-49.99952 -27.55084,0 -49.96837,22.3987 -49.99951,49.94239 v 0.0571 63.41309 23.17383 63.41308 c 0,27.57001 22.42951,49.99952 49.99951,49.99952 z M 199.99999,550.00048 C 144.77099,550.00048 99.999509,505.229 99.999509,450 c 0,-55.22901 44.771481,-100.00049 100.000481,-100.00049 22.666,0 43.56639,7.54486 60.33838,20.25586 -11.28,12.673 -19.91564,27.75058 -25.03564,44.37158 -9.052,-9.033 -21.53574,-14.62647 -35.30274,-14.62647 -27.57,0 -49.99951,22.42952 -49.99951,49.99952 0,27.57 22.42951,49.99951 49.99951,49.99951 13.767,0 26.25074,-5.59347 35.30274,-14.62647 5.12,16.62101 13.75564,31.69859 25.03564,44.37159 -16.77199,12.711 -37.67238,20.25585 -60.33838,20.25585 z M 350,499.99951 c 27.57,0 49.99951,-22.42951 49.99951,-49.99951 0,-27.57 -22.42951,-49.99952 -49.99951,-49.99952 -27.57,0 -49.99952,22.42952 -49.99952,49.99952 0,27.57 22.42952,49.99951 49.99952,49.99951 z"
            id="path3777"
          />
        </g>
      </g>
    </svg>
  </StyledLogoBase>
)
