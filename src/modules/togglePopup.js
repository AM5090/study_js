// eslint-disable-next-line no-unused-vars
const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    //анимация поп-ап окна
    let count = -400;
    let interval;
    const popupAnimate = () => {
        if (screen.width > 768) {
            interval = requestAnimationFrame(popupAnimate);
            count += 8;

            popupContent.style.top = count + 'px';
            if (popupContent.style.top === 200 + 'px') {
                cancelAnimationFrame(interval);
                count = -400;
            }
        } else {
            cancelAnimationFrame(interval);
            popup.style.display = 'block';
        }
    };

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            interval = requestAnimationFrame(popupAnimate);
            popup.style.display = 'block';
        });
    });

    popup.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};

export default togglePopup;
