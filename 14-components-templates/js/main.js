Vue.component('elegir-ganador', {
    props: ['listado'],
    //template: '#elegir-ganador-template',
/*    template: `<div>
                    <h1 v-if="ganador">El ganador es: {{ ganador }}</h1>
                    <template v-else>
                        <h1>Participantes</h1>
                        <ul>
                            <li v-for="persona in listado">{{ persona }}</li>
                        </ul>
                    </template>
                    <button @click="elegirGanador">Elegir ganador</button>
                </div>
               `,*/
    methods: {
        elegirGanador() {
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice - 1];
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    },
});

new Vue({
    el: 'main',
    data: {
        personas: [
            'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
        ]
    },
});