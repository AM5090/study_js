document.addEventListener('DOMContentLoaded', () => {

    // Модальное окно
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

    modal();

    // Скролл страницы
    const scrollContent = () => {
        const servicesSection = document.querySelector('.services-section'),
            accordeonSection = document.querySelector('.accordeon-section'),
            contactsSection = document.querySelector('.contacts-section'),
            up = document.querySelector('.up'),
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

        up.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        });
    };

    scrollContent();

});
