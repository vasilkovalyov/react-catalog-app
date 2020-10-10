import {
    SIGN_IN_USER, 
    SIGN_OUT_USER, 
} from '../../constans'


const initialStore = {
    user: {}
}

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case SIGN_IN_USER : {
            if(action.data) {
                return {
                    ...state,
                    user: action.data,
                    userUid: action.data.uid
                }
            } else {
                return {
                    ...state
                };
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