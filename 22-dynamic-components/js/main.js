Vue.component('lista-tareas', {
    template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                </ul>
                <hr>
            </div>`,
    data() {
        return {
            tareas:[
                'Finalizar sección Componentes',
                'Iniciar workflow con Vue CLI y Webpack',
                'Terminar de estudiar la documentación de Vuex',
                'Seguir jugando con Vue Router y grabar el primer vídeo',
            ],
        }
    }
});

Vue.component('tarea', {
    props: ['tarea'],
    template: `<li> {{ tarea }}</li>`
});

Vue.component('contacto', {
   template: `<div><a href="mailto:juan@wmedia.es">juan@wmedia.es</a> <hr></div>`,
});

Vue.component('bio', {
    template: `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet magna quis maximus. Vivamus eget consectetur tellus. Sed diam ante, dictum sit amet tincidunt ac, facilisis eget dui. </p><hr></div>`,
});

new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
});