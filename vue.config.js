// vue.config.js
module.exports = {
  runtimeCompiler: true,
  // 设置px2rem
    chainWebpack: config => {
      config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
        .loader('px2rem-loader')
        .options({
          remUnit: 37.5
        })
    },
    // 设置路径映射
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'components': '@/components',
          'views': '@/views',
          'utils': '@/utils'
        }
      }
    },
    // 解决前端跨域
    devServer: {
      proxy: {
        '/api': {
          target: 'http://www.0103699.com', //对应服务器地址
          changeOrigin: true, //允许跨域
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }