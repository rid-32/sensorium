import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createBrowserHistory as createHistory } from 'history'

import routes from './routes'

import 'Stylesheets'

const history = createHistory()

render(
    <Router history={history}>{renderRoutes(routes)}</Router>,
    document.getElementById('root')
)
