import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalShow: false,
    mailAuth: false,
    openReg: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        openModal(state, action) {
            state.modalShow = action.payload.modalShow
        },
        checkEmail(state, action) {
            state.mailAuth = action.payload.mailAuth
        },
        openRegToggle(state, action) {
            state.openReg = action.payload.openReg
        }
    }
});

export const { checkEmail, openRegToggle, openModal } = authSlice.actions;
export default authSlice.reducer;