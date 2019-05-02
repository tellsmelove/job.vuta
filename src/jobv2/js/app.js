import Vue from 'vue';
import formAdd from './vue/formAdd.vue';
import vAddContent from "./vue/vAddContent.vue";

var prevScrollpos = window.pageYOffset;
var header = document.querySelector('#header');
var sub_menu = document.getElementById('sub-menu');
var toggle_menu = document.getElementById('toggle');
var overlay = document.getElementById('overlay');
$(document).ready(() => {
    require('./make_tag');
    require('./filters');
    
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        let navbar = document.getElementById('navbar');
        outSideClick(navbar);
        if (prevScrollpos >= currentScrollPos && window.pageYOffset !== 0) {
            header.classList.add('affix')
            header.classList.remove('hidden')
        } else {
            header.classList.remove('affix')
            header.classList.remove('hidden')
        }
        if (window.pageYOffset == 0) {
            header.classList.remove('affix')
            header.classList.add('hidden')
        }
        prevScrollpos = currentScrollPos;
    }
    if(toggle_menu){
        $('#toggle').click((e) => {
            e.preventDefault();
            let navbar = document.getElementById('navbar');
            let height = header.clientHeight;
            let classList = navbar.classList;
            if (classList.contains('active')) {
                outSideClick(navbar)
            } else {
                if (window.innerWidth > 767) {
                    navbar.style.height = `calc(100vh - ${height}px - ${sub_menu.clientHeight}px)`;
                } else {
                    navbar.style.height = `calc(100vh - ${height}px)`;
                }
                navbar.style.top = `${height}px`;
                navbar.classList.add('active')
                overlay.classList.add('active');
                overlay.style.top = `${height}px`;
                overlay.style.height = `calc(100vh - ${height}px)`;
            }

        })
    }
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
        let swiper_item = swiper.querySelectorAll('.swiper-slide');
        if (swiper_item.length >= 2){
            new Swiper(swiper.dataset.swiper, {
                slidesPerView: 3,
                direction: 'vertical',
                simulateTouch: false,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        direction: 'horizontal',
                        simulateTouch: true,
                        autoplay: {
                            delay: 5000,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
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
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        direction: 'vertical',
                        simulateTouch: false,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        direction: 'vertical',
                        simulateTouch: false,
                    },
                }
            });
        }
        else (
            swiper.querySelector('.swiper-wrapper').classList.add('flex-column')
        )
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
$(function () {
    $('#popup, #popup2').popover('enable')
})


var app = new Vue({
    components: {
        formAdd,
        vAddContent
    },
}).$mount("#app");

const mulSlc = $('#keep-order')
if (mulSlc && mulSlc.length !== 0){
    $(mulSlc).multiSelect({ keepOrder: true });
}