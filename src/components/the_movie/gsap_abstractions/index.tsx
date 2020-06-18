import React from 'react'
import { Tween } from 'react-gsap';

type WriteConfig = {
  target: string
  position: string | number
  duration?: number
}

type CursorConfig = {
  target: string
  positions: [(string | number), (string | number)]
}

export function Write({ target, position }: WriteConfig): JSX.Element {
  return (
    <>
      <Tween
        from={{ display: 'none' }}
        stagger={0.025}
        duration={.05}
        position={position}
        target={target}
      />
    </>
  )
}

export function AnimateCursor({ target, positions }: CursorConfig): JSX.Element {
  return (
    <>
      <Tween
        from={{ display: 'none' }}
        duration={0}
        position={positions[0]}
        target={target}
      />
      <Tween
        to={{ display: 'none' }}
        duration={0}
        position={positions[1]}
        target={target}
      />
    </>
  )
}

export function InOut({ target, positions }: { target: string, positions: [(string | number), (string | number)] }): JSX.Element {
  return (
    <>
      <Tween
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        duration={0}
        position={positions[0]}
        target={target}
      />
      <Tween
        from={{ opacity: 1 }}
        to={{ opacity: 0 }}
        duration={0}
        position={positions[1]}
        target={target}
      />
    </>
  )
}