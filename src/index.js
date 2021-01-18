
import modalTemplate from './modules/modalTemplate';
import scrollContent from './modules/scrollContent';
import slider from './modules/slider';
import scrollServices from './modules/scrollServices';
import accordeon from './modules/accordeon';



// Модальное окно
modalTemplate('.callback-btn');

// Скролл услуг
scrollServices(modalTemplate);

// Скролл страницы
scrollContent();

// Слайдер
slider();

// Аккордеон
accordeon();
