module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/apps/covid/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/_variables.scss";`,
      },
    },
  },
};
