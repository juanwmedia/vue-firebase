<template>
<!--    <contador :cantidad="cantidad"
              @aumentar="cantidad++"
              @reducir="cantidad&#45;&#45;">
    </contador>-->
    <contador></contador>
</template>

<script>
    import Contador from './components/Contador.vue';
    export default {
        components: {Contador},
    }
</script>
