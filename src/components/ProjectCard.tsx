import React, { ReactNode } from 'react'
import { StringOrUrlArray } from '../types/StringOrUrlObject'
import { Card, CardHeader, CardHeaderText, CardBody, CardFooter } from './Card'
import { IFeaturedImage } from '../templates/interfaces'
import { ArticleBody } from './ArticleBody'
import { CardHeaderImageOrVideo } from './CardHeaderImageOrVideo'
import { ArticleTags } from './ArticleTags'
import { StyledLink } from './StyledLink'
import { DateFormatted } from './DateFormatted'
import { ReadingTime } from './ReadingTime'
import { Tween, Timeline } from 'react-gsap'

interface IProjectCardProps {
  index: number
  image?: string | IFeaturedImage
  video?: string
  title: string
  body?: StringOrUrlArray
  tags?: string[]
  html?: string
  date?: string
  timeToRead?: number
  path: string
}

function HeaderGSAP({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Tween from={{ scale: 0 }} duration={1}>
      {children}
    </Tween>
  )
}

export const ProjectCard: (props: IProjectCardProps) => JSX.Element = ({
  index,
  image,
  video,
  title,
  body,
  tags,
  // html,
  date,
  timeToRead,
  path,
}: IProjectCardProps): JSX.Element => (
  <Tween from={{ scale: .75, opacity: 0 }} duration={1} delay={.25 + index * .125} ease="back">
    <Card>
      <CardHeader>
        <HeaderGSAP>
          <CardHeaderImageOrVideo video={video} image={image} />
        </HeaderGSAP>
        <CardHeaderText>
          <h1>
            <StyledLink to={path}>{title}</StyledLink>
          </h1>
          <h6>
            <DateFormatted dateString={date} />
            <span> · </span>
            <ReadingTime timeToRead={timeToRead} />
          </h6>
        </CardHeaderText>
      </CardHeader>
      <CardBody>
        {ArticleBody({ body })}
        {/* {html && <div dangerouslySetInnerHTML={{ __html: html }} />} */}
      </CardBody>
      <CardFooter>
        <ArticleTags tags={tags} />
      </CardFooter>
    </Card>
  </Tween>
)
