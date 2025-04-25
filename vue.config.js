module.exports = {
    devServer: {
      port: 8081,
      contentBase: './dist',
    hot: true,
    open: true,
    watchContentBase: true,
    },
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "./src/assets/bootstrap-overrides.scss";`
        }
      }
    }
  }