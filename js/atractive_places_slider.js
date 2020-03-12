var swiper = new Swiper('#swiper_popular_attractions_locations .swiper_popular_attractions_locations_bottom .swiper-container', {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});