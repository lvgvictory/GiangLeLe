import * as types from './../constants/ActionTypes';

var initialStore = {
	id : '',
	name : '',
	status : false
};

var myReducer = (state = initialStore, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
			state = action.task;        	
            return state;

        default: return state;
    }
};

export default myReducer;