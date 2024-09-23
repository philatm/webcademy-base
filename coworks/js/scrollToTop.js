const scrollBtn = document.querySelector('#scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight) {
        scrollBtn.classList.add("top-link--visible");
    } else {
        scrollBtn.classList.remove   ("top-link--visible");
    };
})