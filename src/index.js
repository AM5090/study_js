
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import dataSrc from './modules/dataSrc';
import calculet from './modules/calculet';
import sandForm from './modules/sandForm';



//таймер
countTimer('22 january 2021');
//меню
toggleMenu();
//поп-ап окно
togglePopup();
// табы
tabs();
//добавляем точки на слайдер
addDots();
// слайдер
slider();
// смена фото по дата атрибуту
dataSrc();
// калькулятор
calculet(100);
// работа с формами черз AJAX
sandForm();
