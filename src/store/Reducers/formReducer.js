import * as type from "../Constants/Constants";

// import formState from '../states/formState';

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case type.SET_INITIAL_DATA:
            return { ...state, jobData: action.payload }
        case type.SET_SERACH_KEYWORDS:
            return { ...state, searchData: action.payload }
        case type.ADD_TAG:
            return { ...state, tags: [...state.tags, action.payload] }
        case type.REMOVE_TAG:
            return {
                ...state,
                tags: state.tags.filter(item => item != action.payload),
            }
        case type.CLEAR_ALL_TAG:
            return { ...state, tags: [] }
        default:
            return state;
    }
}

export default formReducer
