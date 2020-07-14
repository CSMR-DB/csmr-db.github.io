import React, { ReactNode } from 'react'
import { Absolute } from '../../Absolute'
import { Flex } from '../../Flex'
import styled, { StyledComponent } from 'styled-components'

interface ILayerProps {
  children: ReactNode
}

const StyledLayer: StyledComponent<'div', any, {}, never> = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`

export const Layer: React.ForwardRefExoticComponent<
  ILayerProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef(
  (
    props: ILayerProps,
    ref:
      | React.RefObject<HTMLDivElement>
      | ((instance: HTMLDivElement) => void)
      | null
  ): JSX.Element => {
    return (
      <StyledLayer ref={ref}>
        {/* <Absolute ref={ref}> */}
        {/* <Flex direction="row" justifyContent="center"> */}
        {props.children}
        {/* </Flex> */}
        {/* </Absolute> */}
      </StyledLayer>
    )
  }
)
