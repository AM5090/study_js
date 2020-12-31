// eslint-disable-next-line no-unused-vars
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
        const messageMask = /[^А-Яа-яЁё\s\d\.\,\!\:\?]/;
        //const emailMask = /[^a-z]/i;

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
                    itemValid.setAttribute('pattern', '[\\w-]+@[\\w-]+\\.\\w{2,3}');
                }
            });
        }
    };

    validData();

    const formClear = formElem => {
        formElem.forEach(item => {
            if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                item.value = '';
            }
        });
    };

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
        postData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                formClear(formInput);
            })
            .catch(error => {
                console.error(error);
                statusMessage.textContent = errorMessage;
                formClear(formInput);
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
        postData(bodyEnd)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                formClear(formInputEnd);
            }).catch(error => {
                console.error(error);
                statusMessage.textContent = errorMessage;
                formClear(formInputEnd);
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
        postData(bodyPopUp)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                formClear(formInputPopUp);
            }).catch(error => {
                console.error(error);
                statusMessage.textContent = errorMessage;
                formClear(formInputPopUp);
            });
    });


    const postData = function(body) {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

};

export default sandForm;
