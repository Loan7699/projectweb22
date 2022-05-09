const imgSmall = document.querySelectorAll('.img-small img');
const imgBig = document.querySelector('.img-big img');

imgSmall.forEach(function(imgItem, x) {
    imgItem.addEventListener('click', function() {
        imgBig.src = imgItem.src;
    })
})


let products= [
    {
        name: 'Son Kem Lì Merzy The Heritage Velvet Tint 4.5g',
        price: "149,000đ",
        quatity: 'Đã bán 220',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: ' Son Kem Lì Merzy Soft Touch Lip Tint 3g',
        price: "139,000đ",
        quatity: 'Đã bán 200',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/5bd96582e56c8d9ffd149388854f44b2',
    },

    {
        name: 'Son kem lì Merzy Dreamy Late Night Mellow Tint 4g',
        price: "159,000đ",
        quatity: 'Đã bán 190',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/8d3bd13c9c23b0ed2f7d890f1de1bf17',
    },

    {
        name: 'Son Kem Lì Merzy The First Velvet Tint 4.5g',
        price: "129,000đ",
        quatity: 'Đã bán 210',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/88d9f44437e993a3b052fb5f1778f729',
    },

    {
        name: 'Son Thỏi Lì Merzy Another Me The First Lipstick 3.5g',
        price: "150,000đ",
        quatity: 'Đã bán 220',
        type: 'Son thỏi',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/a882e9a4d93fa4cd5187decbd1969a4d',
    },

    {
        name: 'Son Kem Lì Bbia Last Velvet Lip Tint 5g',
        price: "150,000đ",
        quatity: 'Đã bán 250',
        type: 'Son tint',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/1c0ac4b7032c5e623fd0766fa68ee997',
    },

    {
        name: 'Son Tint Bóng Bbia Glow Lip Tint 3.2g',
        price: "159,000đ",
        quatity: 'Đã bán 220',
        type: 'Son tint',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/e74d11ac735194b3144c3f617996a73c',
    },

    {
        name: 'Son Thỏi Lì Bbia Last Powder Lipstick (6 màu) 3.5g',
        price: "160,000đ",
        quatity: 'Đã bán 225',
        type: 'Son thỏi',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/f88c02fbc74e8d87ffe6cdab07ac9f4a',
    },

    {
        name: 'Son Kem Lì Bbia Never Die Tint 4.8g ',
        price: "199,000đ",
        quatity: 'Đã bán 226',
        type: 'Son tint',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/4314c4484acc95f69debc070bd986619',
    },

    {
        name: 'Son Kem Black Rouge Air Fit Velvet Tint 6.6g',
        price: "298,000đ",
        quatity: 'Đã bán 228',
        type: 'Son tint',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: 'Son Kem Black Rouge Air Fit Velvet Tint 6,7g',
        price: "299,000đ",
        quatity: 'Đã bán 229',
        type: 'Son tint',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: 'Son Tint Black Rouge Drip Hot Water Tint 5.7g',
        price: "279,000đ",
        quatity: 'Đã bán 229',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: 'Son kem Black Rouge Cream Matt Rouge 6.5g',
        price: "269,000đ",
        quatity: 'Đã bán 222',
        type: 'Son tint',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: 'Son Mac LUSTREGLASS SHEER-SHINE LIPSTICK',
        price: "499,000đ",
        quatity: 'Đã bán 250',
        type: 'Son thỏi',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: 'Son Mac Powder Kiss Lipstick 3g',
        price: "259,000đ",
        quatity: 'Đã bán 230',
        type: 'Son thỏi',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: 'Son Mac Powder Liquid Lipstick 5ml',
        price: "219,000đ",
        quatity: 'Đã bán 235',
        type: 'Son tint',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },

    {
        name: 'Son MAC Powder Kiss Matte - Retro Matte Lipstick',
        price: "150,000đ",
        quatity: 'Đã bán 220',
        type: 'Son tint',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
    },
]

const productCards = document.querySelector('.product-card');

// Render danh sách card
function renderCard(arr) {
    // xóa hết DL trước khi render
    productCards.innerHTML = "";

    // Kiểm tra trường hợp không có DL nào trong danh sách
    if (arr.length == 0) {
        productCards.innerHTML = "Không có sản phẩm nào trong danh sách";
        return;
    }
    // khi có công việc thì render, sử dụng vòng lặp
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        html += `

        <div class="row product-card">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card-item">
                    <div class="image">
                        <img src="${t.image}" alt="${t.name}" />
                                        </div>
            
                <div class="card-content shadow rounded-bottom">
                     <p>${t.name}</p>
            
                    <div class="info">
                        <p class="price">${t.price}</</p>
                        <p class="sold">${t.quatity}</p>
                    </div>
            
                    <div class="pb-3 buy-now">
                        <i class="bi bi-bag-plus"></i>
                        <a href="./detail-product.html"><p>Chi tiết sản phẩm</p></a>
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

renderCard(products);
    
