import BaseModel from 'Models/BaseModel'

import { effect, reducer, selector } from 'Decorators/model'

class MainStoreModel extends BaseModel {
    /* Model name */
    static model = 'MainStore'

    /* Effects */
    @effect
    getApiMethod(data) {
        return Promise.resolve(data)
    }

    @effect
    transformDataForFetching() {
        return { data: 'Hi, Frank' }
    }

    @effect
    hello() {
        console.log('Hello')
    }

    /* Reducers */
    @reducer
    world() {
        console.log('World')
    }

    /* Selectors */
    @selector
    getSomething() {}
}

export default MainStoreModel
