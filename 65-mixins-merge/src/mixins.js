export const mixin = {
    created() {
        console.log('Created desde el mixin');
        this.saludar();
    },
    data () {
        return {
            aprender: [
                {nombre: 'Ionic 7'},
                {nombre: 'Node'},
                {nombre: 'MongoDB'},
                {nombre: 'Angular 3'},
                {nombre: 'Laravel'},
            ],
            nuevaTecnologia: null,
        }
    },
    methods: {
        agregarTecnologia() {
            this.aprender.unshift({
                nombre: this.nuevaTecnologia,
            });
            this.nuevaTecnologia = null;
        },
        saludar() {
            alert('Hola desde el mixin');
        }
    }
};