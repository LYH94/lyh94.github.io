module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/style.scss";'
      }
    }
  }
};