module.exports = {
  siteMetadata: {
    title: 'Pablo Rocha\'s Technology and Portfolio',
    description: 'Pablo Rocha\'s Technology and Portfolio',
    author: '@jprocha101',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-66485739-17',
        head: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pablo Rocha',
        short_name: 'Pablo Rocha',
        start_url: '/',
        background_color: '#AFADE7',
        theme_color: '#AFADE7',
        display: 'minimal-ui',
        icon: 'src/images/initials.png', // This path is relative to the root of the site.
      },
    },
    // TODO: uncomment next line once website is finalized
    // 'gatsby-plugin-offline',
  ],
}
