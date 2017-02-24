<template>
    <div>
        <h1>Contador: {{ cantidad }}</h1>
        <button @click="aumentar">Aumentar</button>
        <button @click="reducir">Reducir</button>
    </div>
</template>
<script>
    export default {
        //props: ['cantidad'],
        methods: {
            aumentar() {
                //this.$emit('aumentar');
                this.$store.state.cantidad++;
            },
            reducir() {
                //this.$emit('reducir');
                this.$store.state.cantidad--;
            }
        },
        computed: {
            cantidad() {
                return this.$store.state.cantidad;
            }
        }
    }
</script>