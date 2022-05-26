const imgSmall = document.querySelectorAll('.img-small img');
const imgBig = document.querySelector('.img-big img');

imgSmall.forEach(function (imgItem, x) {
    imgItem.addEventListener('click', function () {
        imgBig.src = imgItem.src;
    })
})

let products = [
    {
        name: 'Son Kem Lì Merzy The Heritage Velvet Tint 4.5g',
        price: "149,000đ",
        quantity: 'Đã bán 220',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/028bbfc307e8e36617ae05782c750cf6',
        id: 8809510682690,
    },

    {
        name: ' Son Kem Lì Merzy Soft Touch Lip Tint 3g',
        price: "139,000đ",
        quantity: 'Đã bán 200',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/5bd96582e56c8d9ffd149388854f44b2',
        id: 8809510682691,
    },

    {
        name: 'Son kem lì Merzy Dreamy Late Night Mellow Tint 4g',
        price: "159,000đ",
        quantity: 'Đã bán 190',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/8d3bd13c9c23b0ed2f7d890f1de1bf17',
        id: 8809510682692,
    },

    {
        name: 'Son Kem Lì Merzy The First Velvet Tint 4.5g',
        price: "129,000đ",
        quantity: 'Đã bán 210',
        type: 'Son tint',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/88d9f44437e993a3b052fb5f1778f729',
        id: 8809510682693,
    },

    {
        name: 'Son Thỏi Lì Merzy Another Me The First Lipstick 3.5g',
        price: "150,000đ",
        quantity: 'Đã bán 220',
        type: 'Son thỏi',
        brand: 'Merzy',
        image: 'https://cf.shopee.vn/file/a882e9a4d93fa4cd5187decbd1969a4d',
        id: 8809510682694,
    },

    {
        name: 'Son Kem Lì Bbia Last Velvet Lip Tint 5g',
        price: "150,000đ",
        quantity: 'Đã bán 250',
        type: 'Son tint',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/1c0ac4b7032c5e623fd0766fa68ee997',
        id: 8809510682695,
    },

    {
        name: 'Son Tint Bóng Bbia Glow Lip Tint 3.2g',
        price: "159,000đ",
        quantity: 'Đã bán 220',
        type: 'Son tint',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/e74d11ac735194b3144c3f617996a73c',
        id: 8809510682696,
    },

    {
        name: 'Son Thỏi Lì Bbia Last Powder Lipstick (6 màu) 3.5g',
        price: "160,000đ",
        quantity: 'Đã bán 225',
        type: 'Son thỏi',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/f88c02fbc74e8d87ffe6cdab07ac9f4a',
        id: 8809510682697
    },

    {
        name: 'Son Kem Lì Bbia Never Die Tint 4.8g ',
        price: "199,000đ",
        quantity: 'Đã bán 226',
        type: 'Son tint',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/4314c4484acc95f69debc070bd986619',
        id: 8809510682698,
    },

    {
        name: 'Son Thỏi Lì Bbia Last Lipstick 3.5g',
        price: "198,000đ",
        quantity: 'Đã bán 236',
        type: 'Son thỏi',
        brand: 'Bbia',
        image: 'https://cf.shopee.vn/file/c32b17c7761759df264109ee2f98c77e',
        id: 8809510682699,
    },

    {
        name: 'Son Kem Black Rouge Air Fit Velvet Tint 6.6g',
        price: "298,000đ",
        quantity: 'Đã bán 228',
        type: 'Son tint',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/7ed245816b1fbc3cd0c0dc3a473fe843',
        id: 8809510682700,
    },

    {
        name: 'Son Black Rouge Mara Hot Water Tint LV04 45.2g',
        price: "299,000đ",
        quantity: 'Đã bán 229',
        type: 'Son tint',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/78a2ba609137b73b176a76e6ac861245',
        id: 8809510682701,
    },

    {
        name: 'Son Black Rouge Rose Velvet Lipstick 4.5g',
        price: "279,000đ",
        quantity: 'Đã bán 229',
        type: 'Son thỏi',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/11c180c721eea9f03a9aee333664de88_tn',
        id: 8809510682702,
    },

    {
        name: 'Son kem Black Rouge Cream Matt Rouge 6.5g',
        price: "269,000đ",
        quantity: 'Đã bán 222',
        type: 'Son tint',
        brand: 'Black rouge',
        image: 'https://cf.shopee.vn/file/6386a43d62223fddbd8867ca6112fcb1',
        id: 8809510682703,
    },

    {
        name: 'MAC Frosted Bullet Lipstick New shades',
        price: "499,000đ",
        quantity: 'Đã bán 250',
        type: 'Son thỏi',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/a92e36526107541cc8184f6435d2e566',
        id: 8809510682704,
    },

    {
        name: 'Son Mac Powder Kiss Lipstick 3g',
        price: "259,000đ",
        quantity: 'Đã bán 230',
        type: 'Son thỏi',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/15200c0205a05bacb27189700d41580f',
        id: 8809510682705,
    },

    {
        name: 'Son Mac Powder Liquid Lipstick 5ml',
        price: "219,000đ",
        quantity: 'Đã bán 235',
        type: 'Son tint',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/d493c0ff83186b83ca9214f1603c4639',
        id: 8809510682706,
    },

    {
        name: 'Son MAC Powder Kiss Matte - Retro Matte Lipstick',
        price: "350,000đ",
        quantity: 'Đã bán 220',
        type: 'Son tint',
        brand: 'MAC',
        image: 'https://cf.shopee.vn/file/db6620dfc0c3b64f62aa8209bf1be164',
        id: 8809510682707,
    },
]

// const colorItem = document.querySelectorAll('.option-color span');
// for (let i = 0; i < colorItem.length; i++) {
//     colorItem[i].addEventListener('click', function () {
//         const colorItemInput = 
//     })
// }

const btnSubtract = document.querySelector('.btn-subtract');
const btnAdd = document.querySelector('.btn-add')
const quantityEl = document.querySelector('.option-quantity p');
let quantityText = Number(quantityEl.innerText);

btnSubtract.addEventListener('click', function() {
    if (quantityText != 0) {
        quantityText--;
    quantityEl.innerText = quantityText;
    }
})

btnAdd.addEventListener('click', function() {
    quantityText++;
    quantityEl.innerText = quantityText;
})

// Thông tin
const descriptionEl = document.querySelector('.title-description');
const usageEl = document.querySelector('.title-usage');
const colorEl = document.querySelector('.title-color');
const storageEl = document.querySelector('.title-storage');

if (descriptionEl) {
    descriptionEl.addEventListener('click', function() {
        document.querySelector('.description').style.display = 'block';
        document.querySelector('.color').style.display = 'none';
        document.querySelector('.usage').style.display = 'none';
        document.querySelector('.storage').style.display = 'none';
        descriptionEl.style.borderBottom = "3px solid rgba(138, 27, 27, 1)";
        usageEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        colorEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        storageEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)"

    })
}

if (usageEl) {
    usageEl.addEventListener('click', function() {
        document.querySelector('.description').style.display = 'none';
        document.querySelector('.color').style.display = 'none';
        document.querySelector('.usage').style.display = 'block';
        document.querySelector('.storage').style.display = 'none';
        usageEl.style.borderBottom = "3px solid rgba(138, 27, 27, 1)";
        descriptionEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        colorEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        storageEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";

    })
}

if (colorEl) {
    colorEl.addEventListener('click', function() {
        document.querySelector('.description').style.display = 'none';
        document.querySelector('.color').style.display = 'block';
        document.querySelector('.usage').style.display = 'none';
        document.querySelector('.storage').style.display = 'none';
        colorEl.style.borderBottom = "3px solid rgba(138, 27, 27, 1)";
        descriptionEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        usageEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        storageEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
    })
}

if (storageEl) {
    storageEl.addEventListener('click', function() {
        document.querySelector('.description').style.display = 'none';
        document.querySelector('.color').style.display = 'none';
        document.querySelector('.usage').style.display = 'none';
        document.querySelector('.storage').style.display = 'block';
        storageEl.style.borderBottom = "3px solid rgba(138, 27, 27, 1)";
        descriptionEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        usageEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
        colorEl.style.borderBottom = "1.5px solid rgba(138, 27, 27, 0.3)";
    })
}


const addCartBtn = document.querySelector('.info-item > button');
addCartBtn.addEventListener('click', function(){
    alert('Thêm sản phẩm vào giỏ hàng thành công');
})