import React from 'react'

import { IImageSharp } from '../../../../types/interfaces'
import { StringOrUrlArray } from '../../../../types/StringOrUrlObject'

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
  image?: string | IImageSharp
  video?: string
  title: string
  body?: StringOrUrlArray
  tags?: string[]
  html?: string
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
