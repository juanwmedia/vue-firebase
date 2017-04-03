import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
