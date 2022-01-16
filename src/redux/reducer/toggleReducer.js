import { LIST_TOGGLE } from '../type/types';

const initialState = {
    toggle: false
};

export const toggleReducer = (state = initialState, action) => {

    switch(action.type) {
        case LIST_TOGGLE: return {...state, toggle: action.toggle};
        default: return state;
    };
};