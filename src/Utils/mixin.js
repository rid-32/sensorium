const mixin = config => cls => {
    const keys = Object.keys(config)
    let instance = cls.prototype || cls

    keys.forEach(key =>
        Object.defineProperty(instance, key, { value: config[key] })
    )

    return cls
}

export default mixin
