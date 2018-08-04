import Debug from 'debug'
import React from 'react'
const debug = Debug('electron-init')

const message = 'Electron, React, and Webpack'
debug('message: %s', message)
const App = () => <div>{message}</div>

export default App
