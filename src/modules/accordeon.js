// Аккордеон

const accordeon = () => {

    const accordeonBlock = document.querySelector('.accordeon'),
        accordeonElement = accordeonBlock.querySelectorAll('.element'),
        accordeonContent = accordeonBlock.querySelectorAll('.element-content');

    accordeonBlock.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.title')) {
            for (const item of accordeonElement) {
                item.classList.remove('active');
            }
            for (const item of accordeonContent) {
                item.style.display = 'none';
            }
            target.parentElement.classList.toggle('active');
            target.parentElement.querySelector('.element-content').style.display = 'block';
        }
    });

};

export default accordeon;
