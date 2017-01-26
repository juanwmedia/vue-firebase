const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1',
    },
    beforeUpdate() {
        console.log('BeforeUpdate: ', this.mensaje);
    },
    updated() {
        console.log('Update: ', this.mensaje);
    },
    methods: {
        alReves(){
             this.mensaje = this.mensaje.split('').reverse().join('');
        }
    },
    computed: {
        mensajeMayusculas(){
            return this.mensaje.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Instancia Vue 2',
    }
});