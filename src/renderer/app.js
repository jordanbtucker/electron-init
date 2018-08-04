import Debug from 'debug'
import React from 'react'
import './app.css'

const debug = Debug('electron-init')

const message = 'Electron, React, and Webpack'
debug('message: %s', message)
const App = () => <h1>{message}</h1>

export default App
