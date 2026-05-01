const getType = (value) => {
    return value?.__proto__.constructor;
}

export const isString = (value) => {
    return getType(value) === String
}
export const isNumber = (value) => {
    return getType(value) === Number
}
export const isArray = (value) => {
    return getType(value) === Array
}
export const isObject = (value) => {
    return getType(value) === Object
}
export const isFunction = (value) => {
    return getType(value) === Function
}