new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola Mundo :) !',
        nuevaTarea: null,
        tareas: [{
                titulo: 'Aprender Vue.js',
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo: 'Aprender ES6',
                prioridad: false,
                antiguedad: 135
            },
            {
                titulo: 'Publicar algo todos los días',
                prioridad: true,
                antiguedad: 378
            },
        ]
    },
    methods: {
        agregarTarea() {
            // this, hace referencia a la instancia Vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            });
            this.nuevaTarea = null;
        },
    },
    computed: {
        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('');
        },
        tareasPorAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});