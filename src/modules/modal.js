// Модальное окно
// eslint-disable-next-line no-unused-vars
const modal = () => {

    const modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');

    document.addEventListener('click', event => {

        const target = event.target;

        if (target.closest('.callback-btn')) {
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
        }

        if (target.closest('.modal-close') || target.closest('.modal-overlay')) {
            modalOverlay.style.display = 'none';
            modalCallback.style.display = 'none';
        }
    });

};

export default modal;
