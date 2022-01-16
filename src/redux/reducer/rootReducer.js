import { combineReducers } from "redux";
import { logInReducer } from './logInReducer';
import { toggleReducer } from './toggleReducer';
import { openAddReducer } from './openAddReducer';
import { openEditReducer } from './openEditReducer';
import { openDeleteReducer } from './openDeleteReducer';
import { getUrlReducer } from './getUrlReducer';

export const rootReducer = combineReducers({
    logInReducer,
    toggleReducer,
    openAddReducer,
    openEditReducer,
    openDeleteReducer,
    getUrlReducer
});