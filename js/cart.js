const cartIcon = document.querySelector('.cart');
const overlay = document.querySelector('.overlay');
const cartOpenSide = document.querySelector('.cart-page');
const closeIconCart = document.querySelector('.close-cart');

cartIcon.addEventListener('click', function() {
    overlay.style.display = 'block';
    cartOpenSide.style.right = '0';
})

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    cartOpenSide.style.right = '-500px';
})

closeIconCart.addEventListener('click', function(){
    overlay.style.display = 'none';
    cartOpenSide.style.right = '-500px';
})

