import React from 'react'
import { Timeline, Controls, PlayState } from 'react-gsap'
import { Stage } from './Stage'
import styled, { StyledComponent } from 'styled-components'
import { GamesIvePlayed } from './scenes/GamesIvePlayed'
import { SeriesIveWatched } from './scenes/SeriesIveWatched'
import { OpeningCredits } from './scenes/OpeningCredits'
import { CollegeTour } from './scenes/CollegeTour'
import { ToolsUsed } from './scenes/ToolsUsed'
import { Flex } from '../Flex'

const StyledControlsWrapper: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  & > div > div:nth-child(2) {
    margin-top: 0 !important;
    border: none !important;
    background: black !important;
    color: white !important;
    margin: 0 auto;
    max-width: 1920px;
    color: red;

    div {
      margin: 0 auto;
      flex-direction: column-reverse;
      padding: 1rem;

      button {
        background: transparent !important;
        margin: 0.5rem !important;
        width: 4rem;
        height: 4rem;
        border-radius: 999rem;
        outline: none;
        color: white;
      }
    }

    span {
      display: block;
      text-align: center;
      margin: 1rem !important;
    }
  }
`

const PlayButton: StyledComponent<'button', any, {}, never> = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 999rem;
  border: none;
  margin: 0 auto;
  outline: none;
`

export function BioMovie(): JSX.Element {
  const [playing, setPlaying]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState(false as boolean)
  const [progress, setProgress]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = React.useState(0)

  const timelineRef: React.MutableRefObject<null> = React.useRef(null)

  // tslint:disable-next-line: no-void-expression
  // const { wallpapers, squares, posters }: { wallpapers: IBioImagesMarkdownRemark, squares: IBioImagesMarkdownRemark, posters: IBioImagesMarkdownRemark } = useStaticQuery(graphql`
  //   fragment ImagesFragment on FileConnection {
  //     edges {
  //       node {
  //         name
  //         relativePath
  //         childImageSharp {
  //           fluid(maxWidth: 240, maxHeight: 240, cropFocus: CENTER){
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }

  //   query {
  //     wallpapers: allFile(filter: {
  //       extension: { regex: "/(jpg)|(png)|(jpeg)/" }
  //       relativeDirectory: { regex: "/bio_movie/games/" }
  //     }) {
  //       edges {
  //         node {
  //           name
  //           relativePath
  //           childImageSharp {
  //             fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER){
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }

  //     squares: allFile(filter: {
  //       extension: { regex: "/(jpg)|(png)|(jpeg)/" }
  //       relativeDirectory: { regex: "/bio_movie/" }
  //     }) {
  //       edges {
  //         node {
  //           name
  //           relativePath
  //           childImageSharp {
  //             fluid(maxWidth: 240, maxHeight: 240, cropFocus: CENTER){
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }

  //     posters: allFile(filter: {
  //       extension: { regex: "/(jpg)|(png)|(jpeg)/" }
  //       relativeDirectory: { regex: "/bio_movie/" }
  //     }) {
  //       edges {
  //         node {
  //           name
  //           relativePath
  //           childImageSharp {
  //             fluid(maxWidth: 270, maxHeight: 480, cropFocus: CENTER){
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Flex>
        <PlayButton onClick={(): void => setPlaying(!playing)}>
          {playing ? 'Stop' : 'Play'}
        </PlayButton>
        {/* Figure out low-level access: https://bitworking.github.io/react-gsap/src-instructions-low-level-access */}
        {/* <button onClick={() => timelineRef.current.getGSAP().play(0)}>Play</button>
        <button onClick={() => timelineRef.current.getGSAP().seek(1)}>Seek</button>
        <button onClick={() => timelineRef.current.getGSAP().pause(.5)}>Stop</button> */}
      </Flex>
      {/* <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={progress}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setProgress(parseFloat(event.target.value))}
        />
      </div> */}
      <StyledControlsWrapper>
        <Controls playState={PlayState.stop}>
          <Stage>
            <Timeline
              labels={[
                { label: 'opening', position: 0 },
                // { label: 'journeyStart', position: 1 },
                { label: 'college', position: 8 },
                // { label: 'theInternship', position: 3 },
                { label: 'experimentingSolo', position: 16 },
                // { label: 'whatILoveAboutCode', position: 5 },
                // { label: 'inAddition', position: 6 },
                { label: 'games', position: 23 },
                { label: 'series', position: 28 },
              ]}
              playState={playing ? PlayState.play : PlayState.pause} // Why are both this prop & 'paused' necessary to pause a timeline?
              totalProgress={progress}
              paused={true}
              ref={timelineRef}
            >
              <OpeningCredits position="opening" />
              {/* <CollegeTour position='college' /> */}
              <ToolsUsed position="experimentingSolo" />
              {/* <GamesIvePlayed position='games' /> */}
              {/* <SeriesIveWatched position='series' /> */}
            </Timeline>
          </Stage>
        </Controls>
      </StyledControlsWrapper>
    </>
  )
}
