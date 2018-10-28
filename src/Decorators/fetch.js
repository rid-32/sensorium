import React, { Component } from 'react'
import { connect } from 'react-redux'

import mixin from 'Utils/mixin'

export const fetchOnHistoryChange = modelName =>
    mixin({
        fetchData(dispatch, params) {
            return dispatch[modelName].fetchData(params)
        },
    })

export const fetchOnMount = (...modelNames) => WrappedComponent => {
    @connect(
        null,
        dispatch => ({ dispatch })
    )
    class Wrapper extends Component {
        componentDidMount() {
            const params = this.props.match ? this.props.match.params : {}
            const promises = modelNames.map(
                this.getFetchMethod.bind(this, params)
            )

            Promise.all(promises)
        }

        getFetchMethod = (params, model) =>
            this.props.dispatch[model]
                ? this.props.dispatch[model].fetchData(params)
                : Promise.resolve(null)

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return Wrapper
}
