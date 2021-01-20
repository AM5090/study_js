// AJAX запрос

const request = () => {

    // получаем форму со страницы
    const modalCallback = document.querySelector('.modal-callback'),
        formCallback = modalCallback.querySelector('form'),
        button = modalCallback.querySelector('.button'),
        formInput = formCallback.querySelectorAll('input');

    const loadRequest = 'Идет отправка...',
        okRequest = 'Отправлено!',
        errorRequest = 'Ошибка!';

    const div = document.createElement('div');
    div.style.cssText = 'font-size: 20px;';

    // валидация текстовых полей
    const inputValidation = () => {
        const nameMask = /[^А-Яа-яЁё\s]/;
        const phoneMask = /[^0-9+]/;

        formInput.forEach(item => {
            if (item.name === 'fio' || item.name === 'tel') {
                item.setAttribute('required', '');
                valid(item);
            }
        });

        function valid(itemValid) {
            itemValid.addEventListener('input', () => {
                if (itemValid.name === 'fio') {
                    itemValid.value = itemValid.value.replace(nameMask, '');
                    itemValid.setAttribute('pattern', '[А-Яа-яЁё\\s]{2,50}');
                    itemValid.setAttribute('title', "Введите от 2 до 50 букв");
                } else if (itemValid.name === 'tel') {
                    itemValid.value = itemValid.value.replace(phoneMask, '');
                    itemValid.setAttribute('pattern', "[+0-9]{12,}");
                    itemValid.setAttribute('title', "Введите не менее 11 цифр номера телефона и знак +");
                }
            });
        }
    };

    inputValidation();

    const formClear = () => {
        for (const item of formInput) {
            if (item.type === 'text') {
                item.value = '';
            }
        }
        setTimeout(() => div.textContent = '', 4000);
    };

    // по клику получаем данные из формы и передаем через fetch
    formCallback.addEventListener('submit', event => {
        event.preventDefault();
        button.parentElement.before(div);
        div.textContent = loadRequest;
        const formData = new FormData(formCallback);
        const body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        // eslint-disable-next-line no-use-before-define
        requestData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Статус сети не равен 200');
                }
                div.textContent = okRequest;
                formClear();
            })
            .catch(error => {
                console.error(error);
                div.textContent = errorRequest;
                formClear();
            });
    });

    const requestData = function(body) {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };


};

export default request;
