import { GET_URL } from "../type/types";

const initialState = {
    getUrl: 'http://localhost:3001/contacts/'
};

export const getUrlReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_URL: return {...state, getUrl: action.getUrl};
        default: return state;
    };
};