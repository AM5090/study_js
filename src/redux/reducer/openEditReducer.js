import { OPEN_EDIT } from '../type/types';

const initialState = {
    openEdit: false
};

export const openEditReducer = (state = initialState, action) => {

    switch(action.type) {
        case OPEN_EDIT: return {...state, openEdit: action.openEdit};
        default: return state;
    };
};