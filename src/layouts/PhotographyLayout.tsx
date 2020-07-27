import React from 'react'

import { IImageSharpAllFiles } from '../types/interfaces'

import { Photos } from '../components/compositions/Photos'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'

// const ParallaxContainer: StyledComponent<"div", any, {}, never> = styled.div`
//   /* perspective: 8px;
//   transform-style: preserve-3d;
//   perspective-origin: 0 0;
//   overflow: hidden; */
//   width: 100vw;
//   height: 100vh;
//   overflow-x: hidden;
//   overflow-y: auto;
//   perspective: 4px;
//   perspective-origin: 50% 50%;
// `

// const ParallaxBackdrop: StyledComponent<"div", any, {}, never> = styled.div`
//   transform-origin: 50% 50%;
//   transform: translateZ(-2px) scale(2);
//   /* transform: scale(1.5) translateZ(-2px); */
//   /* min-height: 100%;
//   position: absolute;
//   top: 0; left: 0; right: 0; bottom: 0;
//   display: block;
//   z-index: -1; */
//   background: red;
//   background-size: cover;

//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// `

// const ParallaxFront: StyledComponent<"div", any, {}, never> = styled.div`
//   transform-origin: 50% 50%;
//   transform: translateZ(0);

//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// `

// export interface IParallaxBlockProps {
//   children: React.ReactNode
//   backdrop: React.ReactNode
// }
// export function ParallaxBlock({ children, backdrop }: IParallaxBlockProps): JSX.Element {
//   return (
//     <ParallaxContainer>
//       <ParallaxBackdrop>
//         {backdrop}
//       </ParallaxBackdrop>
//       <ParallaxFront>
//         {children}
//       </ParallaxFront>
//     </ParallaxContainer>
//   )
// }

export interface IPhotographyLayoutProps {
  photographyData: IImageSharpAllFiles
}

export function PhotographyLayout({
  photographyData,
}: IPhotographyLayoutProps): JSX.Element {
  return (
    <>
      <CenteredBlock>
        <article>
          <h1>Photography</h1>
          <p>Something I also enjoy doing, but don't do that often.</p>
        </article>
      </CenteredBlock>
      <Grid $columns={'repeat(auto-fill, minmax(32rem,1fr))'}>
        <Photos images={photographyData.edges} />
      </Grid>
    </>
  )
}
