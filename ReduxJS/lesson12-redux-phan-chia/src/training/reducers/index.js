import status from './status'; // Reducer status
import sort from './sort'; // Reducer sort
import { combineReducers } from 'redux';

const myReducer = combineReducers({
    status, // === status : status,
    sort// === sort : sort
});

export default myReducer;