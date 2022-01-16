import { LOG_IN } from '../type/types';

const initialState = {
    logInResult: null
}

export const logInReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOG_IN: return {...state, logInResult: action.logInResult};
        default: return state;
    };
};