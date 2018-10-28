import React, { Component } from 'react'

import { MainStoreModel } from 'Models'
import { fetchOnMount } from 'Decorators/fetch'

@fetchOnMount(MainStoreModel.model)
class MainPageContainer extends Component {
    render() {
        return <h3>Main Page</h3>
    }
}

export default MainPageContainer
