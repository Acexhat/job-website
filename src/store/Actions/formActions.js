import * as Constants from "../Constants/Constants";
export const setData = (data) => {
    return {
        type: Constants.SET_INITIAL_DATA,
        payload: data
    }
}

export const setSearchKeyword = (data) => {
    return {
        type: Constants.SET_SERACH_KEYWORDS,
        payload: data
    }
}

export const addTag = (data) => {
    return {
        type: Constants.ADD_TAG,
        payload: data
    }
}

export const removeTag = (data) => {
    return {
        type: Constants.REMOVE_TAG,
        payload: data
    }
}

export const clearAllTag = () => {
    return {
        type: Constants.CLEAR_ALL_TAG,
    }
}