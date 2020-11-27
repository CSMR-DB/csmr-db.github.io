import { ExperienceData } from './../graphql/experienceDataProvider'
import { DynamicImages } from './../graphql/dynamicImagesProvider'
import { DynamicIcons } from './../graphql/dynamicIconsProvider'
import { ProjectsData } from '../graphql/projectsDataProvider'
import { SkillsetData } from '../graphql/skillsetDataProvider'
import { GameWallpapers } from '../graphql/gameWallpapersProvider'
import { SeriesPosters } from '../graphql/seriesPostersProvider'
import {
  SiteMetadata,
  SkillsetAllMarkdownRemark,
  ImageSharpAllFiles,
  ProjectsAllMarkdownRemark,
  ProjectMarkdownEdge,
  SkillsetMarkdownEdge,
  ExperienceAllMarkdownRemark,
} from '../../types/graphql.types'
import { PhotographySquares } from '../graphql/photographySquaresProvider'
import { PhotographyData } from '../graphql/photographyDataProvider'
import { Tool } from '../objects/toolsProvider'
import { AStaticDataManager } from '../StaticDataManager'
import { RouteObject } from '../objects/routesProvider'
import { Course } from '../objects/coursesProvider'
import { Contact } from '../objects/contactsProvider'
import { DefaultTheme } from 'styled-components'
import { mockSVGs } from './tools.mocks'

const mockImageCollection: ImageSharpAllFiles = {
  edges: [
    {
      node: {
        name: 'Photo',
        relativePath: '/photo.jpg',
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: '',
            src: '/photo.jpg',
            srcSet: '/photo.jpg',
          },
        },
      },
    },
  ],
}

const mockProgrammingSkillsetMdx: SkillsetAllMarkdownRemark = {
  edges: [
    {
      node: {
        frontmatter: {
          category: 'Programming',
          date: '1994-01-08T00:00:00+0000',
          title: 'React',
          excerpt: 'I love JSX',
          favorite: true,
          icon: '',
          skillColor: 'red',
          time: 1337,
        },
        generatedRoute: '/skillset/react',
      },
    },
    {
      node: {
        frontmatter: {
          category: 'Programming',
          date: '1994-01-08T00:00:00+0000',
          title: 'Jest',
          excerpt: 'It Jest needs to be done',
          favorite: true,
          icon: '',
          skillColor: 'blue',
          time: 1336,
        },
        generatedRoute: '/skillset/jest',
      },
    },
  ],
}

const mockProgrammingProjectsMdx: ProjectsAllMarkdownRemark = {
  edges: [
    {
      node: {
        frontmatter: {
          category: 'Programming',
          date: '1994-01-08T00:00:00+0000',
          title: 'Portfolio',
          excerpt:
            'Gatsby, TypeScript, React, GraphQL, GSAP, Styled-Components, Jest, Enzyme',
          favorite: true,
          tags: [
            'Gatsby',
            'TypeScript',
            'React',
            'GraphQL',
            'GSAP',
            'Styled-Components',
            'Jest',
            'Enzyme',
          ],
        },
        generatedRoute: '/projects/portfolio',
      },
    },
    {
      node: {
        frontmatter: {
          category: 'Programming',
          date: '1994-01-08T00:00:00+0000',
          title: 'Loopy',
          excerpt: 'I made a fantastic hula-loop once',
          favorite: true,
          tags: ['Hula', 'Loop', 'Perfection'],
        },
        generatedRoute: '/projects/portfolio',
      },
    },
  ],
}

const mockGraphicDesignProjectsMdx: ProjectsAllMarkdownRemark = {
  edges: [
    {
      node: {
        frontmatter: {
          category: 'Graphic Design',
          date: '1994-01-08T00:00:00+0000',
          title: 'Circle',
          excerpt: 'I drew a fantastic circle once',
          favorite: true,
          tags: ['Pencil', 'Shapes', 'Drawing'],
        },
        generatedRoute: '/projects/circle',
      },
    },
  ],
}

const mockGraphicDesignSkillsetMdx: SkillsetAllMarkdownRemark = {
  edges: [
    {
      node: {
        frontmatter: {
          category: 'Graphic Design',
          date: '1994-01-08T00:00:00+0000',
          title: 'Affinity Designer',
          excerpt: 'It has no proper geometry operations',
          favorite: false,
          icon: '',
          skillColor: 'green',
          time: 420,
        },
        generatedRoute: '/skillset/affinity_designer',
      },
    },
  ],
}

const mockExperienceMdx: ExperienceAllMarkdownRemark = {
  edges: [
    {
      node: {
        frontmatter: {
          title: 'React',
          backgroundColor: 'blue',
          type: 'Reactor',
          dateStart: '1994-01-08T00:00:00+0000',
          dateEnd: '1994-01-09T00:00:00+0000',
          excerpt: 'JSX is just fantastic',
        },
        generatedRoute: '',
      },
    },
    {
      node: {
        frontmatter: {
          title: 'Jest',
          backgroundColor: 'red',
          type: 'Jester',
          dateStart: '1994-01-08T00:00:00+0000',
          dateEnd: '1994-01-09T00:00:00+0000',
          excerpt: 'Jest a test',
        },
        generatedRoute: '',
      },
    },
  ],
}

export class StaticDataManager implements AStaticDataManager {
  static get theme(): DefaultTheme {
    return {
      palette: {
        dark: {
          normal: '#000',
          hover: '#222',
          active: '#444',
          lens: '#666',
        },
        light: {
          normal: '#fff',
          hover: '#ddd',
          active: '#bbb',
          lens: '#999',
        },
        first: { normal: '#f00', hover: '#d00', active: '#b00', lens: '#900' },
        second: {
          normal: '#0f0',
          hover: '#0d0',
          active: '#0b0',
          lens: '#090',
        },
        third: { normal: '#00f', hover: '#00d', active: '#00b', lens: '#009' },
        filter: {
          normal: 'saturation(4)',
          hover: 'saturation(4)',
          active: 'saturation(4)',
        },
      },
      breakpoints: {
        min: {
          smartphone: 'only screen and (min-width: 600px)',
          tablet: 'only screen and (min-width: 960px)',
          desktop: 'only screen and (min-width: 1200px)',
          ultrawide: 'only screen and (min-width: 1920px)',
        },
        max: {
          smartphone: 'only screen and (max-width: 600px)',
          tablet: 'only screen and (max-width: 960px)',
          desktop: 'only screen and (max-width: 1200px)',
          ultrawide: 'only screen and (max-width: 1920px)',
        },
      },
      fonts: {
        headings: 'Arial',
        copy: 'serif',
      },
    }
  }

  static get siteMetadata(): SiteMetadata {
    return {
      author: 'Jester',
      description: 'The TestRunner',
      image: '/',
      title: 'Jest',
      url: 'https://www.jest.testrunner',
    }
  }

  static get contacts(): Contact[] {
    return [
      {
        background: 'red',
        href: 'https://mock.test.nowhere',
        iconPath: '',
        text: 'Mock Option',
      },
    ]
  }

  static get courses(): Course[] {
    return [
      {
        category: 'Development',
        description: 'Experimenting with vanilla JS & jQuery',
        name: 'WebProgramming',
      },
    ]
  }

  static get routes(): RouteObject[] {
    return [
      {
        path: '/route',
        title: 'Route',
        boundKeys: ['R', 1],
      },
    ]
  }

  static get tools(): Tool[] {
    return [
      {
        name: 'React',
        svg: mockSVGs().RandomSampleSVG,
        color: 'red',
      },
    ]
  }

  static get photographyData(): PhotographyData {
    return {
      photographyData: mockImageCollection,
    }
  }

  static get photographySquares(): PhotographySquares {
    return {
      photographySquares: mockImageCollection,
    }
  }

  static get seriesPosters(): SeriesPosters {
    return {
      seriesPosters: mockImageCollection,
    }
  }

  static get gameWallpapers(): GameWallpapers {
    return {
      gameWallpapers: mockImageCollection,
    }
  }

  static get skillsetData(): SkillsetData {
    return {
      all: { ...mockProgrammingSkillsetMdx, ...mockGraphicDesignSkillsetMdx },
      top: {
        edges: [
          ...mockProgrammingSkillsetMdx.edges.filter(
            ({
              node: {
                frontmatter: { favorite },
              },
            }: SkillsetMarkdownEdge): boolean => favorite === true
          ),
          ...mockGraphicDesignSkillsetMdx.edges.filter(
            ({
              node: {
                frontmatter: { favorite },
              },
            }: SkillsetMarkdownEdge): boolean => favorite === true
          ),
        ],
      },
      allProgramming: mockProgrammingSkillsetMdx,
      allGraphicDesign: mockGraphicDesignSkillsetMdx,
    }
  }

  static get projectsData(): ProjectsData {
    return {
      all: { ...mockGraphicDesignProjectsMdx, ...mockProgrammingProjectsMdx },
      top: {
        edges: [
          ...mockGraphicDesignProjectsMdx.edges.filter(
            ({
              node: {
                frontmatter: { favorite },
              },
            }: ProjectMarkdownEdge): boolean => favorite === true
          ),
          ...mockProgrammingProjectsMdx.edges.filter(
            ({
              node: {
                frontmatter: { favorite },
              },
            }: ProjectMarkdownEdge): boolean => favorite === true
          ),
        ],
      },
      allProgramming: mockProgrammingProjectsMdx,
      allGraphicDesign: mockGraphicDesignProjectsMdx,
    }
  }

  static get experienceData(): ExperienceData {
    return {
      experienceData: mockExperienceMdx,
    }
  }

  static get dynamicIcons(): DynamicIcons {
    return {
      dynamicIcons: mockImageCollection,
    }
  }

  static get dynamicImages(): DynamicImages {
    return {
      dynamicImages: mockImageCollection,
    }
  }
}
