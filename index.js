const btnCart= document .querySelector('.container-icon')

const containerCartProducts = document.querySelector('.container-cart-products')

btnCart .addEventListener('click',() => {
    containerCartProducts.classList.toggle('hidden-cart')
})
//funcion para que cuando se le de click al carrito aparezca la descripcion de la compra