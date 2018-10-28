import PrimaryContainer from 'UI/Root/Containers/PrimaryContainer'
import MainPageConatainer from 'UI/Root/Containers/MainPageContainer'
import SigninContainer from 'UI/Signin/Containers'

const routes = [
    {
        component: SigninContainer,
        path: '/signin',
    },
    {
        component: PrimaryContainer,
        path: '/',
        routes: [
            {
                path: '/',
                exact: true,
                component: MainPageConatainer,
            },
        ],
    },
]

export default routes
