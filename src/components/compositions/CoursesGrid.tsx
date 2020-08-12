import React from 'react'

import { Course } from '../../data/objects/coursesProvider'

import { Flex } from '../Flex'
import { Grid } from '../Grid'
import { Card } from './card/Card'
import { CardHeader } from './card/CardHeader'
import { Underline } from '../Underline'
import { ColoredText } from '../ColoredText'
import { CardBody } from './card/CardBody'
import { Paddie } from '../Paddie'

export interface ICoursesGridProps {
  courses: [Course['category'], Course[]][]
}

export function CoursesGrid({ courses }: ICoursesGridProps): JSX.Element {
  return (
    <Flex $direction={'column'} $justifyContent={'center'}>
      <Grid $columns={6} $alignItems={'baseline'}>
        {courses.map(
          (
            courseGroup: [Course['category'], Course[]],
            i: number
          ): JSX.Element => (
            <Card key={i}>
              <CardHeader>
                <Paddie>
                  <Underline>
                    <h2>{courseGroup[0]}</h2>
                  </Underline>
                </Paddie>
              </CardHeader>
              <CardBody>
                {courseGroup[1].map(
                  (course: Course, j: number): JSX.Element => (
                    <h5 key={j}>
                      <ColoredText
                        $color={
                          course.category === 'Development' ? '#000' : '#666'
                        }
                      >
                        {'❭'} {course.name}
                      </ColoredText>
                    </h5>
                  )
                )}
              </CardBody>
            </Card>
          )
        )}
      </Grid>
      <div>
        <p>
          * Not intrinsically about programming, I just made it so. ** Not a
          full on course with credits, but a support course to provide extra
          knowledge about Adobe software.
        </p>
      </div>
    </Flex>
  )
}
