import {
    load_products,
} from './products'

import {
    auth_user,
    sing_out_user
} from './auth'

const actions = {
    auth_user,
    sing_out_user,
    load_products,
}

export default actions;