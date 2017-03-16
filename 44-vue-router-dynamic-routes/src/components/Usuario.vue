<template>
    <h2>{{ id }}</h2>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        }
    }
</script>