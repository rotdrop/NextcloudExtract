const path = require('path')
const webpackConfig = require('@nextcloud/webpack-vue-config')

webpackConfig.optimization.minimize = false

webpackConfig.entry = {
	extraction: path.join(__dirname, 'src', 'extraction.js'),
}
webpackConfig.output.filename = '[name].js?v=[contenthash]'
webpackConfig.output.chunkFilename = '[name].js?v=[contenthash]'

module.exports = webpackConfig
