module.exports = {
  siteMetadata: {
    title: `CSMR`,
    description: `This is me. A predominantly self-taught programmer using TypeScript to make things. Read all about me, my skillset and my projects on this very website.`,
    author: `Casimir de Bruijn`,
    image: 'images/wallpaper/me.jpg',
    url: 'https://csmr-db.github.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_transparent.png`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-typescript`,
    //   options: {
    //     isTSX: true, // defaults to false
    //     jsxPragma: `jsx`, // defaults to "React"
    //     allExtensions: true, // defaults to false
    //   },
    // },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    // {
    //   resolve: 'gatsby-plugin-tslint',
    //   options: {
    //     test: /\.ts$|\.tsx$/,
    //     exclude: /(node_modules|.cache|public)/
    //   }
    // },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
