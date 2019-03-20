var prevScrollpos = window.pageYOffset;
var header = document.querySelector('#header');
var sub_menu = document.getElementById('sub-menu');
var toggle_menu = document.getElementById('toggle');
var overlay = document.getElementById('overlay');
$(document).ready(() => {
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        let navbar = document.getElementById('navbar');
        outSideClick(navbar);
        if (prevScrollpos >= currentScrollPos && window.pageYOffset !== 0) {
            header.classList.add('affix')
            header.classList.remove('hidden')
            // navbar.classList.add('menu_left')
        } else {
            header.classList.remove('affix')
            header.classList.remove('hidden')
        }
        if (window.pageYOffset == 0) {
            header.classList.remove('affix')
            header.classList.add('hidden')
            // navbar.classList.remove('menu_left')
        }
        prevScrollpos = currentScrollPos;
    }
    toggle_menu.addEventListener('click', (e) => {
        e.preventDefault();
        let navbar = document.getElementById('navbar');
        let height = header.clientHeight;
        let classList = navbar.classList;
        if (classList.contains('active')){
            outSideClick(navbar)
        }else{
            navbar.style.height = `calc(100vh - ${height}px - ${sub_menu.clientHeight}px)`;
            navbar.style.top = `${height}px`;
            navbar.classList.add('active')
            overlay.classList.add('active');
            overlay.style.top = `${height}px`;
            overlay.style.height = `calc(100vh - ${height}px)`;
        }
               
    })
    overlay.addEventListener('click', () => {
        let navbar = document.getElementById('navbar');
        outSideClick(navbar)
    })
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
})
function outSideClick(target){
    target.classList.remove('active')
    overlay.classList.remove('active')
    setTimeout(() => {
        target.removeAttribute('style')
        overlay.removeAttribute('style')
    }, 200);
}

