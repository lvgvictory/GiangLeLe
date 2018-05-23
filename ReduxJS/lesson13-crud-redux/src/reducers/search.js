import * as types from './../constants/ActionTypes';

var initialStore = '';

var myReducer = (state = initialStore, action) => {
    switch (action.type) {
        case types.SEARCH:
            state = action.keyword;
            return state;

        default: return state;
    }
};

export default myReducer;