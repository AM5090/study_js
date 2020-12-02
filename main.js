'use strict';

const adv = document.querySelector('.adv');
const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const book3 = books[4].querySelector('h2> a');
const book2 = books[0].querySelectorAll('li');
const book5 = books[5].querySelectorAll('li');
const book6Ul = books[2].querySelector('ul');
const book6 = books[2].querySelectorAll('li');
const li = document.createElement('li');

//удаление рекламы
adv.remove();

//востановление порядка книг
books[1].after(books[0]);
books[3].before(books[4]);
books[5].after(books[2]);

//замена картинки заднего фона
body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

//правильный заголовок в книге 3
book3.textContent = 'Книга 3. this и Прототипы Объектов';

//порядок заголовков в книге 2
book2[9].after(book2[2]);
book2[9].before(book2[7]);
book2[3].after(book2[8]);
book2[3].after(book2[6]);

//порядок заголовков в книге 5
book5[8].before(book5[5]);
book5[3].before(book5[9]);
book5[6].before(book5[2]);

//новая глава в 6 книге
li.textContent = 'Глава 8: За пределами ES6';
book6Ul.append(li);
book6Ul.append(book6[9]);