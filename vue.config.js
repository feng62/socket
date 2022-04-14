let proxyObj = {}
//代理所有'/'
proxyObj['/api'] = {
  //websocket
  // ws: false,
  //目标地址
  target: 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/api': 'http://localhost:8080/api'
  }
}

proxyObj['/web'] = {
  //websocket
  ws: true,
  //目标地址
  target: 'http://localhost:8080'
}

module.exports = {
  devServer: {
    proxy: proxyObj
  }
}

// proxy: {
//   '/api': {
//     target: 'http://localhost:8080',
//       changeOrigin: true,
//       pathRewrite: {
//       '^/api': 'http://localhost:8080/api'
//     }
//   },
//   '/ws': {
//     target: 'ws://localhost:8080'
//   }
// }
