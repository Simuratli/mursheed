var swiper = new Swiper('.bigslider.swiper-container ', {
    autoplay: {
        delay: 3000,
    },
    spead: 3000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    controller: {
        inverse: true,
    },
});