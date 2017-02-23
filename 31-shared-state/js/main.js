const compartido =  {
    usuario: {
        nombre: 'Juan Andrés',
    }
};

new Vue({
    el: '#app1',
    data: compartido,
});

new Vue({
    el: '#app2',
    data: compartido,
});