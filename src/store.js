import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'

import * as modelClasses from 'Models'

import createModels from 'Utils/createModels'

const models = createModels(modelClasses)

const store = init({
    models,
    plugins: [selectPlugin()],
})

export default store
