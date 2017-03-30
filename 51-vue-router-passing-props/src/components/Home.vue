<template>
    <section>
        <h1>Home</h1>
        <router-link :to="{ name: 'equipo', params: {id: id}}">Equipo</router-link>
        <router-link :to="{name: 'contacto'}">Contacto</router-link>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                id: 'juan'
            }
        }
    }
</script>