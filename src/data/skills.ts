import { StringOrUrlArray } from '../types/StringOrUrlObject'

export interface ISkill {
  title: string
  level: number
  description: StringOrUrlArray
  time: number
}

export interface ISkills {
  programming: ISkill[]
  graphics: ISkill[]
}

export const skills: ISkills = {
  programming: [
    {
      title: 'HTML',
      level: 4,
      description:
        "HTML, along with CSS, is obviously used in any front-end JavaScript framework. Either plainly, or through JSX. I find HTML's default margins on elements stupidly annoying and always require some sort of a 'reset' CSS file. Also: article-header-main-aside-footer. I'm just glad I wasn't around during the whole table-layout-everything-fad.",
      time: 3000,
    },
    {
      title: 'CSS',
      level: 4,
      description:
        "I love CSS and everything you can do with it nowadays without having to resort to JavaScript. Most notably, the CSS Grid, Flex and Filter specs. But also clip-path seems pretty cool. I always use some sort of preprocessor, be it Stylus or something like styled-components or Emotion for React (or whatever is available CSS-in-JS-wise. I don't like having to worry about naming things following any naming scheme like BEM). Not a big fan of using UI frameworks like Bootstrap or Material UI, as I feel it limits creativity.",
      time: 3000,
    },
    {
      title: 'JavaScript',
      level: 4,
      description:
        'I feel adequate using everything above ES6, but not about working with polyfills / older versions of JavaScript. I can work with the class syntax, or just plain Objects and Functions. I get Promises and Async / Await, but I feel like I could still learn how to apply it in better ways. I have played with Web Components and I like the idea. There just needs to be 1 definitive spec & implementation across (modern) browsers.',
      time: 2000,
    },
    {
      title: 'TypeScript',
      level: 3,
      description: [
        "I absolutely love it. I understand TypeScript's limits but having the compile-time safety has proven to be a huge time-saver, especially when using the strictest tsconfig imagineable. Combining the power of ",
        {
          url:
            'https://github.com/CSMR-DB/phyx-api/blob/master/src/tiny-di/tiny-di.ts',
          text: 'Reflect-metadata with Decorators to create a tiny DI system',
        },
        ' is awesome. (Thanks to ',
        {
          url:
            'https://medium.com/@OlegVaraksin/minimalistic-dependency-injection-di-container-in-typescript-2ce93d1c303b',
          text: 'this Medium post',
        },
        ').',
      ],
      time: 600,
    },
    {
      title: 'GraphQL',
      level: 2,
      description:
        'Yes! Please, use it more. I think the developer experience of using GraphQL is absolutely amazing. Having control over WHAT you want to fetch, preventing over- / under-fetching of data is just marvellous. And you can wrap REST APIs in GraphQL, forcing the server to do the heavy lifting of dealing with over- & under-fetching of data and returning only the essential data to the client. Getting an object with 200 lines of data when I only want about 20 is NOT fun.',
      time: 400,
    },
    {
      title: 'React',
      level: 3,
      description:
        'As with all view-libraries I believe that one should be able to replace the layer at any point in time. Business logic has no place in Components and should be extracted to services, so that when you might swap out the view layer, you could just rely on those exact services to provide you with the data you want to display.',
      time: 1000,
    },
    {
      title: 'Angular',
      level: 2,
      description:
        "I love the complexity, but haven't used it much at all. It's built with TypeScript, so that's a big plus. It encourages the use of Services to hold business logic more so than React does. Also, Angular taught me the idea of Dependency Injection.",
      time: 200,
    },
    {
      title: 'Vue',
      level: 1,
      description: [
        "Hardly ever really touched Vue, but I'm really interested to learn more about it. The only thing I ever made was ",
        {
          url: 'https://codepen.io/CSMR/pen/wjRaqe',
          text: 'a single-page prototype',
        },
        ' for an assignment in year 3.',
      ],
      time: 100,
    },
    {
      title: 'MongoDB',
      level: 2,
      description:
        "MongoDB being provided by default in MeteorJS' stack has made it the first DB engine I have worked with. Reading the JSON-like format used in Collections has made it easy to work with. I've used Mongoose as the NodeJS driver to create strongly typed schemas and to .populate() documents in a somewhat relational manner, which worked out well for that use-case.",
      time: 400,
    },
    {
      title: 'Jest',
      level: 2,
      description:
        "Let's just say that thus far I've only really used Jest as my JavaScript testing framework, extended by ts-jest. Other frameworks might work just as well, I would imagine. Thus far, I have mainly used it to test business logic. Not much in the front-end world.",
      time: 400,
    },
    {
      title: 'Git',
      level: 1,
      description:
        "I know about and understand the purpose of version control and find it infuriating to see big (game) publishers not using it properly. But personally, I have only really used Git for personal projects. I haven't dealt with branches or any form of consistency in commits, as I've never really felt the need to. I haven't yet collaborated with anyone or had someone to code review with, so my commits tend to be big and messy. This is just for personal projects where I'm all about experimenting and refactoring constantly.",
      time: 20,
    },
    {
      title: 'D3',
      level: 2,
      description:
        'During my internship I got to know the basics of D3.js and played around with componentizing it for use with React. I have only used the SVG variant thus far, and would love to experiment with Canvas.',
      time: 400,
    },
  ],
  graphics: [
    {
      title: 'Adobe Illustrator',
      level: 3,
      description:
        "You need me to help out with design? No problem at all. I consider myself to be able to at least take on someone else's duties during their time off. Image Trace is my secret sauce.",
      time: 400,
    },
    {
      title: 'Adobe After Effects',
      level: 2,
      description:
        'I have only really used it to make short animations, or small compilations of videos for courses. I know that the the quality of source footage is crucial when it comes to making a decent composition. Highly enjoy working with it, for sure.',
      time: 200,
    },
    {
      title: 'Adobe InDesign',
      level: 2,
      description:
        "It was pretty much a requirement in college to create all kinds of documentation using InDesign. The possibilities it gives you with Master Pages and the flexibility with TOC generation is absolutely amazing. The only thing aside from more conventional documents I've ever really made is a basic Styleguide for a fictional company as part of a course assignment.",
      time: 100,
    },
  ],
}
