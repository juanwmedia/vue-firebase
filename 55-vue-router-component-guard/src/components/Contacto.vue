<template>
    <section>
        <h2>Dónde encontrarme</h2>
        <p>C/. Lo que sea, Valencia</p>
        <h5>{{ newsletter }}</h5>
        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Correo-e</label>
                <input type="email" placeholder="Tu correo-e" id="correoe">
            </form>
        </template>

    </section>
</template>

<script>
    export default {
        props: ['newsletter'],
    }
</script>