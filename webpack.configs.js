const {HotModuleReplacementPlugin} = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const baseConfig = {
	mode: isProduction ? 'production' : 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
}

const mainConfig = Object.assign({}, baseConfig, {
	entry: [
		isProduction ? './src/main/index.js' : './src/main/index.dev.js',
	],
	output: {
		filename: 'main.js',
	},
	target: 'electron-main',
})

const rendererConfig = Object.assign({}, baseConfig, {
	devServer: {
		hot: true,
	},
	entry: [
		isProduction ? './src/renderer/index.js' : './src/renderer/index.dev.js',
	],
	output: {
		filename: 'renderer.js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/renderer/index.html',
			filename: 'index.html',
		}),
	],
	target: 'electron-renderer',
})

if (!isProduction) {
	rendererConfig.entry.push('webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080/')
	rendererConfig.plugins.push(new HotModuleReplacementPlugin())
}

module.exports = {
	mainConfig,
	rendererConfig,
}
