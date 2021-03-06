module.exports = {
  siteMetadata: {
    title: `SpaceCode`,
    description: `Un programador autodidacta y entusiasta, que siempre está en búsqueda de nuevos proyectos de programación web. Entra, mira mis trabajos y conóceme.`,
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
        apiURL: 'https://mipaginapersonal-cms.herokuapp.com',
        contentTypes:[
          'trabajo',
          'pagina',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `social`,
        path: `${__dirname}/src/social`,
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
