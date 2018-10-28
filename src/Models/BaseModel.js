export class BaseResources {
    reducers = {
        onFetchStarted(state) {
            return {
                ...state,
                isFetching: true,
                isFetched: false,
            }
        },
        onFetchSuccessed(state, data) {
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                payload: data,
                error: null,
            }
        },
        onFetchFailed(state, error) {
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                payload: null,
                error: error,
            }
        },
        ...this.reducers,
    }

    effects = {
        async fetchData(payload) {
            let response = null
            const data = this.transformDataForFetching(payload)

            try {
                this.onFetchStarted()

                response = await this.getApiMethod(data)

                this.onFetchSuccessed(response.data)
            } catch (error) {
                this.onFetchFailed(error)
            }

            return response
        },
        transformDataForFetching(data) {
            // Rewrite this method if you need
            return data
        },
        getApiMethod() {
            // Rewrite this method
            const payload = { data: 'Hello, world' }

            return Promise.resolve(payload)
        },
        ...this.effects,
    }

    selectors = {
        ...this.selectors,
    }
}

class BaseModel extends BaseResources {
    state = {
        isFetching: false,
        isFetched: false,
        payload: null,
        error: null,
    }
}

export default BaseModel
