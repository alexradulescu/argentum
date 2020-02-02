import React from 'react'
import { render } from 'react-dom'

import { App } from './components/App'
import './assets/bootstrap.min.css'
import './assets/avantui.min.css'

const rootElement = document.querySelector('#root')
render(<App />, rootElement)
