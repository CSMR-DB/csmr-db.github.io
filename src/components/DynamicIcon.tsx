import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled, { StyledComponent } from 'styled-components'

interface IFluidImage {
  node: {
    extension: string
    relativePath: string
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

interface IImagesRoot {
  // images: {
  //   edges: (IFluidImage)[]
  // }
  images: any // temp fix
}

const StyledDynamicIcon: StyledComponent<typeof Img, any, {}, never> = styled(
  Img
)`
  max-width: 4rem;
  width: 100%;
  max-height: 4rem;
  height: 100%;
`

function renderImage(file: IFluidImage): JSX.Element {
  return <StyledDynamicIcon fluid={file.node.childImageSharp.fluid} />
}

interface IDynamicIconProps {
  path: string
}

export const DynamicIcon: ({
  path,
}: IDynamicIconProps) => JSX.Element = function ({
  path,
}: IDynamicIconProps): JSX.Element {
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
      render={({ images }: IImagesRoot): JSX.Element | null =>
        renderImage(
          images.edges.find(
            (image: IFluidImage): boolean => image.node.relativePath === path
          ) // returns images like this node: {extension: "png", relativePath: "gatsby-icon.png", childImageSharp: {…}}
        )
      }
    />
  )
}

/**
 * Question remains: how much impact will many (100s) of images have?
 */
