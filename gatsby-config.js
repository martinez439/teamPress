module.exports = {
  siteMetadata: {
    title: `Librettoh Consulting`,
    menuLinks:[
            {
               name:'Home',
               link:'/'
            },
            {
               name:'Contact Us',
               link:'/page-2'
            }
          ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: `WORDPRESS`,
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: `wordPress`,
        // Url to query from
        url: `https://teampress.online/graphql`,
        refetchInterval: 60
      },
    },
    `gatsby-plugin-sass`,

    
  ],
}
