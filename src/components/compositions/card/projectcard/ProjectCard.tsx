import React from 'react'
import Image from 'gatsby-image'

import { FileChildImageSharp } from '../../../../types/graphql.types'

import { Card } from '../Card'
import { ArticleTags } from '../../../compositions/ArticleTags'
import { StyledLink } from '../../../StyledLink'
import { DateFormatted } from '../../../DateFormatted'
import { CardHeader } from '../CardHeader'
import { CardFooter } from '../CardFooter'
import { CardBody } from '../CardBody'
import { CardHeaderText } from '../CardHeaderText'

interface IProjectCardProps {
  title: string
  body: string
  tags: string[]
  date: string
  generatedRoute: string
  image?: FileChildImageSharp
  index?: number
}

export function ProjectCard({
  title,
  body,
  tags,
  date,
  generatedRoute,
  image,
  index = 0,
}: IProjectCardProps): JSX.Element {
  return (
    <Card index={index} $_testid={'ProjectCard'}>
      <CardHeader>
        {image && <Image fluid={image.childImageSharp.fluid} />}
        <CardHeaderText>
          <h1>
            <StyledLink to={generatedRoute} $_testid={'ProjectPageLink'}>
              {title}
            </StyledLink>
          </h1>
          <h6>
            <DateFormatted dateString={date} />
          </h6>
        </CardHeaderText>
      </CardHeader>
      <CardBody>
        <p>{body}</p>
      </CardBody>
      <CardFooter>
        <ArticleTags tags={tags} />
      </CardFooter>
    </Card>
  )
}
