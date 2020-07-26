module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/covid-19/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/_variables.scss";`,
      },
    },
  },
};
