import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/productos';
import {getters} from './getters';
import {mutations} from './mutations';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        carro: [],
    },
    getters: getters,
    mutations:mutations,
    modules: {
        productos
    }
});
