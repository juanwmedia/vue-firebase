<template>
    <section>
        <h1>Home</h1>
        <router-link :to="'/equipo/' + id">Equipo</router-link>
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