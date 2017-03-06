export const getters = {
    totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0),
};