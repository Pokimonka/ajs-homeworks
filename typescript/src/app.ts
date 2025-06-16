import Cart from "./Cart";

const cart = new Cart;

cart.add({
    id: 1,
    name: 'Test',
    price: 1000
});

cart.add({
    id: 2,
    name: 'Tes',
    price: 1000
})

console.log(cart.sum());
