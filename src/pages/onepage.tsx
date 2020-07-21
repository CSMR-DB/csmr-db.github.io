import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { CONTACTS } from '../data/contacts'

import { AboutLayout, IAboutLayoutProps } from '../layouts/AboutLayout'
import { ContactLayout } from '../layouts/ContactLayout'
import { IProjectsLayoutProps, ProjectsLayout } from '../layouts/ProjectsLayout'
import { ISkillsetLayoutProps, SkillsetLayout } from '../layouts/SkillSetLayout'
import { Layout } from '../components/Layout'

// tslint:disable-next-line: no-void-expression
const PAGE_QUERY: void = graphql`
  fragment SharedOPQuery on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          favorite
          path
          category
          title
          featuredVideo
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          excerpt
          tags
          date
        }
        wordCount {
          words
          sentences
          paragraphs
        }
        timeToRead
        excerpt
        id
      }
    }
  }

  query {
    programmingData: allMarkdownRemark(
      filter: {
        frontmatter: {
          path: { regex: "/projects/" }
          category: { eq: "Programming" }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      ...SharedOPQuery
    }

    graphicDesignData: allMarkdownRemark(
      filter: {
        frontmatter: {
          path: { regex: "/projects/" }
          category: { eq: "Graphic Design" }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      ...SharedOPQuery
    }

    experienceData: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/experiences/" } } }
      sort: { fields: frontmatter___dateEnd }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            dateStart
            dateEnd
            backgroundColor
            type
          }
          excerpt
        }
      }
    }

    skillsetData: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/tag/" } } }
      sort: { fields: frontmatter___time, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            level
            skillColor
            time
          }
          excerpt
        }
      }
    }

    wallpapers: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { regex: "/bio/games/" }
      }
      limit: 14
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    squares: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { regex: "/photography/" }
      }
      limit: 9
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 240, maxHeight: 240, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    posters: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { regex: "/bio/series/" }
      }
      limit: 28
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 270, maxHeight: 480, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

function ProjectsPage(): JSX.Element {
  return (
    <Layout>
      <StaticQuery
        query={PAGE_QUERY}
        render={({
          programmingData,
          graphicDesignData,
          experienceData,
          skillsetData,
          posters,
          squares,
          wallpapers,
        }: IProjectsLayoutProps &
          ISkillsetLayoutProps &
          IAboutLayoutProps): JSX.Element => (
          <>
            <AboutLayout
              posters={posters}
              wallpapers={wallpapers}
              squares={squares}
            />
            <ProjectsLayout
              programmingData={programmingData}
              graphicDesignData={graphicDesignData}
            />
            <SkillsetLayout
              skillsetData={skillsetData}
              experienceData={experienceData}
            />
            <ContactLayout contacts={CONTACTS} />
          </>
        )}
      />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ProjectsPage
