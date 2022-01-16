import { OPEN_DELETE } from "../type/types";

const initialState = {
    openDelete: false
};

export const openDeleteReducer = (state = initialState, action) => {

    switch(action.type) {
        case OPEN_DELETE: return {...state, openDelete: action.openDelete};
        default: return state;
    };
};