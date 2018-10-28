import React, { Component } from 'react'

import { SigninModel } from 'Models'
import { fetchOnHistoryChange } from 'Decorators/fetch'

import Signin from 'UI/Signin/Components'

@fetchOnHistoryChange(SigninModel.model)
class SigninContainer extends Component {
    render() {
        return <Signin />
    }
}

export default SigninContainer
