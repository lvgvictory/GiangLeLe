import * as types from './../constants/ActionTypes';

var initialStore = false; //close form

var myReducer = (state = initialStore, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true;

        default: return state;
    }
};

export default myReducer;