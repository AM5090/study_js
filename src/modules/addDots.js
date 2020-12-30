// eslint-disable-next-line no-unused-vars
const addDots = () => {
    const portfolioDots = document.querySelector('.portfolio-dots'),
        slide = document.querySelectorAll('.portfolio-item');

    for (let i = 0; i < slide.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');
        portfolioDots.append(li);
    }
    portfolioDots.firstChild.classList.add('dot-active');

};

export default addDots;
