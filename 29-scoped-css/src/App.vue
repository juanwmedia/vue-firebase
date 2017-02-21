<template>
    <div>
        <h1>Menú principal</h1>
        <input type="range">
        <ul>
            <li><a href="">Enlace 1</a></li>
            <li><a href="">Enlace 2</a></li>
            <li><a href="">Enlace 3</a></li>
            <li><a href="">Enlace 4</a></li>
            <li><a href="">Enlace 5</a></li>
            <li><a href="">Enlace 6</a></li>
        </ul>
        <tareas></tareas>
    </div>
</template>

<script>
    import Tareas from './components/Tareas.vue';
    export default {
        components: {Tareas}
    }
</script>