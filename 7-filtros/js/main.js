Vue.filter('alReves',(valor) => valor.split('').reverse().join(''));

new Vue({
    el: 'main',
    data: {
        busqueda: '',
        minimo: 5,
        juegos: [{
                titulo: 'Battlefield 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo: 'Civilization VI',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo: 'Resident Evil 7',
                genero: 'Survival Horror',
                puntuacion: 7,
            },
        ]
    },
    computed: {
        mejoresJuegos() {
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego() {
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    }
});

