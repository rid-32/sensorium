const createModels = modelClasses => {
    const modelClassNames = Object.keys(modelClasses)

    return modelClassNames.reduce((acc, className) => {
        const ModelClass = modelClasses[className]

        return {
            ...acc,
            [ModelClass.model]: new ModelClass(),
        }
    }, {})
}

export default createModels
