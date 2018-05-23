//khoi tao state ban dau
var initialState = {
    by : 'status',
    value: 1,
}

var myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {
        var { sort } = action;

        return {
            sort : { //new state
                by : sort.by,
                value : sort.value,
            }
        };
    }
    
    return state;// muc dich cua reducer la tra ra cai state moi
}

export default myReducer;