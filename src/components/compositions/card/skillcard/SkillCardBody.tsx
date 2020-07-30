import React from 'react'

import { StringOrUrlArray } from '../../../../types/common.types'

import { ArticleBody } from '../../../ArticleBody'

interface ISkillCardBodyProps {
  description: StringOrUrlArray
}
export function SkillCardBody({
  description,
}: ISkillCardBodyProps): JSX.Element {
  return <ArticleBody body={description} />
}
