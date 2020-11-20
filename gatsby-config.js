/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

console.log(`${__dirname}/src/data/posts`);

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/src/data/posts`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
  ],
};
