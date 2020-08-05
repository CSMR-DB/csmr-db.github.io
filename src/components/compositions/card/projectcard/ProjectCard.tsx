import React from 'react'

import { FileChildImageSharp } from '../../../../types/graphql.types'
import { StringOrUrlArray } from '../../../../types/common.types'

import { Card } from '../Card'
import { ArticleBody } from '../../../ArticleBody'
import { CardHeaderImageOrVideo } from '../CardHeaderImageOrVideo'
import { ArticleTags } from '../../../ArticleTags'
import { StyledLink } from '../../../StyledLink'
import { DateFormatted } from '../../../DateFormatted'
import { CardHeader } from '../CardHeader'
import { CardFooter } from '../CardFooter'
import { CardBody } from '../CardBody'
import { CardHeaderText } from '../CardHeaderText'

interface IProjectCardProps {
  index: number
  image?: string | FileChildImageSharp
  video?: string
  title: string
  body?: StringOrUrlArray
  tags?: string[]
  date?: string
  fileAbsolutePath: string
}

export const ProjectCard: (props: IProjectCardProps) => JSX.Element = ({
  index,
  image,
  video,
  title,
  body,
  tags,
  date,
  fileAbsolutePath,
}: IProjectCardProps): JSX.Element => (
  <Card index={index}>
    <CardHeader>
      {(video || image) && (
        <CardHeaderImageOrVideo video={video} image={image} />
      )}
      <CardHeaderText>
        <h1>
          <StyledLink to={fileAbsolutePath}>{title}</StyledLink>
        </h1>
        <h6>
          <DateFormatted dateString={date} />
        </h6>
      </CardHeaderText>
    </CardHeader>
    <CardBody>{ArticleBody({ body })}</CardBody>
    <CardFooter>
      <ArticleTags tags={tags} />
    </CardFooter>
  </Card>
)
