import * as types from '../actions/actionTypes';
const initialState={
    
    ajaxLoading: false
}

 function AjaxLoadingReducer(state = initialState, action) {
    if (action.type === types.AJAX_LOADING) {
        return action.status
    }
    return state;
}
export default AjaxLoadingReducer;