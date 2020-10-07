import {
    SIGN_IN_USER, 
    SIGN_OUT_USER, 
} from '../../constans'


const initialStore = {
    user: {}
}

const reducer = (state = initialStore, action) => {
    console.log(action);
    
    switch(action.type) {
        case SIGN_IN_USER : {
            return {
                ...state,
                user: action.data,
                userUid: action.data.uid
            }
        }

        case SIGN_OUT_USER : {
            return {
                user: null,
                userUid: null
            }
        }

        default : {
            return state;
        }
    }
}

export default reducer;