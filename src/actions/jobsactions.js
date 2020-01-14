import axios from 'axios';
import * as types from './actionTypes';



export function addjobs(data) {
    return { type: types.ADD_JOBS, data};
}

export function editjobs(data) {
    return { type: types.EDIT_JOBS, data};
}

export function deletejobs(id) {
    return { type: types.DELETE_JOBS, id};
}

export function setjobs(data) {
    return { type: types.SET_JOBS, data};
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status};
}
// not working
export function getjobs() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get()
            .then(response => {
                dispatch(setjobs(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}