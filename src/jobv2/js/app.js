var person_slider = new Swiper('.swiper-person', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.pagination-person',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        440: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

    }
});

var main_slider = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var post_swiper_index = document.querySelectorAll('[data-swiper]')
console.log([post_swiper_index])
for (let swiper of post_swiper_index) {
    new Swiper(swiper.dataset.swiper, {
        slidesPerView: 3,
        direction: 'vertical',
        simulateTouch: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                direction: 'horizontal',
                simulateTouch: true,
                autoplay: {
                    delay: 5000,
                },
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
                direction: 'horizontal',
                simulateTouch: true,
                autoplay: {
                    delay: 5000,
                },
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
                direction: 'horizontal',
                simulateTouch: true,
                autoplay: {
                    delay: 5000,
                },
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
                direction: 'vertical',
                simulateTouch: false,

            },
        }
    });
}
