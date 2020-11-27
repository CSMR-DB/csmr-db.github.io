import { Course } from './../data/objects/coursesProvider'
import { groupBy } from './groupBy'

const miscCourses: Course[] = [
  {
    name: 'Doing New Things',
    description: '',
    category: 'Misc',
  },
  {
    name: 'Professional Skills',
    description: '',
    category: 'Misc',
  },
  {
    name: 'Legal Skills',
    description: '',
    category: 'Misc',
  },
  {
    name: 'Entrepreneurship',
    description: '',
    category: 'Misc',
  },
]

describe('groupBy', (): void => {
  it('should group Courses', (): void => {
    const expected: Map<string, Course[]> = new Map()
    expected.set('Misc', [
      {
        name: 'Doing New Things',
        description: '',
        category: 'Misc',
      },
      {
        name: 'Professional Skills',
        description: '',
        category: 'Misc',
      },
      {
        name: 'Legal Skills',
        description: '',
        category: 'Misc',
      },
      {
        name: 'Entrepreneurship',
        description: '',
        category: 'Misc',
      },
    ])

    expect(groupBy(miscCourses, 'category')).toEqual(expected)
  })
})
