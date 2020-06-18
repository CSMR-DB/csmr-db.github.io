import React from 'react'
import { AnyExoticRefTargets, AnyExoticRefComponent } from '../types.interface'
import { SplitChars } from 'react-gsap'
import { Cursor } from './Cursor'
import { Flex } from '../../Flex'

export interface IWriteWithCursorProps {
  textWrapper: (children: React.ReactNode) => JSX.Element
  children: string
  wrapperRef?: AnyExoticRefTargets
  cursorRef?: AnyExoticRefTargets
}

export const WriteWithCursor: AnyExoticRefComponent<IWriteWithCursorProps> = React.forwardRef((props: IWriteWithCursorProps, ref: AnyExoticRefTargets): JSX.Element =>
  (
    <div ref={props.wrapperRef}>
      <Flex direction="row">
        {
          props.textWrapper(
            <SplitChars ref={ref} wrapper={<span />} children={props.children} />
          )
        }
        <Cursor ref={props.cursorRef}/>
      </Flex>
    </div>
  ))