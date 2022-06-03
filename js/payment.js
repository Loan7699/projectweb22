import axios from "axios";

// gọi api quận, phường, xã

// tỉnh
async function getProvince() {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/");
        renderProvince(res.data);
    } catch (error) {
        console.log(error);
    }
}

// truy cập
const provinceEl = document.querySelector('.province');
const districtEl = document.querySelector('.district');
const communeEl = document.querySelector('.commune');

// hiển thị danh sách tỉnh, thành phố
function renderProvince(arr) {
    arr.forEach(ele => {
        provinceEl.innerHTML += `<option value = "${ele.code}">${ele.name}</option>`;
    });
}

provinceEl.addEventListener('change', async function (event) {
    try {
        let provinceCode = event.target.value;

        // gọi Api lấy danh sách huyện tương ứng với provinceCode
        let res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);

        // xóa dữ liệu ô trước khi Render
        districtEl.innerHTML = '';
        renderDistrict(res.data.districts);

    } catch (error) {
        console.log(error);
    }
})

function renderDistrict(arr) {
    for (let i = 0; i < arr.length; i++) {
        let p = arr[i]
        districtEl.innerHTML += `<option value='${p.code}'>${p.name}</option>`;
    }
}


//  Lấy danh sách xã phường

districtEl.addEventListener('change', async function(arr) {
    try {
        let districtCode= districtEl.value;
        
        let res = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
        
        communeEl.innerHTML = '';
        renderCommune(res.data.wards)
    } catch (error) {
        console.log(error);
    }
})

function renderCommune(arr) {
    for (let i = 0; i < arr.length; i++) {
        let p = arr[i]
        communeEl.innerHTML += `<option value='${p.code}'>${p.name}</option>`;
    }
}

getProvince()

// render sp
const productCart = JSON.parse(localStorage.getItem('productCart'));
console.log(productCart);

const detailCart = document.querySelector('.detail-cart');
detailCart.innerHTML = '';
for (let i = 0; i < productCart.length; i++) {
    detailCart.innerHTML += `
<div class="item">
                  <img class="pe-3" src="${productCart[i].img}" alt="item1" />
  
                  <div class="info-item">
                    <p class="me-5 mt-3">
                    ${productCart[i].name}
                    </p>
  
                    <div class="item-quatity">
                    <p>
                    <span>Số lượng x</span>
                    <span class="quantity-product">1</span>
                  </p>
                    </div>
                  </div>
  
                  <p class="mt-3">${productCart[i].price}</p>
                </div>
`
}

// Function convert tiền
function convertMoney(number) {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}


// tổng tiền
function totalMoneyCart() {
    let sum = 0;
    const itemEl = document.querySelectorAll('.item');
    const productCart = JSON.parse(localStorage.getItem('productCart'));

    for (let i = 0; i < productCart.length; i++) {
        const priceItem = productCart[i].price;
        const quantityItem = document.querySelector('.quantity-product');
        sum += Number(quantityItem.innerText) * Number(priceItem) + 15000;
    }

    const sumMoneyEl = document.querySelector('.total span');
    sumMoneyEl.innerText = '';
    sumMoneyEl.innerText = convertMoney(sum);
}
totalMoneyCart()

// đặt hàng

const orderBtn = document.querySelector('.btn > button');
console.log(orderBtn);

orderBtn.addEventListener('click', function (e) {
    // e.preventDefault()
    formValidate()
    if (formValidate()) {
        alert("Cảm ơn bạn đã đặt hàng tại Daisy!")
        window.location.href = "./products.html";
    }
})

function formValidate() {
    let isValid = true
    const name = document.querySelector('.your-name')
    const tel = document.querySelector('.tel')
    const add = document.querySelector('.detail-address')
    const regexNumber=/^[0-9]{10}$/;

    if(name.value.trim() == '') {
        isValid = false
        name.closest('.profile-item').querySelector('.error-message').innerHTML = 'Vui lòng nhập họ tên'
    } else {
        name.closest('.profile-item').querySelector('.error-message').innerHTML = ''
    }

    if(tel.value.trim() == '') {
        isValid = false
        tel.closest('.profile-item').querySelector('.error-message').innerHTML = 'Vui lòng nhập số điện thoại'
    }else if(!regexNumber.test(tel.value)) {
        isValid = false
        tel.closest('.profile-item').querySelector('.error-message').innerHTML = 'Số điện thoại không đúng'
    }else {
        tel.closest('.profile-item').querySelector('.error-message').innerHTML = ''
    }

    if(add.value.trim() == '') {
        isValid = false
        add.closest('.profile-item').querySelector('.error-message').innerHTML = 'Vui lòng nhập địa chỉ'
    }else {
        add.closest('.profile-item').querySelector('.error-message').innerHTML = ''
    }
    if (!isValid) return
    
    return isValid
}
