const cartIcon = document.querySelector('.cart');
const overlay = document.querySelector('.overlay');
const cartOpenSide = document.querySelector('.cart-page');
const closeIconCart = document.querySelector('.close-cart');

cartIcon.addEventListener('click', function () {
    overlay.style.display = 'block';
    cartOpenSide.style.right = '0';
})

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    cartOpenSide.style.right = '-500px';
})

closeIconCart.addEventListener('click', function () {
    overlay.style.display = 'none';
    cartOpenSide.style.right = '-500px';
})

// chỉnh sửa sản phẩm


// // thêm sp vào giỏ hàng
// const btnAddToCart = document.querySelectorAll('.add-to-cart');
// console.log(btnAddToCart);
// const totalItem = document.querySelector('.icon .item-quantity');


// btnAddToCart.forEach(function (button, index) {
//     button.addEventListener('click', function (event) {
//         // const btnItem = event.target;
//         // const cardItem = btnItem.parentElement.parentElement.parentElement;
//         // const imageEl = cardItem.querySelector('.card-item .image img');
//         // const productImg = imageEl.src;
//         // const productName = cardItem.querySelector('.card-content p').innerText;
//         // const productPrice = cardItem.querySelector('.info .price').innerText;

        

//         // const productquantity = document.querySelector('.sold').innerText;
//         // const quantityItem = document.querySelector('header .item-quantity');
//         // const count = Number(quantityItem.innerText);
//         // addCard(productImg, productName, productPrice);
//         addCard()
//     })
// })

// function addCard() {
//     const productCart = JSON.parse(localStorage.getItem('productCart'));
//     const itemEl = document.querySelectorAll('.item');

//     for (let i = 0; i < productCart.length; i++) {
//         const nameItem = document.querySelectorAll('.item .title');
//         // if (nameItem[i].innerText == productName) {
//         //     alert('Sản phẩm bạn chọn đã có trong giỏ hàng');
//         //     return;
//         // }
    

//     var addProductCart = document.createElement('div');
//     addProductCart.innerHTML = '';
//     addProductCart.innerHTML += `
//     <div class="item">
//         <img class="pe-3" src="${productCart[i].img}" alt="item1" />

//         <div class="info-item">
//             <p class="me-5 mt-3 title">
//               ${productCart[i].name}
//             </p>

//             <div class="item-quantity">
//                 <span>
//                     <span>Số lượng x</span>
//                     <span class="quantity-product">1</span>
//                 </span>
               
//                 <a href="./detail-product.html"><i class="bi bi-pencil"></i></a>
//             </div>
//         </div>
//         <p class="me-5 mt-3 price">${productCart[i].price}</p>
//         <i class="bi bi-trash mt-3"></i>
//     </div>
//     `;
//     }

//     // const quantityProduct = document.querySelector('.quantity-product');
//     // console.log(quantityProduct);

//     const money = document.querySelector('.money');
//     const titleEl = document.querySelector('.cart-page .title');
//     titleEl.insertAdjacentElement('afterend', addProductCart)

//     totalMoneyCart();

//     removeProduct();

//     updateQuantityProduct();

// }

// // Tính tổng tiền sản phẩm

// function totalMoneyCart() {
//     let sum = 0;
//     const itemEl = document.querySelectorAll('.item');

//     for (let i = 0; i < itemEl.length; i++) {
//         const priceItem = itemEl[i].querySelector('.price');
//         const quantityItem = itemEl[i].querySelector('.quantity-product');
//         sum += Number(quantityItem.innerText) * Number(priceItem.innerText);
//     }

//     const sumMoneyEl = document.querySelector('.sum span');
//     console.log();
//     sumMoneyEl.innerText = convertMoney(sum);

// }

// // xóa sp trong giỏ hàng
// function removeProduct() {
//     const itemEl = document.querySelectorAll('.item');
//     for (let i = 0; i < itemEl.length; i++) {
//         const btnRemoveItem = document.querySelectorAll('.item > i');
//         btnRemoveItem[i].addEventListener('click', function (event) {
//             if (confirm('Bạn muốn xóa sản phẩm ra khỏi giỏ hàng') == true) {
//                 const cartDelete = event.target;
//                 const product = cartDelete.parentElement;
//                 product.remove();
//                 totalMoneyCart();
//                 updateQuantityProduct()
//             }
//         })
//     }
// }

// // Tính tổng sp trong giỏ hàng
// function updateQuantityProduct() {
//     let count = 0;
//     const quantityProduct = document.querySelectorAll('.quantity-product');
//     for (let i = 0; i < quantityProduct.length; i++) {
//         count += Number(quantityProduct[i].innerText);
//         totalItem.innerText = count;
//     }
// }

// // Function convert tiền
// function convertMoney(number) {
//     return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
// }






