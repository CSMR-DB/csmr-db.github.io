export interface ICourse {
  name: string
  description: string
  category:
    | 'Development'
    | 'Graphic Design'
    | 'Marketing'
    | 'Organizations'
    | 'Research'
    | 'Misc'
}

export const devCourses: ICourse[] = [
  {
    name: 'WebSkills',
    description: 'Just the absolute starter kit for working with HTML and CSS.',
    category: 'Development',
  },
  {
    name: 'Web Programming',
    description: `$('JavaScript'|'jQuery')`,
    category: 'Development',
  },
  {
    name: 'Realisation',
    description:
      'Using tools other than code to produce functional little apps. We worked with stuff like Appery.io and Layar.',
    category: 'Development',
  },
  {
    name: 'The Digital Workplace *',
    description:
      'A group project in about 8 groups of 4 to 5 students working together to create a prototype for a new Intranet for a client.',
    category: 'Development',
  },
  {
    name: 'Content Management Systems *',
    description: 'Building a website using Wordpress.',
    category: 'Development',
  },
]

export const marketingCourses: ICourse[] = [
  {
    name: 'Marketing & e-Business',
    description: 'An introduction course into digital marketing.',
    category: 'Marketing',
  },
  {
    name: 'Marketing & Communication',
    description: '',
    category: 'Marketing',
  },
  {
    name: 'Digital Methods',
    description:
      'Blogging about specific, current, topics regarding marketing.',
    category: 'Marketing',
  },
]

export const designCourses: ICourse[] = [
  {
    name: 'Workshop **',
    description:
      'We had 2 Workshops and these were not typical courses with an assessment, but instead were meant as an aid to other courses that relied on specific knowledge but were not designed to provide that in itself.',
    category: 'Graphic Design',
  },
  {
    name: 'Interaction Design',
    description:
      'Learning about core design principles like the 5-7 rule, visual aligment and more.',
    category: 'Graphic Design',
  },
  {
    name: 'Webdesign (with Axure)',
    description:
      'Apply what was taught at Interaction Design in a functional prototype built with Axure.',
    category: 'Graphic Design',
  },
  {
    name: 'Digital Storytelling',
    description:
      'Use your knowledge about Adobe Photoshop, Illustrator, After Effects and whatever else you want to produce an animated short.',
    category: 'Graphic Design',
  },
  {
    name: 'Film',
    description: 'Working with a camera, as opposed to just digital assets.',
    category: 'Graphic Design',
  },
]

export const organizationCourses: ICourse[] = [
  {
    name: 'Organisations & Communication',
    description: '',
    category: 'Organizations',
  },
  {
    name: 'Organisations & Change Management',
    description:
      'Say you need to implement a different workflow or new tools in an organization. How would you go about doing so?',
    category: 'Organizations',
  },
  {
    name: 'Processes & Information Supply',
    category: 'Organizations',
    description: '',
  },
]

export const researchCourses: ICourse[] = [
  {
    name: 'Evaluation Research',
    description: 'Focus on qualitative research.',
    category: 'Research',
  },
  {
    name: 'Testing & Measuring',
    description: 'Focus on quantitative research',
    category: 'Research',
  },
]

export const miscCourses: ICourse[] = [
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

export const COURSES: ICourse[] = [
  ...devCourses,
  ...designCourses,
  ...marketingCourses,
  ...organizationCourses,
  ...researchCourses,
  ...miscCourses,
]
