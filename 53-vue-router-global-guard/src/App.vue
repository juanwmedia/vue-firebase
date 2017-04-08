<template>
    <section>
        <button @click="cambiar">Cambiar Auth</button>
        <hr>
        <router-view></router-view>
    </section>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: mapMutations(['cambiar']),
    }
</script>