<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <router-link to="/" active-class="activo" tag="li" exact>
            <a>Home</a>
        </router-link>
        <router-link to="/contacto" active-class="activo" tag="li" >
            <a>Contacto</a>
        </router-link>
        <router-link to="/usuario/77" active-class="activo" tag="li" >
            <a>Usuario</a>
        </router-link>
        <router-link to="/usuario/99" active-class="activo" tag="li" >
            <a>Usuario</a>
        </router-link>
        <hr>
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
    }
</script>

<style>
    .activo a {
        color: red;
    }
</style>