<template>
    <!--<h1 :class="[$style.rojo]">Hola CSS Modules</h1>-->
    <h1 :class="{[$style.subrayado] : subrayado}">Hola CSS Modules</h1>
</template>

<script>
    export default {
        data() {
            return {
                subrayado: false
            }
        }
    }
</script>

<style module>
    .subrayado {
        text-decoration: underline;
    }
    .rojo {
        color: red;
    }
</style>
