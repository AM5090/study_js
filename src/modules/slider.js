// Слайдер
// eslint-disable-next-line no-unused-vars
const slider = () => {

    const items = document.querySelectorAll('.item');

    items.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.position = 'absolute';
        item.style.width = '100%';

        const table = items[i].querySelector('.table');
        table.style.opacity = 1;
        table.style.visibility = 'visible';
    });

    let count = 0;

    setInterval(() => {
        items[count].style.opacity = 1;

        if (count === 0) {
            items[items.length - 1].style.opacity = 0;
        } else if (count > 0) {
            items[count - 1].style.opacity = 0;
        }

        count++;

        if (count === items.length) {
            count = 0;
        }

    }, 3000);
};

export default slider;
