const modalBtns = document.querySelectorAll('[data-modal-button');
const modalCloseBtns = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]')
// Кнопки открыть модалку
modalBtns.forEach(function(item) {
    item.addEventListener('click', function() {
        const modalId = this.dataset.modalButton;

        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
        modal.querySelector('.modal-window').addEventListener('click', function(e) {
            e.stopPropagation();
        })
    })
})

// Кнопки закрыть модалку
modalCloseBtns.forEach(function(item) {
    item.addEventListener('click', function() {
        const curModal = this.closest('[data-modal]');
        curModal.classList.add('hidden');


    })
})

// ЗАкрытие по фейду
allModals.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.add('hidden');
    })
})