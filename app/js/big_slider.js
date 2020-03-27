var swiper = new Swiper('.swiper-container.bigslider', {
    autoplay: {
        delay: 1000,
    },
    speed: 1000,
    effect: 'fade',
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});