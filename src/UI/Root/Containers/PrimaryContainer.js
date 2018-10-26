import React, { Component, Fragment } from 'react'
import { renderRoutes } from 'react-router-config'

import HeaderContainer from 'UI/Root/Containers/HeaderContainer'

class PrimaryContainer extends Component {
    render() {
        return (
            <Fragment>
                <HeaderContainer />

                {renderRoutes(this.props.route.routes)}
            </Fragment>
        )
    }
}

export default PrimaryContainer
