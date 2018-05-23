import * as types from './../constants/ActionTypes';

var initialStore = {
    name : '',
    status : -1,
};

var myReducer = (state = initialStore, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return {
                name : action.filter.name,
                status : parseInt(action.filter.status, 10)
            };

        default: return state;
    }
};

export default myReducer;