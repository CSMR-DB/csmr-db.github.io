import { ColorProperty } from 'csstype'
import { FluidObject } from 'gatsby-image'

/**
 * SiteMetadata GraphQL data
 */
export interface ISiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      image: string
      url: string
    }
  }
}

/**
 * Generic GraphQL Data
 */
export interface IMarkdownRemark<T> {
  frontmatter: T
  html: string
  timeToRead: number
}

export interface ISingleItemData<T> {
  data: {
    markdownRemark: IMarkdownRemark<T>
  }
}

export interface IAllMarkdownRemark<T> {
  edges: IEdge<T>[]
}

export interface IListItemData<T> {
  data: {
    allMarkdownRemark: IAllMarkdownRemark<T>
  }
}

export interface IEdge<T> {
  node: INode<T>
}

export interface INode<T> {
  frontmatter: T
  wordCount: {
    words: number
    sentences: number
    paragraphs: number
  }
  timeToRead: number
  html: string
}

/**
 * Experience GraphQL Data
 */
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
    html: string
  }
}

export interface IExperienceAllMarkdownRemark {
  edges: IExperienceEdge[]
}

/**
 * Skillset GraphQL data
 */
export interface ISkillsetFrontmatter {
  favorite: boolean | null
  title: string
  date: string
  path: string
  excerpt: string
  tags?: string[]
  time?: number
  level?: number
  skillColor?: ColorProperty
}

export interface ISkillsetEdge {
  node: {
    frontmatter: ISkillsetFrontmatter
    wordCount: {
      words: number
      sentences: number
      paragraphs: number
    }
    html: string
  }
}

export interface ISkillsetAllMarkdownRemark {
  edges: ISkillsetEdge[]
}

/**
 * Projects GraphQL data
 */
export interface IProjectFrontmatter {
  favorite: boolean | null
  title: string
  category: 'Programming' | 'Graphic Design'
  date: string
  path: string
  excerpt: string
  featuredImage?: IImageSharp
  featuredVideo?: string
  tags?: string[]
}

export interface IProjectsEdge {
  node: {
    frontmatter: IProjectFrontmatter
    wordCount: {
      words: number
      sentences: number
      paragraphs: number
    }
    html: string
  }
}

export interface IProjectsAllMarkdownRemark {
  edges: IProjectsEdge[]
}

/**
 * Image GraphQL data
 */
export interface IImageSharp {
  name: string
  relativePath: string
  childImageSharp: {
    fluid: FluidObject
  }
}

export interface IImageSharpEdge {
  node: IImageSharp
}

export interface IImageSharpAllFiles {
  edges: IImageSharpEdge[]
}
