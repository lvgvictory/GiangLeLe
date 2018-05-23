//khoi tao state ban dau
var initialState = false;

var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state = !state;
        return state;
    }
    return state;// muc dich cua reducer la tra ra cai state moi
}

export default myReducer;