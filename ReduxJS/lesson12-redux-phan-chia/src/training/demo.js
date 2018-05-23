import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index'


const store = createStore(myReducer);
console.log('Default:', store.getState());
// Thuc hien cong viec thay doi status
// var action = { type : 'TOGGLE_STATUS'};
// store.dispatch(action); // luc nay action o ten myReducer chinh la action nay

store.dispatch(status());

console.log('TOGGLE_STATUS', store.getState());

//Thuc hien cong viec sap xep name tu Z-A
// var sortAction = {
//     type : 'SORT',
//     sort : {
//         by : 'name - 1',
//         value : -1
//     }
// }

// store.dispatch(sortAction);
store.dispatch(sort({
    by : 'name - 1',
    value : -1
}));
console.log('SORT', store.getState());
