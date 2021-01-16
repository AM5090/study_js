// Модальное окно
const modalTemplate = openModal => {

    const modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');

    document.addEventListener('click', event => {

        const target = event.target;

        if (target.closest(openModal)) {
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
        }

        if (target.closest('.modal-close') || target.closest('.modal-overlay')) {
            modalOverlay.style.display = 'none';
            modalCallback.style.display = 'none';
        }
    });

};

export default modalTemplate;
