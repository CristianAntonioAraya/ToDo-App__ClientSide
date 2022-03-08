import { types } from "../types/Types" 

export const setError = (msg) => ({
    type: types.uiSetError,
    payload: msg
}) 

export const unsetError = () => ({
    type: types.uiRemoveError
})