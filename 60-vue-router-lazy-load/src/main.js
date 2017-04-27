import Vue from 'vue';
import App from './App.vue';
import Info from './components/Info.vue';
//import Bio from './components/Bio.vue';

const Bio = resolve => {
  require.ensure(['./components/Bio.vue'], () => {
     resolve(require('./components/Bio.vue'));
  });
};

/* Router */
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Info},
    {path: '/bio', component: Bio},
];

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        const position = {};
        console.log(to);
        if (to.hash) {
            position.selector = to.hash;
        } else {
            position.x = 200;
            position.y = 100;
        }
        return position;
    }
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});