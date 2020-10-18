import actions from '../../actions'
import {
    LOAD_PRODUCTS, 
} from '../../constans'


const initialStore = {
    products: []
}

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case LOAD_PRODUCTS : {
            return {
                ...state,
                products: action.data
            }
        }

        default : {
            return state;
        }
    }
}
export default reducer;