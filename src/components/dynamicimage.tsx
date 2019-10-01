import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

interface IImageEdges {
  images: {
    edges: (IFluidImage)[]
  }
}

interface IFluidImage {
  node: {
    extension: string
    relativePath: string
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

function renderImage(file: IFluidImage, key: number = 1): JSX.Element {
  return <Img key={key} fluid={file.node.childImageSharp.fluid} />
}

interface IDynamicImageProps {
  path: string
}

export const DynamicImage: ({
  path,
}: IDynamicImageProps) => JSX.Element = function({
  path,
}: IDynamicImageProps): JSX.Element {
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
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }: IImageEdges): (JSX.Element | null)[] => {
        // console.log(images)

        return images.edges.map((image: IFluidImage, i: number) =>
          image.node.relativePath === path ||
          image.node.relativePath.includes(path)
            ? renderImage(image, i)
            : null
        ) // Refactored so I can get ALL images from a provided folder portion of 'relativePath'

        // return renderImage(
        //   images.edges.find(
        //     (image: IFluidImage) => image.node.relativePath.includes(path)
        //   ) // returns images like this node: {extension: "png", relativePath: "gatsby-icon.png", childImageSharp: {…}}
        // )}
      }}
    />
  )
}

/**
 * Question remains: how much impact will many (100s) of images have?
 */
