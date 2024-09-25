const openModalBtns = document.querySelectorAll("[data-action='modal'");

const modal = document.querySelector(".modal"); // Модальное окно
const closeModalBtn = document.querySelector("#closeModal"); // Кнопка закрытия модального окна
const modalBody = document.querySelector(".modal__body"); // Контент модального окна

openModalBtns.forEach(function(item) {
    item.addEventListener("click", function() {
        modal.classList.add("modal--open");
        document.body.classList.add("no-scroll");
    })
})

closeModalBtn.addEventListener('click', function() {
    modal.classList.remove("modal--open");
    document.body.classList.remove("no-scroll");
})

// Закрытие модалки по оверлею

modal.addEventListener('click', function() {
    modal.classList.remove("modal--open");
    document.body.classList.remove("no-scroll");
})

modalBody.addEventListener('click', function(event) {
    event.stopPropagation();
})