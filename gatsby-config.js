module.exports = {
  siteMetadata: {
    siteUrl: "https://anuragarwalkar.github.io/",
    title: "Anurag-Portfolio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat"],
        },
      },
    },
  ],
};
