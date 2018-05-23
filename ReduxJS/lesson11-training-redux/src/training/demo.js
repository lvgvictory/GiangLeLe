import { createStore } from 'redux';

//khoi tao state ban dau
var initialState = {
    status : false,
    sort : {
        by : 'name',
        value: 1,
    },
}

var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
        return state;
    }
    if (action.type === 'SORT') {
        var { sort } = action;
        var { status } = state; // var status = state.status

        // state.sort = {
        //     by : action.sort.by,
        //     value : action.sort.value
        // }
        // return state;

        return {
            status : status,
            sort : {
                by : sort.by,
                value : sort.value,
            }
        };
    }
    return state;// muc dich cua reducer la tra ra cai state moi
}

const store = createStore(myReducer);
console.log('Default:', store.getState());
// Thuc hien cong viec thay doi status
var action = { type : 'TOGGLE_STATUS'};

store.dispatch(action); // luc nay action o ten myReDucer chinh la action nay

console.log('TOGGLE_STATUS', store.getState());

//Thuc hien cong viec sap xep name tu Z-A
var sortAction = {
    type : 'SORT',
    sort : {
        by : 'name - 1',
        value : -1
    }
}

store.dispatch(sortAction);
console.log('SORT', store.getState());
