module.exports = {
  siteMetadata: {
    siteName: `Using Typescript Example`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `http://localhost:4000/graphql`,
        typeName: `GraphCMS`,
        refetchInterval: 60,
      },
    },
  ],
};
