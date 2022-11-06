import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import { auth } from './modules/auth/auth.js';
import { product } from './modules/product/product.js';

export default createStore({
    state:{

    },
    getters:{

    },
    actions:{

    },
    mutations:{

    },
    modules:{
        auth,
        product,
    },
    plugins: [createPersistedState({
        paths: ['auth', 'product']
    })],
});