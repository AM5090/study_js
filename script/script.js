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

    countTimer('22 december 2020');

    //меню
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

    // смена фото по дата атрибуту
    const dataSrc = () => {
        const commandPhotos = document.querySelectorAll('img.command__photo');

        commandPhotos.forEach(item => {
            item.addEventListener('mouseover', event => {
                const srcValue = event.target.src;
                event.target.src = event.target.dataset.img;
                item.addEventListener('mouseout', event => {
                    event.target.src = srcValue;
                });
            });
        });

    };

    dataSrc();

    // калькулятор
    const calculet = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total');

        // eslint-disable-next-line no-unused-vars
        let interval;

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1,
                count = 0;


            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;


            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            const anmtCulc = () => {

                interval = requestAnimationFrame(anmtCulc, 1);

                if (total < 1000) {
                    count += 100;
                } else if (total < 5000) {
                    count += 700;
                } else if (total < 10000) {
                    count += 900;
                } else {
                    count += 3000;
                }

                if (count < total) {
                    totalValue.textContent = count;
                } else {
                    totalValue.textContent = Math.floor(total);
                    cancelAnimationFrame(interval);
                }

            };

            interval = requestAnimationFrame(anmtCulc, 1);

        };


        calcBlock.addEventListener('input', event => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                cancelAnimationFrame(interval);
                if (target.matches('input')) {
                    target.value = target.value.replace(/\D/g, '');
                }

                if (target.value === '0' || target.value === '') {
                    totalValue.textContent = 0;
                    clearInterval(interval);
                } else {
                    countSum();
                }
            }
        });

    };

    calculet(100);

    // работа с формами черз AJAX
    const sandForm = () => {
        const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.getElementById('form1'),
            formEnd = document.getElementById('form2'),
            formPopUp = document.getElementById('form3');

        const formInput = form.querySelectorAll('input'),
            formInputEnd = formEnd.querySelectorAll('input'),
            formInputPopUp = formPopUp.querySelectorAll('input');




        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        //валидация
        const validData = () => {
            const phoneMask = /[^0-9+]/;
            const nameMask = /[^А-Яа-яЁё\s]/;
            // eslint-disable-next-line no-useless-escape
            const messageMask = /[^А-Яа-яЁё\s\d\.\,\!]/;

            formInput.forEach(item => validation(item));
            formInputEnd.forEach(item => validation(item));
            formInputPopUp.forEach(item => validation(item));

            function validation(itemValid) {
                itemValid.addEventListener('input', () => {
                    if (itemValid.name === 'user_phone') {
                        itemValid.value = itemValid.value.replace(phoneMask, '');
                        itemValid.setAttribute('pattern', "[0-9+]{11,}");
                    } else if (itemValid.name === 'user_name') {
                        itemValid.value = itemValid.value.replace(nameMask, '');
                        itemValid.setAttribute('pattern', '[А-Яа-яЁё\\s]{2,50}');
                    } else if (itemValid.name === 'user_message') {
                        itemValid.value = itemValid.value.replace(messageMask, '');
                    } else if (itemValid.name === 'user_email') {
                        itemValid.value = itemValid.value.replace(/[А-Яа-яЁё]/, '');
                        itemValid.setAttribute('pattern', '\\w+@\\w+\\.\\w{2,3}');
                    }
                });
            }
        };

        validData();

        // отслеживание первой формы
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.append(statusMessage);
            statusMessage.textContent = loadMessage;
            statusMessage.style.cssText = 'color: #fff;';
            const formData = new FormData(form);
            const body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            // eslint-disable-next-line no-use-before-define
            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, error => {
                console.error(error);
                statusMessage.textContent = errorMessage;
            }, () => {
                formInput.forEach(item => {
                    if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                        item.value = '';
                    }
                });
            });
        });

        // отслеживание последней формы
        formEnd.addEventListener('submit', event => {
            event.preventDefault();
            formEnd.append(statusMessage);
            statusMessage.textContent = loadMessage;
            statusMessage.style.cssText = 'color: #fff;';
            const formData = new FormData(formEnd);
            const bodyEnd = {};

            formData.forEach((val, key) => {
                bodyEnd[key] = val;
            });
            // eslint-disable-next-line no-use-before-define
            postData(bodyEnd, () => {
                statusMessage.textContent = successMessage;
            }, error => {
                console.error(error);
                statusMessage.textContent = errorMessage;
            }, () => {
                formInputEnd.forEach(item => {
                    if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                        item.value = '';
                    }
                });
            });
        });


        // отслеживание попап формы
        formPopUp.addEventListener('submit', event => {
            event.preventDefault();
            formPopUp.append(statusMessage);
            statusMessage.textContent = loadMessage;
            statusMessage.style.cssText = 'color: #19b5fe;';
            const formData = new FormData(formPopUp);
            const bodyPopUp = {};

            formData.forEach((val, key) => {
                bodyPopUp[key] = val;
            });
            // eslint-disable-next-line no-use-before-define
            postData(bodyPopUp, () => {
                statusMessage.textContent = successMessage;
            }, error => {
                console.error(error);
                statusMessage.textContent = errorMessage;
            }, () => {
                formInputPopUp.forEach(item => {
                    if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                        item.value = '';
                    }
                });
            });
        });


        const postData = (body, outputData, errorData, formClear) => {

            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                    formClear();
                } else {
                    errorData(request.status);
                    formClear();
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');

            request.send(JSON.stringify(body));
        };

    };

    sandForm();
});

