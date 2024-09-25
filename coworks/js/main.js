/* Tiny Slider */

const slider = tns({
    container: '.slider',
    
    items: 2.7,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    // loop: false,

    autoWidth: true,
    lazyload: true,
    swipeAngle: false,

    controlsContainer: '.locations__controls',
    nav: false,
});

// Находим кнопки моб навигации
const prevMobile = document.querySelector(".locations__controls--mobile .prev");
const nextMobile = document.querySelector(".locations__controls--mobile .next");
// привязываем события
prevMobile.onclick = function() {
    slider.goTo('prev');
}

nextMobile.onclick = function() {
    slider.goTo('next');
}