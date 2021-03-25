module.exports = {
  siteMetadata: {
    projects: [
      {
        name: `Spotify Extended Search`,
        links: {
          github: 'https://github.com/Logan8192/Spotify-Extended-Search',
        },
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        siteUrl: `https://logan8192.github.io/`,
        i18nextOptions: {
          keySeparator: false,
        },
      },
    },
  ],
};
