import * as Types from './../contants/ActionType';
import callApi from './../utils/apiCaller';

// lay tat ca du lieu 
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        // payload : products or
        products
    }
}

//Xoa du lieu
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

//Them du lieu
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));// nhan cai product da duoc them tren server ve
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

//Cap nhat du lieu
//lay du lieu
export const actGetProductRequest = (id) => { // get du lieu tu tren server ve
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then( res => {
            dispatch(actGetProduct(res.data));
        });
    }
} 
export const actGetProduct = (product) => { // do du lieu ra ra form
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

//luu du lieu
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data)); //dispatch de update du lieu len store
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
