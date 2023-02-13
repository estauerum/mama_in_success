window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})



//при скролле убирает и раздает класс элементу меню

$(window).scroll(function(){
    if ($(window).scrollTop() > 0) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#main').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 1139) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#about-link').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 2000) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#skills-link').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 2250) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#portfolio-link').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 3181) {
        $('.menu__link_active').removeClass('menu__link_active');
        $('#partners-link').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 3650) {
        $('.menu__link_active').removeClass('menu__link_active');
        $('#contacts-link').addClass('menu__link_active');
    }
});



//цвет выбранного элемента меню, убирает и раздает класс

$('.menu a').on("click",function(){
    $('a').removeClass('menu__link_active');
    $(this).addClass('menu__link_active');
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


