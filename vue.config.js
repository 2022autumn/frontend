const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy: {
      '/api': {   // 设置普通的http代理
        target: 'http://ishare.horik.cn:8000',
        changeOrigin: true, // 允许跨域
        ws: true, // 允许websocket跨域
        pathRewrite: {
          '^/api': '/api' // 重写路径
        }
      },
    }
  }

})
