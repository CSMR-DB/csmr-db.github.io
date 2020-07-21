import React from 'react'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { IImageSharpEdge, IImageSharpAllFiles } from '../types/interfaces'

export interface IDynamicIconProps {
  path: string
}

export function DynamicIcon({ path }: IDynamicIconProps): JSX.Element {
  function renderImage(
    file: IImageSharpEdge | null = null
  ): JSX.Element | null {
    return file && <Image fluid={file.node.childImageSharp.fluid} />
  }

  return (
    <StaticQuery
      // tslint:disable-next-line: no-void-expression
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 128) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({
        images,
      }: {
        images: IImageSharpAllFiles
      }): JSX.Element | null =>
        renderImage(
          images.edges.find(
            ({ node }: IImageSharpEdge): boolean => node.relativePath === path
          ) // returns images like this node: {extension: "png", relativePath: "gatsby-icon.png", childImageSharp: {…}}
        )
      }
    />
  )
}
