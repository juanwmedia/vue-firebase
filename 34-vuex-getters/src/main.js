import Vue from 'vue';
import Tareas from './Tareas.vue';
import {store} from './store/store';

new Vue({
    el: '#app',
    store,
    render: h => h(Tareas)
})
