
// hiện filter khi click icon
const filterIcon = document.querySelector('.path i');
const filterContent = document.querySelector('section .filter');
const overlay = document.querySelector('.overlay');

filterIcon.addEventListener('click', function() {
    filterContent.style.display = 'block';
    overlay.style.display = 'block';
})

overlay.addEventListener('click', function() {
    filterContent.style.display = 'none';
    overlay.style.display = 'none';

    window.addEventListener('resize', function() {
        if(window.innerWidth > 768) {
            filterContent.style.display = 'block';
        }
    })
})


// hiện option sắp xếp theo giá
const optionPrice = document.querySelector('.option-price');
const filterPrice = document.querySelector('.arrange-price > p');
const filterPriceIcon = document.querySelector('.arrange-price > i')
const optionPriceItem = document.querySelectorAll('.option-price p');
const btnRemoveFilter = document.querySelector('.remove-filter');

filterPriceIcon.addEventListener('click', function() {
    optionPrice.style.display = 'block';
})

for (let i = 0; i < optionPriceItem.length; i++) {
    optionPriceItem[i].addEventListener('click', function() {
        optionPrice.style.display = 'none';
        filterPrice.innerText = optionPriceItem[i].innerText;
    })
}

btnRemoveFilter.addEventListener('click', function() {
    optionPrice.style.display = 'none';
    filterPrice.innerText = 'Sắp xếp theo giá';
})

