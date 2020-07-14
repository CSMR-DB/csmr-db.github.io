import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { WidthProperty } from 'csstype'

const StyledPolaroid: StyledComponent<'div', any, {}, never> = styled.div`
  background: white;
  color: rgb(66, 66, 66);
  padding: 2rem 2rem 4rem 2rem;
  height: 24rem;
  width: 22rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`

interface IStyledPolaroidImageWrapperProps {
  width: WidthProperty<1>
}

const StyledPolaroidImageWrapper: StyledComponent<
  'div',
  any,
  IStyledPolaroidImageWrapperProps,
  never
> = styled.div`
  width: ${(props: IStyledPolaroidImageWrapperProps): WidthProperty<1> =>
    props.width};
`

const StyledPolaroidTitleWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  text-align: center;
`

interface IPolaroidProps {
  children: React.ReactNode
  title: React.ReactNode
}

export const Polaroid: React.ForwardRefExoticComponent<
  IPolaroidProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef(
  (
    { children, title }: IPolaroidProps,
    ref:
      | React.RefObject<HTMLDivElement>
      | ((instance: HTMLDivElement) => void)
      | null
  ): JSX.Element => (
    <StyledPolaroid ref={ref}>
      <div>{children}</div>
      <StyledPolaroidTitleWrapper>{title}</StyledPolaroidTitleWrapper>
    </StyledPolaroid>
  )
)
