import React from 'react'
import { Tween } from 'react-gsap'

import { StringOrUrlArray } from '../../../../types/StringOrUrlObject'

import { ArticleBody } from '../../../ArticleBody'

interface ISkillCardBodyProps {
  description: StringOrUrlArray
  index: number
}
export function SkillCardBody({
  description,
  index,
}: ISkillCardBodyProps): JSX.Element {
  return (
    <Tween
      from={{ opacity: 0 }}
      duration={1}
      delay={1 + index * 0.125}
      ease="power1"
    >
      <ArticleBody body={description} />
    </Tween>
  )
}
