import { MAIL_OK } from '../type/type';

const initialState = {
    mailInput: false
}

export const mailInputReducer = (state = initialState, action) => {

    switch (action.type) {
        case MAIL_OK: return {...state, mailInput: action.mailInput}
        default: return state;
    }
};