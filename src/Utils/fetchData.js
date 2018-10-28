import { matchRoutes } from 'react-router-config'

const getMethod = (dispatch, { route, match }) => {
    const fetchData =
        route.component.prototype && route.component.prototype.fetchData

    return fetchData instanceof Function
        ? fetchData(dispatch, match.params)
        : Promise.resolve(null)
}

const getApiMethods = (dispatch, routes) => {
    const cb = getMethod.bind(null, dispatch)

    return routes.map(cb)
}

export const fetchData = (dispatch, routes, url) => {
    const currentRoutes = matchRoutes(routes, url)
    const apiMethods = getApiMethods(dispatch, currentRoutes)

    Promise.all(apiMethods)
}

export const fetchDataOnHistoryChange = (store, routes, history) => {
    const { dispatch } = store
    const { pathname } = history.location

    fetchData(dispatch, routes, pathname)

    history.listen(({ pathname }) => {
        fetchData(store.dispatch, routes, pathname)
    })
}
