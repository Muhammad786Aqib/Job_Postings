import * as types from '../actions/actionTypes';

const initialState={
    data:[]
}

function JobReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_JOBS:
            return action.data;
        case types.ADD_JOBS:
            return [
                ...state,
                Object.assign({}, action.data)
            ];
        case types.EDIT_JOBS:
            return [
                ...state.filter(data => data.id !== action.data.id),
                Object.assign({}, action.data)
            ];
        case types.DELETE_JOBS:
            return [
                ...state.filter(data => data.id !== action.id)
            ];
        default:
            return state;
    }
}
export default JobReducer;