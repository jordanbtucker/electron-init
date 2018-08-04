import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import {rendererConfig} from '../../webpack.configs'
import run from './run'

const compiler = webpack(rendererConfig)
const server = new WebpackDevServer(compiler, rendererConfig.devServer)

server.listen(8080, '127.0.0.1', err => {
	if (err) return console.error(err)
	run({type: 'url', path: 'http://localhost:8080/', devTools: true})
})
