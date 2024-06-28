module.exports = {
    devServer: {
      port: 8081,
      
    },
    css: {
      loaderOptions: {
        scss: {
          data: `@import "./src/assets/variables.scss";`
        }
      }
    }
  }