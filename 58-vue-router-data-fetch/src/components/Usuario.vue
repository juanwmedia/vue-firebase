<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>Juan Andrés Núñez</h2>
        <h5>juan@wmedia.es</h5>
        <pre v-text="username"></pre>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                username: null
            }
        },
        created() {
            this.obtenerUsername();
        },
        watch: {
          '$route': 'obtenerUsername'
        },
        methods: {
            obtenerUsername() {
                setTimeout(() => {
                    this.username = this.$route.params.id + Math.floor(Math.random() * 1000);
                }, 2000);
            }
        },
        beforeRouteEnter: ((to, from, next) => {
            console.info('Antes de entrar');
            next((vm) => console.log(vm));
        }),
        beforeRouteUpdate: ((to, from, next) => {
            console.info('Antes de cambiar la ruta sobre el mismo componente');
            next();
        }),
        beforeRouteLeave: ((to, from, next) => {
            console.info('Antes de salir');
            next();
        }),
    }
</script>


