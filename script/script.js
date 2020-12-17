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
            menu = document.querySelector('menu'),
            menuItems = menu.querySelectorAll('a');

        //открытие и закрытие меню
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', event => {
            let target = event.target;
            menuItems.forEach(elem => {
                if (elem === target) {
                    target = target.closest('.active-menu');
                    if (target) {
                        handlerMenu();
                    }
                }
            });
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
});

