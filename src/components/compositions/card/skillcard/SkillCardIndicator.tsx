import React from 'react'
import { ColorProperty } from 'csstype'
import { Tween } from 'react-gsap'

import { Heart } from '../../../Heart'

interface ISkillCardIndicator {
  litColor: ColorProperty
  index: number
  instance: number
}

export function SkillCardIndicator({
  litColor,
  index,
  instance,
}: ISkillCardIndicator): JSX.Element {
  return (
    <Tween
      from={{ scale: 8, opacity: 0 }}
      duration={0.125}
      delay={1 + index / 8 + instance * 0.125}
    >
      <Heart fill={litColor} width={'1rem'} height={'1rem'} />
    </Tween>
  )
}
