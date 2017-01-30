Vue.component('mis-tareas', {
    template: `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`,
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareas = respuesta.data;
            });
    },
    data()  {
        return {
            tareas: [],
        }
    }
});

new Vue({
    el: 'main',
});