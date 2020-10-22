/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Sian's site`,
  },
  /* Your site config here */
  plugins: 
  [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Raleway',
            variable: true,
            weights: ['200..900']
          }
        ]
      }
    }
],
}
