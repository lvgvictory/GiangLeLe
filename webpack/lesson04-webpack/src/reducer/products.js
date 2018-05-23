import * as Types from './../contants/ActionType';
var initialState = [];

const products = (state = initialState, action) => {
    var index = -1;

    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            
            return [...state];

        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index, 1);

            return [...state];

        case Types.ADD_PRODUCT:
            state.push(action.product);

            return [...state];

        case Types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            state[index] = action.product;

            return [...state];

        default: 
            return [...state];
    }
}

var findIndex = (products, id) => {
    var result = -1;

    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });

    return result;
}

export default products;