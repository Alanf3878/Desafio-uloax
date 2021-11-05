module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "uloax",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckv72q1l34vtf01zd4w3k5bw7/master",
      },
    }
  ],
};
