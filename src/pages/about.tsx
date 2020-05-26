import React from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { StyledLink, StyledA } from '../components/StyledLink'
import { CenteredBlock } from '../components/CenteredBlock'
import { DynamicImage } from '../components/DynamicImage'
import { ImageContainerCircle } from '../components/ImageContainerCircle'

const AboutMe: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <SEO
      title="About"
      description="A little backstory about how I got where I am"
    />
    <CenteredBlock>
      <ImageContainerCircle>
        <DynamicImage path="wallpaper/me.jpg" />
      </ImageContainerCircle>
      <h1>Hey you!</h1>
      <p>
        My name is Casimir de Bruijn. My first language is Dutch, but I often
        prefer using English (and actually understand the difference between
        there, their and they're). What is there to tell about myself? I am a
        gamer, Netflix-fanatic, Spotify-enthousiast, perfectionist and
        predominantly self-taught programmer. If you are interested in learning
        more about me, read along!
      </p>
      <p>
        My journey started a few years ago, when I was first introduced to
        JavaScript during a college course. This course taught us the{' '}
        <StyledA href="http://modernfamily.csmr.nl" target="blank">
          (example) basics of HTML
        </StyledA>{' '}
        and concluded with all students making a DIY social media website from
        scratch, using either vanilla JavaScript or jQuery. At the time I chose
        to go the jQuery route as it allowed me to tackle trickier stuff
        seemingly quicker. I had loads of fun and challenging moments trying to
        figure that stuff out all by myself, even ending up helping out some
        other students getting a better grade.
      </p>
      <p>
        When I look back at that project now, I shiver. Typical spaghetti code
        from an inexperienced individual. NO "architecture" whatsoever. Not
        surprising, obviously. In the following years I would get myself
        introduced to working with React, MeteorJS and a little bit of Vue. I
        even did some stuff with Wordpress & PHP, developing some templates for
        projects that required a website. In all these efforts, I was on my own.
        And every single time I realized I loved the feeling of trying to figure
        stuff out. I learned to have a love / hate relationship with being stuck
        with a problem because I would eventually find a solution. Whether or
        not said solution would prove to be optimal left to be seen.
      </p>
      <p>
        Eventually, these experienced landed me an internship at a company with
        an amazing atmosphere. I signed up for another half year of trying to
        figure things out myself, as I was warned that JavaScript / NodeJS /
        React was not part of their tech stack. I was tasked with building a
        metrics dashboard, to visualize the BHAG (Big, Hairy, Audacious Goal) as
        well as some other metrics. I built that project using MeteorJS, as it
        allowed me to get up & running quickly, together with React,
        Styled-Components and GraphQL. I was also responsible for deploying this
        app to a local environment, as well as a local MongoDB instance. A
        colleague built a C# metrics collector app, to get me the data I needed.
        Overall, I had an amazing time there. I got to learn a bit about Test
        Driven Development and the SOLID paradigm and have been improving on
        those fronts ever since.
      </p>
      <h2>Anything else?</h2>
      <p>
        During college I also got to learn the basics of marketing and graphic
        design. I enjoyed working with Illustrator, After Effects, InDesign and
        even a bit of Cinema4D, and I'd consider myself adequate on these
        fronts. What this means, however, is that I am able to communicate and
        collaborate with all these "different people". I am also a perfectionist
        and there is not a day that goes by where I don't find something that
        frustrates me. I absolutely LOVE good UX, and I hate seeing what could
        be considered "minor" flaws in design. The same applies to code,
        obviously. And I'm learning more each and every day to improve myself on
        that front.
      </p>
      <h2>And now?</h2>
      <p>
        A year later I discontinued my college as I found that, at that point, I
        lacked motivation to continue. I found my passion in programming and
        college wasn't going to help me get ahead. I had already outgrown the
        level required in my first two years and I want to find out how far I
        can take it. I am looking for another challenging place to work.
        Somewhere I can actually contribute to the core tech stack, not
        operating from the sidelines.
      </p>
      <h2>PS:</h2>
      <p>
        I also like <StyledLink to="/photography">photography</StyledLink>. I
        don't take many shots, but it's still something I enjoy from time to
        time.
      </p>
    </CenteredBlock>
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default AboutMe
