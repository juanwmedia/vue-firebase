<template>
    <section>
        <h1>Cantidad: {{ cantidad }}</h1>
        <button @click="aumentar">Aumentar</button>
        <button @click="reducir">Reducir</button>
    </section>
</template>
<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        computed: mapState(['cantidad']),
        methods: mapMutations(['aumentar', 'reducir']),
/*        methods: {
            aumentar() {
                //this.$store.state.cantidad++;
                this.$store.commit('aumentar');
            },
            reducir() {
                //this.$store.state.cantidad--;
                this.$store.commit('reducir');
            }
        }*/
    }
</script>