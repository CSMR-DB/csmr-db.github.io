import { FluidObject } from 'gatsby-image'

export interface IAllMarkdownRemark {
  edges: IEdge[]
}

export interface IMarkdownRemark {
  frontmatter: IExtendedFrontmatter
  html: string
  timeToRead: number
}

export interface ISingleItemData {
  data: {
    markdownRemark: IMarkdownRemark
  }
}

export interface IListItemData<T> {
  data: {
    allMarkdownRemark: T
  }
}

export interface IEdge {
  node: {
    frontmatter: IExtendedFrontmatter
    wordCount: {
      words: number
      sentences: number
      paragraphs: number
    }
    timeToRead: number
    html: string
  }
}

export interface IExperienceFrontmatter {
  title: string
  dateStart: string
  dateEnd: string
  description: string
  backgroundColor: string
  type: string
  excerpt: string
}

export interface IExperienceEdge {
  node: {
    frontmatter: IExperienceFrontmatter
    wordCount: {
      words: number
      sentences: number
      paragraphs: number
    }
    timeToRead: number
    html: string
  }
}

export interface IExperienceAllMarkdownRemark {
  edges: IExperienceEdge[]
}

export interface ISkillsetFrontmatter {
  title: string
  path: string
  excerpt: string
  time?: number
  level?: number
}

export interface ISkillsetEdge {
  node: {
    frontmatter: ISkillsetFrontmatter
    wordCount: {
      words: number
      sentences: number
      paragraphs: number
    }
    timeToRead: number
    html: string
  }
}

export interface ISkillsetAllMarkdownRemark {
  edges: ISkillsetEdge[]
}

export interface IProjectsFrontmatter {
  title: string
  category: 'Programming' | 'Graphic Design'
  date: string
  path: string
  excerpt: string
  featuredImage?: IFeaturedImage
  featuredVideo?: string
  tags?: string[]
}

export interface IProjectsEdge {
  node: {
    frontmatter: IProjectsFrontmatter
    wordCount: {
      words: number
      sentences: number
      paragraphs: number
    }
    timeToRead: number
    html: string
  }
}

export interface IProjectsAllMarkdownRemark {
  edges: IProjectsEdge[]
}

export interface IFeaturedImage {
  childImageSharp: {
    fluid: FluidObject
  }
}

export interface IExtendedFrontmatter {
  title: string
  date: string
  path: string
  excerpt: string
  featuredImage?: IFeaturedImage
  featuredVideo?: string
  tags?: string[]
  time?: number
  level?: number
}
