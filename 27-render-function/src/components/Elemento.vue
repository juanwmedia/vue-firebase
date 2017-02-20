<!--<template>
    <div>
        <article v-if="tipo === 'article'">
            <slot></slot>
        </article>
        <section v-if="tipo === 'section'">
            <slot></slot>
        </section>
        <aside v-if="tipo === 'aside'">
            <slot></slot>
        </aside>
        <nav v-if="tipo === 'nav'">
            <slot></slot>
        </nav>
        <header v-if="tipo === 'header'">
            <slot></slot>
        </header>
        <footer v-if="tipo === 'footer'">
            <slot></slot>
        </footer>
    </div>
</template>-->
<script>
    export default {
        props: ['tipo'],
        render(createElement) {
            return createElement(
                this.tipo,
                this.$slots.default,
            )
        }
    }
</script>
<style>
</style>c