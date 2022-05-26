
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
    },

    modules: [Navigation, Pagination],

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

});

// go to top
const goTop = document.querySelector('.go-to-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        goTop.style.visibility = 'unset'
    } else {
        goTop.style.visibility = 'hidden'
    }

})

goTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

