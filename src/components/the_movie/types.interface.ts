import React from 'react'
import { FluidObject } from 'gatsby-image'

export interface IBioImagesEdge {
  node: {
    name: string
    relativePath: string
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

export interface IBioImagesMarkdownRemark {
  edges: IBioImagesEdge[]
}

export interface ISceneProps {
  imageData: IBioImagesMarkdownRemark
  getSpecificImage: (
    edges: IBioImagesEdge[],
    name: string
  ) => FluidObject | undefined
}

export type AnyExoticRefComponent<T> = React.ForwardRefExoticComponent<
  T & React.RefAttributes<any>
>

export type AnyExoticRefTargets =
  | ((instance: any) => void)
  | React.MutableRefObject<any>
  | null
