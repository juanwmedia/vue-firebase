import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Usuario from './components/Usuario.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/usuario/:id', component: Usuario},
];