const path = require('path')
const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'
let outputFileName = '[name].js'

if (isProd) {
  outputFileName = '[name].min.js'
}

const config = {
  mode: isProd ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/ts/main.ts'),
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: outputFileName
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}

module.exports = config
