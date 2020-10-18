import firebase from '../../../firebase';

import {
    LOAD_PRODUCTS,
} from '../../constans';


export const load_products = () => {
    return (dispatch) => {
        firebase.doLoadProductsFb()
        .then(response => {
            dispatch(loadProductsAction(response))
        })
    };
}

const loadProductsAction = (products) => {
    return {
        type: LOAD_PRODUCTS,
        data: products
    };
}