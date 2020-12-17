window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';
    //таймер
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');



        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        let idInterval = 0;

        function updateClock() {
            const timer = getTimeRemaining();

            if (timer.timeRemaining > 0) {
                timerHours.textContent = timer.hours > 9 ? timer.hours : '0' + timer.hours;
                timerMinutes.textContent = timer.minutes > 9 ? timer.minutes : '0' + timer.minutes;
                timerSeconds.textContent = timer.seconds > 9 ? timer.seconds : '0' + timer.seconds;
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(idInterval);
            }
        }

        updateClock();
        idInterval = setInterval(updateClock, 1000);
    }

    countTimer('19 december 2020');

    //меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu');

        //открытие и закрытие меню
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
      /*  
       document.addEventListener('click', event => {
            const target = event.target;
            console.log(target);

            console.log(target.closest('div>.menu'));
            if (target.closest('div>.menu')) {

                handlerMenu();
            }

            if (!menu.classList.contains('.active-menu')) {
                if (!target.closest('.active-menu')) {
                    menu.classList.remove('active-menu');
                }
            }

            if (target.closest('ul>li>a, .close-btn')) {
                handlerMenu();
            }
       });
*/
       
        menu.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('ul>li>a') || target.matches('.close-btn')) {
                handlerMenu();
            }
        });
        

    };
    toggleMenu();

    //поп-ап окно
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

    togglePopup();

    // табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
    };

    tabs();

    //добавляем точки на слайдер
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

    addDots();

    // слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            //    btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');


        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => { // функция убирает класс для сокрытия слайда
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => { // функция присваивает класс для отображения слайда
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };

    slider();

});

