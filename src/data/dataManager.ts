import { graphql } from 'gatsby'

interface IDataManager {
  blogPostQuery: () => void
}

export const DataManager: IDataManager = {
  // tslint:disable-next-line: no-void-expression
  blogPostQuery: (): void => graphql`
    query($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          date
          path
          title
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `,
}
