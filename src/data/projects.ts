export interface IProject {
  image?: string
  video?: string
  title: string
  body: (string | { url: string; text: string })[]
  tags?: string[]
}
;[]

export const projects: IProject[] = [
  {
    title: 'Modern Family Fansite',
    image: 'projects/modernfamily.png',
    body: [
      `One of the first projects in year one that got me excited about
      webdevelopment. This project is just purely HTML5 + CSS3. Nothing too
      fancy, just the base necessities. The only thing that doesn't work is
      the actor pages. They don't exist due to deadlines at that time. Also,
      there are no links to the show's social pages. It was just a prototype
      to show off HTML & CSS. This project can also be found `,
      { url: 'http://modernfamily.csmr.nl', text: 'online' },
      '.',
    ],
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'Cloudcademy',
    image: 'projects/cloudcademy_code.png',
    body: [
      `Cloudcademy was the big course assignment we were to work on to get
            a final grade. We were just told to make "a social media platform"
            for any subject we wanted. The subject itself didn't matter, as the
            goal was to learn JavaScript. In this project I chose to focus on
            jQuery, as it enabled me to get going faster. I made a login system
            (requirement), a post submission form with a dynamic display of
            images & videos and stored everything temporarily using the
            LocalStorage API to allow users to refresh a page and still preserve
            all the posts that had already been added. This was mainly done by
            concatenating strings of HTML, as shown in the image. For some
            reason the project doesn't run 100% properly anymore, so no live
            demo is available. The source code can still be found in `,
      {
        url: 'https://github.com/CSMR-DB/Cloudcademy',
        text: 'this GitHub repo',
      },
      '.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'FOMO',
    video: 'https://www.youtube.com/embed/ZbANrSn5ZB0',
    body: [
      `In year one we got introduced to After Effects and I instantly fell in
          love. Soon enough, I found I needed more of a challenge. I wanted to do
          something in 3D. Through After Effects I found out about Cinema4D, and
          boy was it fun. I made the scenery in 3D and played around with lighting
          and camera tracks. The character in the video was animated in 2D, to
          give something of an "odd" feeling when watching it. I liked the style
          of side-scrolling games, and wanted to try to mimic that effect.`,
    ],
    tags: ['After Effects', 'Cinema4D', 'Illustrator'],
  },
  {
    title: 'Wordpress Theme',
    image: 'projects/wpthemeexample.png',
    body: [
      `At the end of year 1 there was this group project for a local
    students' guild centered around iceskating. I took the
    responsibility for the Wordpress website design upon me, learning a
    bit about the PHP used by Wordpress to develop a theme that fully
    utilized the Customizer API. Unfortunately, we weren't chosen to
    publish our design concept.`,
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    title: 'Abstract Dataviz',
    image: 'projects/dataroute.png',
    body: [
      `During my year 4 minor we had one major assignment: Take any form of
    data you can find on your route from home to college. I chose mobile
    network speed, took 20 points of measure, fiddled up some concepts
    and eventually landed on this very abstract piece. Inspired by the
    typically Dutch `,
      {
        url: 'https://nl.wikipedia.org/wiki/Paddenstoel_(wegwijzer)',
        text: '"route paddenstoel"',
      },
      ` and an ordinary colorful mushroom, flattened as if you were viewing
    it top-down with the data displayed on it in the LTR writing system.`,
    ],
    tags: ['Illustrator'],
  },
  {
    title: 'Video Project VUMC',
    video: 'https://www.youtube.com/embed/OYVxTuwnx-c',
    body: [
      `At the end of the year 4 minor there was this big assignment: make a
    datavisualization for a client according to their needs &
    requirements. The entire group of students was split up in smaller
    teams of 3, each working for a different client with different
    requirements. Our objective: make an animated short, telling the
    story about our research and findings. One that we could use in
    schools and one that is interesting for both students and teachers.
    Make sure to get our message "we need to come together to find a
    solution" across. We created concepts, sketches and discussed ideas
    about doing a voice-over. We made a version using a voice-over, but
    were asked to make a version with subtitles instead. I took it upon
    myself to create the entire animation in After Effects and find a
    suiting (& free) piece of background music. The end result: a
    composition with consistency at the center, and smooth transitions
    to highlight important sections.`,
    ],
    tags: ['After Effects', 'Illustrator'],
  },
  {
    title: 'PHYX API',
    image: 'projects/phyx_api.png',
    body: [
      `This is my first major project stepping out of front-end
    development. Everything I have made up until this point has
    focussed, in some way, on visual design. The only visual aspect of
    this project is the GraphiQL portal that's made available to
    communicate with the server. The stack consists of Apollo Server
    (GraphQL), TypeScript and a Dependency Injection Container. This is
    a project for me to experiment with architecture, TDD & SOLID
    principles. I still have a lot to learn. Full code for this project
    is `,
      {
        url: 'https://github.com/CSMR-DB/phyx-api',
        text: 'available on GitHub',
      },
      `.`,
    ],
    tags: ['TypeScript', 'GraphQL'],
  },
]
