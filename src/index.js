
import modalTemplate from './modules/modalTemplate';
import scrollContent from './modules/scrollContent';
import slider from './modules/slider';
import scrollServices from './modules/scrollServices';
import accordeon from './modules/accordeon';
import smoothScrolling from './modules/smoothScrolling';



// Модальное окно
modalTemplate('.callback-btn');

// Скролл услуг
scrollServices(modalTemplate);

// Скролл страницы
scrollContent();

// Плавный скролл
smoothScrolling();

// Слайдер
slider();

// Аккордеон
accordeon();
