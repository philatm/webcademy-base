const mobileNavBtnOpen = document.querySelector("#openMobileNav")
const mobileNavBtnClose = document.querySelector("#closeMobileNav")
const mobileNav = document.querySelector(".mobile-nav")

mobileNavBtnOpen.addEventListener('click', function() {
    mobileNav.classList.add("mobile-nav--open");

    //Убираем скролл
    document.body.classList.add("no-scroll");
})

// Вшеаем прослушку на кнопку закрытия
mobileNavBtnClose.addEventListener('click', function() {
    mobileNav.classList.remove("mobile-nav--open");

    //Убираем скролл
    document.body.classList.remove("no-scroll");
})

/* Закрыть мобильную навигацию по клику по ссылке */

const mobileNavLinks = mobileNav.querySelectorAll('a, button');

mobileNavLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        mobileNav.classList.remove("mobile-nav--open");

        //Убираем скролл
        document.body.classList.remove("no-scroll"); 
    })
})