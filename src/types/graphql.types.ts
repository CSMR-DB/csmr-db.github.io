import { ColorProperty } from 'csstype'
import { FluidObject } from 'gatsby-image'

/**
 * SiteMetadata GraphQL data
 */
export type SiteMetadata = {
  title: string
  description: string
  author: string
  image: string
  url: string
}

type FrontmatterBase = {
  title: string
  excerpt: string
}

export type MarkdownRemark<T extends FrontmatterBase> = {
  generatedRoute: string
  frontmatter: T
  body?: string
  wordCount?: {
    words?: number
    sentences?: number
    paragraphs?: number
  }
  timeToRead?: number
}

export type MarkdownEdge<T extends FrontmatterBase> = {
  node: MarkdownRemark<T>
}

export type AllMarkdownRemark<T extends FrontmatterBase> = {
  edges: MarkdownEdge<T>[]
}

export type FrontmatterCategories = 'Programming' | 'Graphic Design'

/**
 * Experience GraphQL Frontmatter
 */
export type ExperienceFrontmatter = {
  title: string
  dateStart: string
  dateEnd: string
  description: string
  backgroundColor: string
  type: string
  excerpt: string
}

export type ExperienceAllMarkdownRemark = AllMarkdownRemark<
  ExperienceFrontmatter
>
export type ExperienceMarkdownEdge = MarkdownEdge<ExperienceFrontmatter>
export type ExperienceMarkdownRemark = MarkdownRemark<ExperienceFrontmatter>

/**
 * Skillset GraphQL Frontmatter
 */
export type SkillsetFrontmatter = {
  favorite: boolean | null
  title: string
  category: FrontmatterCategories
  date: string
  excerpt: string
  tags?: string[]
  time?: number
  level?: number
  skillColor?: ColorProperty
  icon?: string
}

export type SkillsetAllMarkdownRemark = AllMarkdownRemark<SkillsetFrontmatter>
export type SkillsetMarkdownEdge = MarkdownEdge<SkillsetFrontmatter>
export type SkillsetMarkdownRemark = MarkdownRemark<SkillsetFrontmatter>

/**
 * Projects GraphQL Frontmatter
 */
export type ProjectFrontmatter = {
  favorite: boolean | null
  title: string
  category: FrontmatterCategories
  date: string
  excerpt: string
  featuredImage?: FileChildImageSharp
  featuredVideo?: string
  tags?: string[]
}

export type ProjectsAllMarkdownRemark = AllMarkdownRemark<ProjectFrontmatter>
export type ProjectMarkdownEdge = MarkdownEdge<ProjectFrontmatter>
export type ProjectMarkdownRemark = MarkdownRemark<ProjectFrontmatter>

/**
 * File GraphQL data
 */
export type FileNode = {
  name: string
  relativePath: string
}

export type FileEdge<T extends FileNode> = {
  node: T
}

export type AllFile<T extends FileNode> = {
  edges: FileEdge<T>[]
}

export type FileChildImageSharp = {
  name: string
  relativePath: string
  childImageSharp: {
    fluid: FluidObject
  }
}

export type ImageSharpAllFiles = AllFile<FileChildImageSharp>
export type ImageSharpEdge = FileEdge<FileChildImageSharp>
