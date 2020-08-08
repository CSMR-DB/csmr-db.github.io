import { Reporter } from 'gatsby'

export type AllMdxEdge = {
  node: {
    frontmatter: {
      title: string
      tags?: string[]
    }
    generatedRoute: string
  }
}

export type AllMdxData = {
  allMdx: {
    edges: AllMdxEdge[]
  }
}

export type CreatePagesArgs = {
  actions: {
    createPage: (args: { path: string; component: string; context: {} }) => void
  }
  graphql: (
    args: string
  ) => {
    errors?: Error[]
    data: AllMdxData
  }
  reporter: Reporter
}

export type CreateSchemaCustomizationArgs = {
  actions: {
    createTypes: (args: string) => void
  }
  createResolvers: (args: {}) => void
}
