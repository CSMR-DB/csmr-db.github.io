import React from 'react'

import { ImageSharpAllFiles } from '../types/graphql.types'
import { groupBy } from '../utils/groupBy'
import { Course } from '../data/objects/coursesProvider'
import { Tool } from '../data/objects/toolsProvider'

import { Layout } from '../components/Layout'
import { GamesGrid } from '../components/compositions/GamesGrid'
import { ShowsGrid } from '../components/compositions/ShowsGrid'
import { PhotographyGrid } from '../components/compositions/PhotographyGrid'
import { WideBoi } from '../components/WideBoi'
import { CoursesGrid } from '../components/compositions/CoursesGrid'
import { SVGLogos } from '../components/compositions/SVGLogos'
import { SubbedImages } from '../components/compositions/SubbedImages'
import { Quote } from '../components/Quote'
import { ISubbedImage } from '../components/compositions/SubbedImage'
import { CenteredBlock } from '../components/CenteredBlock'
import { CTAButton } from '../components/CTAButton'
import { StyledLink } from '../components/StyledLink'

export interface IAboutLayoutProps {
  gameWallpapers: ImageSharpAllFiles
  photographySquares: ImageSharpAllFiles
  seriesPosters: ImageSharpAllFiles
  courses: Course[]
  tools: Tool[]
}

export function AboutLayout({
  gameWallpapers,
  photographySquares,
  seriesPosters,
  courses,
  tools,
}: IAboutLayoutProps): JSX.Element {
  const groupedCourses: [Course['category'], Course[]][] = [
    ...groupBy(courses, 'category'),
  ]
  const images: ISubbedImage[] = [
    {
      path: 'bio/hu_oldest.jpg',
      text: 'HU Building #1',
    },
    {
      path: 'bio/hu_old.jpg',
      text: 'HU Building #2',
    },
    {
      path: 'bio/hu_new.jpg',
      text: 'HU Building #3',
    },
  ]

  return (
    <Layout>
      {/* <BioMovie /> */}
      <CenteredBlock>
        <h1>My name is Casimir</h1>
        {/* <DynamicImage path={"wallpaper/me.jpg"} /> */}
        <h2>And this is my story</h2>
        <p>
          I remember myself at a young(er) age (I believe I was about 10 ~ 11
          years old) really encountering electronics for the first time. What I
          found was a bunch of little electrical components (capacitors,
          resistors, coils, the small stuff) that came out of dismantled old,
          broken, hardware and I just thought of them as these "funky little
          bits". I had no idea how they worked or what they did, but they seemed
          interesting nonetheless. Especially in the way they all fit together
          on a little board (it really is like a tiny city, and a work of art).
        </p>
        <p>
          It would take a few years until I would build my very first computer,
          at around age 15. Ever since then I have been interested in pretty
          much anything with a circuit board. Aesthetics have also always
          mattered more than pure functionality, outside and in. I mean,
          form-over-function isn't really form-over-function if the form is so
          influential to the entirety of the UX.
        </p>
      </CenteredBlock>
      <WideBoi $maxWidth={'1280px'}>
        <SubbedImages images={images} />
      </WideBoi>
      <CenteredBlock>
        <h2>Starting College: DMC</h2>
        <p>
          A couple more years later I first discovered "programming", in one of
          many courses taught in the Digital Media & Communications (DMC)
          program at UAS Utrecht. It wasn't really much more than elementary
          HTML, CSS and a bit of JavaScript* (we didn't do any automated
          testing, work on application architecture, version control or anything
          like that), but it was enough. I instantly fell in love.
        </p>
        <p>
          Admittedly, the programming part really was only a few courses that
          made up for roughly 15% (if not less) of the entire curriculum. In
          everything else, primarily in group projects, I would have to find
          myself situations where I could use programming as a means to provide
          a solution. The overwhelming majority of all courses focussed on
          either marketing, graphic design or the field of research.
        </p>
        <Quote>
          <p>
            * Mostly spaghetti. I like pasta just fine, but I'm more of a
            lasagna guy myself.
          </p>
        </Quote>
      </CenteredBlock>
      <WideBoi>
        <CoursesGrid courses={groupedCourses} />
        <CTAButton to={'/skillset'} $margin={'4rem auto 0'}>
          I can do this
        </CTAButton>
      </WideBoi>
      <CenteredBlock>
        <p>
          That was almost all just perfectly fine. I signed up not really
          knowing what I wanted to do, and I ended up learning a lot of
          interesting stuff. Graphic design is still one of my favorite things
          ever and I really, really love good marketing. On a positive note I'd
          say I can pretty much understand everyone's needs and wishes and
          communicate between those fields.
        </p>
        <h2>The Internship</h2>
        <p>
          But, fine is never enough, right? At least I knew I wanted more. So
          when I landed an internship in my third year of college, I signed up
          for a challenge. I ran my own project (with this very limited skill
          ceiling) working towards a data-visualization dashboard MVP, built on
          Meteor, React, GraphQL, MongoDB, styled-components & D3. My stack was
          not their stack: their stack was a back-end in C#, with a front-end in
          KnockoutJS. This was all fine, it really just meant more of a
          challenge. What's not to like?
        </p>
        <p>
          During this internship however, I learned at least 2 things I still
          think about every single day.
        </p>
      </CenteredBlock>
      <WideBoi $maxWidth={'32rem'}>
        <Quote>
          <h3>The benefits of TDD</h3>
          <h1>&</h1>
          <h3>The SOLID Principles</h3>
        </Quote>
      </WideBoi>
      <CenteredBlock>
        <p>
          Overall, I can say I have taught myself to work with these tools &
          frameworks and when it comes to JavaScript, I will always default to
          using TypeScript. I am also completely fine with picking up pretty
          much any other tool / framework or even language if needed.
        </p>
      </CenteredBlock>
      <WideBoi>
        <SVGLogos svgs={tools} />
        <CTAButton to={'/skillset'} $margin={'4rem auto 0'}>
          Find out more
        </CTAButton>
      </WideBoi>
      <CenteredBlock>
        <p>
          When it comes to programming: I enjoy joyful UI and feel extremely
          passionate about the little details. I prefer creating any style rules
          from scratch over just always reaching for some tried-and-tested UI
          Kit by default.
        </p>
        <h2>Anything else?</h2>
        <p>
          What else is there to say? Well, I am a Spotify-fanatic,
          Netflix-addict, relatively casual gamer and I, at times, enjoy making
          food. Here's a collection of games I like(d) to play and series I have
          watched or am currently watching.
        </p>
      </CenteredBlock>
      <WideBoi>
        <ShowsGrid posters={seriesPosters} />
      </WideBoi>
      <CenteredBlock>
        <p>
          I like a wide variety of games, from games that make you think to
          high-octane competitive shooters, from games that are just stunning to
          look at to games with very unique mechanics. I will only ever really
          care about any story if the game itself doesn't solely depend on it to
          be relevant. Give me modded Minecraft over pretty much any other
          title, any day of the week.
        </p>
      </CenteredBlock>
      <WideBoi>
        <GamesGrid wallpapers={gameWallpapers} />
      </WideBoi>
      <CenteredBlock>
        <h2>Anything else?</h2>
        <p>
          I like nature, yet I would decline any offer to go camping. I prefer
          cold over heat, but like the seasons in the order summer {'>'} winter{' '}
          {'>'} fall {'>'} spring. I like the sun, and light environments in
          general. That includes preferring "light" over "dark" mode in some
          apps (like Discord), except in my code editor. When I want to take
          notes or draw quick sketches, I still prefer paper and pen over
          anything else.
        </p>
        <p>
          You'll always find me wearing mismatching socks. Be it with a
          different color, pattern, or both. The only thing that matters is that
          the socks are of the same brand. I'm not (completely) crazy. I keep my
          hair short so that I never have to worry about having a bad hair day.
          And finally, you'll never see me wear anything with a print on it.
        </p>
      </CenteredBlock>
      <WideBoi $maxWidth={'64rem'}>
        <PhotographyGrid squares={photographySquares} />
      </WideBoi>
      <CenteredBlock>
        <p>
          PS: I also like{' '}
          <StyledLink to={'/photography'}>photography</StyledLink>, although I
          don't shoot often.
        </p>
      </CenteredBlock>
    </Layout>
  )
}
