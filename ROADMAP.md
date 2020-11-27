# ** ROADMAP **

# V1 (v2009_04) (Deadline: Sep 04, 2020)

###### New Icons ✅

Get started using Affinity Designer to make my own versions of the currently included icons. That way, I can really unify the style and feel throughout the entire website. Currently, obvious outliers to the "Programming" icons, are -ironically- the "Graphic Design" icons.

This needs to improve. Creating my own iconset will enable me to be bolder with the theme. Currently, I feel somewhat forced to take a very barebones approach with a plain white layout for the most part just to not over-do styles / colors. If I want to go for a specific theme color, I will need to be able to have SVGs of all required icons to be able to style them in one color. Presumably white, to fit pretty much all the theme colors I would consider (being in the lower-luminosity range of colors).

###### Jest (nearly) ALL THE THINGS!

Long overdue, yet absolutely necessary. Have at least a unit test per Component. Let's leave pages alone for now. Using Jest, TS-Jest, Enzyme. Mock some core modules (e.g. `gatsby-image`, `react-gsap` and `react-youtube`) to just avoid their implementations.

###### Schema.org Implementation ✅

Include any implementation of Schema.org for rich text view. Define which pages do (and don't) need what type / shape of schema-data and fill in accordingly. Using `Website`, `BlogPost` (also for "projects", I guess) & `Person` (using "knowsAbout" property in /skillset).

###### Cleaning up content

I am considering removing at least Cinema4D as a skillset tool. It's been so long and I really don't have any plans to do more 3D-work like that at this point. So, not sure whether or not it is still valid to be there.

Also, I should take an opportunity to really check / rewrite some of the copy in projects. Especially the "Portfolio" project. It is the last thing I really CAN do before the next release (designated to be the real V1.0). I should take the time to write about all the choices I've made and why I made them. Focus on unification. I know that not many people have really seen my website so far, so there is still plenty of room for a first impression.

###### Cleaning up `gatsby-node`

Currently, the code is ugly. It needs to change. I need to be happier about it.

# POST-V1

###### Redesign About

Probably ditch pretty much all the images used in the (Games|Series)Grid(s) as they significantly impact the build times on "cleandev" and they add barely any (if even any) value at all. Even the PhotographyGrid is kinda "/cares". IF I decide, when it comes to actually redoing the implementation, that I still want those features there, I should probably limit it to like 3. A more reasonable number than freaking 28 series posters. What was I thinking (besides just feeling the need for images / color there)? \*

- Move ExperienceCards here as a means to provide relevant content to the page. It currently doesn't really fit in / align well with the content on the /skillset page but it still needs to be \_\_somewhere.

###### Color!

Make a theme, and use it. Probably a shade of blue, with the content sticking to white. Will likely cause the used icons inside cards etc to become filled / stroked 'white' too, with their OG color appearing on hover. Maybe.

###### Styleguide

Separating code, naming things (my conventions), spacing, grouping & ordering imports. Using types / interface depending on the context. Deciding on added testability of elements using a testid. Figuring out how to extend Conventional Commits for my use case. (Like Angular extends Conventional Commits with labels like 'style')

###### Mobile Nav

One that doesn't force users to swipe all the way back to the top. Preferably, using the already present `Header.tsx` with some media queries rather than a completely new component. Stuck to the bottom, view based on swipe direction. It could even just be a more commonly used flat nav, if the more unusual approach doesn't satisfy.

###### Redesigned 404

Being part of the general UI / UX. Not sure if I'd want to keep the Header & Footer that are being preserved by `gatsby-plugin-transitions`. The key in all upcoming changes is "unification".

###### Fix "duplicate" Components

Examples: ( `DynamicIcons` & `DynamicImages` ), ( `GamesGrid`, `ShowsGrid`, `PhotographyGrid` ). These duplicates are a result of having the StaticQuery dealt with internally, instead of through injection. Having all these current implementations _NOT_ efficient / maintainable (e.g. look at the slight difference in the `Dynamic*` Components).

###### Clean up unused props / Components

Primarily: `Logo` (e.g. `$background` not being used)

###### Fix Youtube implementation

Or at least remove Youtube videos as featuredVideo from ProjectFrontmatter. Currently there is only 1 video remaining as embedded in the VUMC vide project, so it is not too big of a deal. Would be nice to clean up / decide on a course of action.

###### Blogposts

No definite plans or target date to publish anything, as I have yet to figure out what I would want to post. But it could be a great way to really share my knowledge aside from just showing projects I have done. For example, my questionable extension to the DI in TypeScript using Decorators & Reflect. Or me just messing around with a vanilla JS no-nodejs-library using PubSub, CSS Variables and Web Components. Or maybe dedicate a post to disappointing UX by bigger companies, without potentially "burning" myself out of opportunities.

###### /uxperimental

Dedicate a page to just experimenting with UX. Good, bad, and everything in between. It could also be an opportunity to play with more than just `react-gsap` or plain `css` to create animations. Trying React-Spring, or whatever else there is available.
