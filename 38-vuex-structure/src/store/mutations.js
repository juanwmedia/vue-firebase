export const mutations = {
    comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
    eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
};