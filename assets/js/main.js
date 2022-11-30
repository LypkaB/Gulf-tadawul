'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            }
        }
    });
})