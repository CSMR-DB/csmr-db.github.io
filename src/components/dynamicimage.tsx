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
            filter: { 
              extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)/" },
            }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 960, maxHeight: 960, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }: IImageEdges): (JSX.Element | null)[] => {
        return images.edges.map((image: IFluidImage, i: number): JSX.Element | null =>
          image.node.relativePath === path ||
          image.node.relativePath.includes(path)
            ? renderImage(image, i)
            : null
        ) 
        /**
         * Refactored so I can get ALL images from a provided folder portion of 'relativePath'
         * Note: Don't even bother trying to use query variables in this way. Can apparently only be done for page queries.
         * See https://stackoverflow.com/a/53804805 if you ever consider rewriting this again.
         */
      }}
    />
  )
}