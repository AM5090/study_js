// eslint-disable-next-line no-unused-vars
const toggleMenu = () => {

    const menu = document.querySelector('menu');

    //открытие и закрытие меню
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.closest("div.menu")) {
            handlerMenu();
        } else if (!target.matches("menu.active-menu") && !target.matches('ul>li')) {
            menu.classList.remove('active-menu');
        }
    });

};

export default toggleMenu;
