import * as Types from './../contants/ActionType';

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        // payload : products or
        products
    }
}