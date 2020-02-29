const postcssImport = require('postcss-import')
const stylelint = require('stylelint')
const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')

const plugins = [
  postcssImport({
    plugins: [stylelint]
  }),
  postcssPresetEnv({
    stage: 2,
    features: {
      'nesting-rules': true
    }
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano)
}

module.exports = {
  plugins
}
