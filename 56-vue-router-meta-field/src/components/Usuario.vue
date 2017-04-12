<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>Juan Andrés Núñez</h2>
        <h5>juan@wmedia.es</h5>
    </section>
</template>

<script>
    export default {
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


