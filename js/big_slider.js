var swiper = new Swiper('.swiper-container.bigslider', {
    autoplay: {
        delay: 3000,
    },
    speed: 3000,
    effect: 'fade',
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,

});