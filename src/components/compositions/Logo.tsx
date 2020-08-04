import React from 'react'
import styled, {
  StyledComponent,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from 'styled-components'
import { BackgroundColorProperty, StrokeProperty } from 'csstype'

interface ILogoProps {
  theme?: DefaultTheme
  $size: string
  $strokeColor?: string
  $strokeWidth?: number
  $fill?: string
  $background?: BackgroundColorProperty
  $bordered?: boolean
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

  & svg {
    float: left;
  }

  ${({
    theme,
    $bordered: bordered,
  }: ILogoProps): FlattenSimpleInterpolation => css`
    border: 1px solid ${bordered ? theme!.palette.first.normal : 'none'};
  `}
`

interface ILogoPathProps {
  $strokeWidth: number
  $stroke: StrokeProperty
}

const StyledPath: StyledComponent<
  'path',
  any,
  ILogoPathProps,
  never
> = styled.path`
  stroke-linecap: round;
  fill: transparent;

  ${({
    $stroke: stroke = 'white',
    $strokeWidth: strokeWidth = 0,
  }: ILogoPathProps): FlattenSimpleInterpolation => css`
    stroke: ${stroke};
    stroke-width: ${strokeWidth};
  `}
`

export const StyledLogo: StyledComponent<
  'svg',
  any,
  ILogoProps,
  never
> = styled.svg`
  ${({ $size: size }: ILogoProps): FlattenSimpleInterpolation => css`
    width: ${size};
    height: ${size};
  `}
`

export const Logo: (props: ILogoProps) => JSX.Element = ({
  $size: size,
  $strokeColor: strokeColor = 'white',
  $strokeWidth: strokeWidth = 8,
  $background: background,
}: ILogoProps): JSX.Element => (
  <StyledLogoBase $background={background}>
    <StyledLogo $size={size} viewBox="0 0 256 256">
      <g transform="matrix(1,0,0,1,0,-320)">
        <StyledPath
          $stroke={strokeColor}
          $strokeWidth={strokeWidth}
          d="M99.143,406.249C104.26,395.454 115.266,388 128,388C145.661,388 160,402.339 160,420C160,423.698 159.371,427.251 158.215,430.555C161.655,431.206 165.046,432.438 168.249,434.287C183.544,443.118 188.792,462.705 179.962,478C173.595,489.028 161.636,494.833 149.729,493.866"
        />
      </g>
      <g transform="matrix(-0.5,-0.866025,0.866025,-0.5,-48.7839,287.801)">
        <StyledPath
          $stroke={strokeColor}
          $strokeWidth={strokeWidth}
          d="M19.832,215.582C18.634,212.278 18,208.712 18,205C18,187.339 32.339,173 50,173C67.661,173 82,187.339 82,205C82,220.632 70.767,233.661 55.936,236.427"
        />
      </g>
    </StyledLogo>
  </StyledLogoBase>
)
