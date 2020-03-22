module.exports = {
  siteMetadata: {
    title: `SpaceCode`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Manuel Medina`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.js`)
      }
    },
    {
      resolve:'gatsby-source-strapi',
      options:{
        apiURL: process.env.DEPLOY_URL? 'https://mipaginapersonal-cms.herokuapp.com' : 'http://localhost:1337',
        contentTypes:[
          'trabajo',
          'page',
          'user'
        ],
      },
    }, 
    
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
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
