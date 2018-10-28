import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import store from 'AppStore'
import routes from 'AppRoutes'
import history from 'Utils/history'
import { fetchDataOnHistoryChange } from 'Utils/fetchData'

import 'Stylesheets'

fetchDataOnHistoryChange(store, routes, history)

render(
    <Provider store={store}>
        <Router history={history}>{renderRoutes(routes)}</Router>
    </Provider>,
    document.getElementById('root')
)
