import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       auth: true,
   },
    mutations: {
       cambiar: (state) => state.auth = !state.auth,
    }
});