// Скролл страницы
// eslint-disable-next-line no-unused-vars
const scrollContent = () => {
    const servicesSection = document.querySelector('.services-section'),
        accordeonSection = document.querySelector('.accordeon-section'),
        contactsSection = document.querySelector('.contacts-section'),
        //up = document.querySelector('.up'),
        topMenu = document.querySelector('.top-menu'),
        allScrollTag = topMenu.querySelectorAll('ul>li>a');

    const servicesSectionTop = servicesSection.getBoundingClientRect(),
        accordeonSectionTop = accordeonSection.getBoundingClientRect(),
        contactsSectionTop = contactsSection.getBoundingClientRect();

    allScrollTag.forEach(item => {
        item.setAttribute('href', '#');
    });

    allScrollTag[0].addEventListener('click', event => {
        event.preventDefault();
        document.documentElement.scrollTop = servicesSectionTop.top - 30;
    });

    allScrollTag[1].addEventListener('click', event => {
        event.preventDefault();
        document.documentElement.scrollTop = accordeonSectionTop.top - 50;
    });

    allScrollTag[2].addEventListener('click', event => {
        event.preventDefault();
        document.documentElement.scrollTop = contactsSectionTop.top - 100;
    });

    /*
    up.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });*/
};

export default scrollContent;
