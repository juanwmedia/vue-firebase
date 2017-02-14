Vue.component('usuarios', {
    template: '#usuarios-template',
    mounted() {
        axios.get('https://randomuser.me/api/?results=500')
            .then((datos) => {
                const listado = datos.data.results.map((usuario) => {
                    return {
                        nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                        correoe: usuario.email,
                        foto: usuario.picture.medium,
                    }
                });
                this.usuarios = listado;
            });
    },
    data() {
        return {
            usuarios: [],
            busqueda: '',
        }
    },
    computed: {
        filtrarUsuarios() {
            return this.usuarios.filter((usuario) => {
                return usuario.nombre.includes(this.busqueda);
            });
        }
    }
});

Vue.component('usuario', {
    props: ['datos'],
    template: '#usuario-template',
});

new Vue({
    el: 'main',
});