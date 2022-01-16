import { LOG_IN,
        LIST_TOGGLE,
        OPEN_ADD,
        OPEN_EDIT,
        OPEN_DELETE,
        GET_URL } from '../type/types';

export function logInAction (logInResult) {
    return {
        type: LOG_IN,
        logInResult
    };
};

export function listTogleAction (toggle) {
    return {
        type: LIST_TOGGLE,
        toggle
    };
};

export function openEditAction (openEdit) {
    return {
        type: OPEN_EDIT,
        openEdit
    };
};

export function openDeleteAction (openDelete) {
    return {
        type: OPEN_DELETE,
        openDelete
    };
};

export function openAddAction (openAdd) {
    return {
        type: OPEN_ADD,
        openAdd
    };
};

export function getUrlAction (getUrl) {
    return {
        type: GET_URL,
        getUrl
    };
};