import firebase from '../../../firebase';

import {
    SIGN_IN_USER,
    SIGN_OUT_USER,
} from '../../constans';

export const auth_user = () => {
    return (dispatch) => {
        firebase.auth.onAuthStateChanged(function(user) {
            if(user) {
                dispatch({
                    type: SIGN_IN_USER,
                    data: user
                })
            }
        })
    }
}

export const sing_out_user = () => {
    return (dispatch) => {
        dispatch({
            type: SIGN_OUT_USER,
        })
    }
}