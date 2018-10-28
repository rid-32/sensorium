const decorator = name => (target, key) => {
    Object.assign(target, {
        [name]: { ...target[name], [key]: target[key] },
    })
}

export const reducer = decorator('reducers')
export const effect = decorator('effects')
export const selector = decorator('selectors')
