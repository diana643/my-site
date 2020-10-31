/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // pathPrefix: `diana643.github.io/my-site/`,
  siteMetadata: {
    title: `Sian's site`,
  },
  /* Your site config here */
  plugins: 
  [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Raleway',
            variable: true,
            weights: ['200..900']
          },
          {
            family: 'Roboto Slab',
            variable: true,
            weights: ['200..900']
          }
        ]
      }
    }
],
}
