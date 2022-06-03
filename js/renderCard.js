// render card
let products= [
    {
        name: 'Son Kem Lì Merzy The Heritage Velvet kem',
        price: "149000",
        sold: 'Đã bán 220',
        type: 'Son kem',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
        id: 1,
        status:'new',
        quantity:1,
    },

    {
        name: ' Son Kem Lì Merzy Soft Touch Lip kem 3g',
        price: "139000",
        sold: 'Đã bán 200',
        type: 'Son kem',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/5bd96582e56c8d9ffd149388854f44b2',
        id: 2,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son Merzy Dreamy Late Night Mellow',
        price: "159000",
        sold: 'Đã bán 190',
        type: 'Son kem',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/8d3bd13c9c23b0ed2f7d890f1de1bf17',
        id: 3,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son Kem Lì Merzy The First Velvet kem 4.5g',
        price: "129000",
        sold: 'Đã bán 210',
        type: 'Son kem',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/88d9f44437e993a3b052fb5f1778f729',
        id: 4,
        status:'selling',
        quantity: 1,
    },

    {
        name: 'Son Merzy Another Me The First Lipstick',
        price: "150000",
        sold: 'Đã bán 220',
        type: 'Son thỏi',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/a882e9a4d93fa4cd5187decbd1969a4d',
        id: 4,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son Kem Lì Bbia Last Velvet Lip kem 5g',
        price: "150000",
        sold: 'Đã bán 250',
        type: 'Son kem',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/1c0ac4b7032c5e623fd0766fa68ee997',
        id: 5,
        status:'selling',
        quantity: 1,
    },

    {
        name: 'Son kem Bóng Bbia Glow Lip kem 3.2g',
        price: "159000",
        sold: 'Đã bán 220',
        type: 'Son kem',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/e74d11ac735194b3144c3f617996a73c',
        id: 6,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son Thỏi Lì Bbia Last Powder Lipstick 3.5g',
        price: "160000",
        sold: 'Đã bán 225',
        type: 'Son thỏi',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/f88c02fbc74e8d87ffe6cdab07ac9f4a',
        id: 7,
        status:'selling',
        quantity: 1,
    },

    {
        name: 'Son Kem Lì Bbia Never Die kem 4.8g ',
        price: "199000",
        sold: 'Đã bán 226',
        type: 'Son kem',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/4314c4484acc95f69debc070bd986619',
        idid: 8,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son Thỏi Lì Bbia Last Lipstick 3.5g',
        price: "198000",
        sold: 'Đã bán 236',
        type: 'Son thỏi',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/c32b17c7761759df264109ee2f98c77e',
        id: 9,
        status:'selling',
        quantity: 1,
    },

    {
        name: 'Son Kem Black Rouge Air Fit Velvet kem 6.6g',
        price: "298000",
        sold: 'Đã bán 228',
        type: 'Son kem',
        brand: 'Black rouge',
        id: 10,
        image: 'https://cf.shopee.vn/file/7ed245816b1fbc3cd0c0dc3a473fe843',
        status:'selling',
        quantity: 1,
    },

    {
        name: 'Son Black Rouge Mara Hot Water kem LV04',
        price: "299000",
        sold: 'Đã bán 229',
        type: 'Son kem',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/78a2ba609137b73b176a76e6ac861245',
        id: 11,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son Black Rouge Rose Velvet Lipstick 4.5g',
        price: "279000",
        sold: 'Đã bán 229',
        type: 'Son thỏi',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/11c180c721eea9f03a9aee333664de88_tn',
        id: 12,
        status:'selling',
        quantity: 1,
    },

    {
        name: 'Son kem Black Rouge Cream Matt Rouge',
        price: "269000",
        sold: 'Đã bán 222',
        type: 'Son kem',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/6386a43d62223fddbd8867ca6112fcb1',
        id: 13,
        status:'selling',
        quantity: 1,
    },

    {
        name: 'MAC Frosted Bullet Lipstick New shades',
        price: "499000",
        sold: 'Đã bán 250',
        type: 'Son thỏi',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/a92e36526107541cc8184f6435d2e566',
        id: 14,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son Mac Powder Kiss Lipstick 3g',
        price: "259000",
        sold: 'Đã bán 230',
        type: 'Son thỏi',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/15200c0205a05bacb27189700d41580f',
        id: 15,
        status:'selling',
        quantity: 1,
    },

    {
        name: 'Son Mac Powder Liquid Lipstick 5ml',
        price: "219000",
        sold: 'Đã bán 235',
        type: 'Son kem',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/d493c0ff83186b83ca9214f1603c4639',
        id: 16,
        status:'new',
        quantity: 1,
    },

    {
        name: 'Son MAC Powder Kiss Matte - Retro Matte',
        price: "350000",
        sold: 'Đã bán 220',
        type: 'Son kem',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/db6620dfc0c3b64f62aa8209bf1be164',
        id: 17,
        status:'selling',
        quantity: 1,
    },
]

// Function convert tiền
function convertMoney(number) {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

const productCards = document.querySelector('.product-card');

// Render danh sách card
function renderCard(arrBrand=[], arrType=[]) {
    // xóa hết DL trước khi render
    productCards.innerHTML = "";

    // Kiểm tra trường hợp không có DL nào trong danh sách
    if (products.length == 0) {
        productCards.innerHTML = "Không có sản phẩm nào trong danh sách";
        return;
    }
    // khi có công việc thì render, sử dụng vòng lặp
    let html = "";
    for (let i = 0; i < products.length; i++) {
        const t = products[i];

        // lọc theo thương hiệu
        if(arrBrand.length > 0) {
            if(arrBrand.includes(t.brand) == false) {
                continue;
            }
        };
          // lọc theo loại son
          if(arrType.length > 0) {
            if(arrType.includes(t.type) == false) {
                continue;
            }
        };

        html += `

        <div class="col-6 col-lg-4 col-md-6 col-sm-6">
            <div class="card-item mb-5" dataset="${t.id}">
                <div class="image">
                    <img src="${t.image}" alt="${t.name}"/>
                </div>

                <div class="card-content shadow rounded-bottom">
                    <p>${t.name}</p>

                    <div class="info">
                        <p class="price">${convertMoney(Number(t.price))}</p>
                        <p class="sold">${t.sold}</p>
                    </div>

                    <div class="pb-3 buy-now">
                        <i class="bi bi-bag-plus add-to-cart"></i>
                        <a href="./detail-product.html"
                          ><p>Chi tiết sản phẩm</p></a
                        >
                        <a href="./cart.html"><i class="bi bi-cart"></i></a>
                    </div>
                </div>
            </div>
        </div>

    `;
    }

    // sau khi có nội dung thì insert lại nội dung
    productCards.innerHTML = html;
}

renderCard();


// lọc theo thương hiệu
const brandInput = document.querySelectorAll('.filter-brand .content-filter input');
console.log(brandInput);

brandInput.forEach(function filterBrand(boxInputBrand, index) {
    boxInputBrand.addEventListener('click', function() {
        const boxBrand = document.querySelectorAll(".brand-detail input");
        const arrBrand = [];
        for(let i = 0; i < boxBrand.length; i++) {
            if(boxBrand[i].checked == true) {
                arrBrand.push(boxBrand[i].value);
            }
        }
        console.log(arrBrand);
        renderCard(arrBrand);
    })
})

// bỏ lọc
const btnRemoveFilter = document.querySelector('.remove-filter');
console.log(btnRemoveFilter);
btnRemoveFilter.addEventListener('click', function() {
    for(let i = 0; i < brandInput.length; i++) {
        brandInput[i].checked = false;
    }
    renderCard();
})

// lọc theo giá


// lọc theo loại son
const typeInput = document.querySelectorAll('.filter-products .content-filter input');
console.log(typeInput);

typeInput.forEach(function filterBrand(boxInput, index) {
    boxInput.addEventListener('click', function() {
        const arrType = [];
        for(let i = 0; i < typeInput.length; i++) {
            if(typeInput[i].checked == true) {
                arrType.push(typeInput[i].value);
            }
        }
        console.log(arrType);
        renderCard(arrType);
    })
})



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

// thêm sp vào giỏ hàng
const btnAddToCart = document.querySelectorAll('.add-to-cart');
console.log(btnAddToCart);
const totalItem = document.querySelector('.icon .item-quantity');
let productCart = [];

btnAddToCart.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
        const btnItem = event.target;
        const cardItem = btnItem.parentElement.parentElement.parentElement;
        const imageEl = cardItem.querySelector('.card-item .image img');
        const productImg = imageEl.src;
        const productName = cardItem.querySelector('.card-content p').innerText;
        const productPrice = cardItem.querySelector('.info .price').innerText;

        let objectCart = {
            img: productImg,
            name: productName,
            price: productPrice,
        };

        productCart.push(objectCart);

        console.log(productCart);

        localStorage.setItem('productCart', JSON.stringify(productCart));

        addCard();
    })
})


function addCard() {

    const productCart = JSON.parse(localStorage.getItem('productCart'));

    const itemEl = document.querySelectorAll('.item');

    if (productCart.length == 0) {
        var addProductCart = document.createElement('div');
    addProductCart.innerHTML = '';
    addProductCart.innerHTML += `Không có sản phẩm nào trong giỏ hàng`;
    } else {
        for (let i = 0; i < productCart.length; i++) {
            // const nameItem = itemEl[i].querySelector('.title');
            // if (nameItem.innerText == productCart[i].name) {
            //     alert('Sản phẩm bạn chọn đã có trong giỏ hàng');
            //     return;
            // }
    
        var addProductCart = document.createElement('div');
        addProductCart.innerHTML = '';
        addProductCart.innerHTML += `
        <div class="item">
            <img class="pe-3" src="${productCart[i].img}" alt="item1" />
    
            <div class="info-item">
                <p class="me-5 mt-3 title">
                ${productCart[i].name}
                </p>
    
                <div class="item-quantity">
                    <span>
                        <span>Số lượng x</span>
                        <span class="quantity-product">1</span>
                    </span>
                   
                    <a href="./detail-product.html"><i class="bi bi-pencil"></i></a>
                </div>
            </div>
            <p class="me-5 mt-3 price">${productCart[i].price}</p>
            <i class="bi bi-trash mt-3"></i>
        </div>
        `;
        }
    }

    

    // const quantityProduct = document.querySelector('.quantity-product');
    // console.log(quantityProduct);

    const money = document.querySelector('.money');
    const titleEl = document.querySelector('.cart-page .title');
    titleEl.insertAdjacentElement('afterend', addProductCart)

    totalMoneyCart();

    removeProduct();

    updateQuantityProduct();

}

// Tính tổng tiền sản phẩm

function totalMoneyCart() {
    let sum = 0;
    const itemEl = document.querySelectorAll('.item');
    const productCart = JSON.parse(localStorage.getItem('productCart'));

    for (let i = 0; i < productCart.length; i++) {
        const priceItem = productCart[i].price;
        const quantityItem = document.querySelector('.quantity-product');
        sum += Number(quantityItem.innerText) * Number(priceItem);
    }

    const sumMoneyEl = document.querySelector('.sum span');
    sumMoneyEl.innerText = convertMoney(sum);
}

// xóa sp trong giỏ hàng
function removeProduct() {
    const itemEl = document.querySelectorAll('.item');
    const productCart = JSON.parse(localStorage.getItem('productCart'));
    const btnRemoveItem = document.querySelectorAll('.item > i');

    for (let i = 0; i < btnRemoveItem.length; i++) {
        btnRemoveItem[i].addEventListener('click', function(event) {
            if (confirm('Bạn muốn xóa sản phẩm ra khỏi giỏ hàng') == true) {
                const cartDelete = event.target;
                const product = cartDelete.parentElement;
                product.remove();

                // productCart.splice(i, 1);
                // localStorage.setItem('productCart', JSON.stringify(productCart));

                // addCard(JSON.parse(localStorage.getItem('productCart')))
                totalMoneyCart();
                updateQuantityProduct()
            }
        })
    }
}

// Tính tổng sp trong giỏ hàng
function updateQuantityProduct() {
    let count = 0;
    const quantityProduct = document.querySelectorAll('.quantity-product');
    for (let i = 0; i < quantityProduct.length; i++) {
        count += Number(quantityProduct[i].innerText);
        totalItem.innerText = count;
    }
}









