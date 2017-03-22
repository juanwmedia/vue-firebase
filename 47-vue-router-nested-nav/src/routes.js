import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import Usuario from './components/Usuario.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';
import UsuarioBio from './components/UsuarioBio.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo/:id', component: Equipo, children: [
        {path: '', component: Usuario, children: [
            {path: 'fotos', component: UsuarioFotos},
            {path: 'bio', component: UsuarioBio}
        ]},
    ]},
];