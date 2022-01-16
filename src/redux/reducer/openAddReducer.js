import { OPEN_ADD } from "../type/types";

const initialState = {
    openAdd: false
};

export const openAddReducer = (state = initialState, action) => {

    switch(action.type) {
        case OPEN_ADD: return {...state, openAdd: action.openAdd};
        default: return state;
    };
};