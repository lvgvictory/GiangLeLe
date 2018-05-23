import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialStore = data ? data : [];

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });

    return result;
}

var myReducer = (state = initialStore, action) => {
    var id = '';
    var index = -1;

    switch (action.type) {
        case types.LIST_ALL:
            return state;

        case types.SAVE_TASK:
            var task = {
                    id : action.task.id,
                    name : action.task.name,
                    status : (action.task.status === true || action.task.status === 'true') ? true : false
                }

            if (!task.id) { // neu khong co id thi minh tao moi id truong hop them moi
                task.id = generateID();
                state.push(task);
            } else { // truong hop cap nhat
                index = findIndex(state, task.id);
                state[index] = task;                
            }
            
            localStorage.setItem('tasks', JSON.stringify(state));

            return [...state]; // tranh truong hop tham chieu vung nho, copy ra mot array roi tra ve

        case types.UPDATE_STATUS_TASK:
            id = action.id;
            index = findIndex(state, id);

            // C1 & C2
            // var cloneTask = {...state[index]};
            // cloneTask.status = !cloneTask.status;
            // C1:
            // state.splice(index, 1);
            // state.push(cloneTask);

            // C2:
            // state[index] = cloneTask;

            // C3
            state[index] = {
                ...state[index],
                status : !state[index].status
            }

            localStorage.setItem('tasks', JSON.stringify(state));

            return [...state];

        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));

            return [...state];

        default: return state;
    }
};

export default myReducer;

// C1:
//Clone task moi = task cu && update = !status
//Xoa task cu => push moi

// C2:
// thay the ghi de len phan tu cu

