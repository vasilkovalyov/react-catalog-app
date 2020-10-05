import axios from 'axios';

import {
    LOAD_PRODUCTS,
} from '../../constans';


export const load_products = (url) => {
    return (dispatch) => {
        axios(url)
        .then(response => response.data)
        .then(data => {
            dispatch({
                type: LOAD_PRODUCTS,
                data: data
            })
        })
        .catch(e => console.log(e))
    }
}