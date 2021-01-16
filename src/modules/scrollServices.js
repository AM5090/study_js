// Скролл раздела услуг

const scrollServices = callbackModal => {

    class ScrollServicesClass {
        constructor() {
            this.servicesElements = document.querySelector('.services-elements');
            this.servicesCarousel = document.querySelector('.services-carousel');
            this.divCarousel = document.querySelector('.services-carousel').children;
            this.options = {
                position: 0,
                slidesToShow: 3
            };
            this.prev = document.querySelector('.arrow-left');
            this.next = document.querySelector('.arrow-right');
        }

        init() {
            this.addClass();
            this.addStyle();
            this.controlSlider();
        }

        addClass() {
            this.servicesElements.classList.add('glo-slider');
            this.servicesCarousel.classList.add('glo-slider__wrap');
            for (const item of this.divCarousel) {
                item.classList.add('glo-slider__item');
            }
        }

        addStyle() {
            const style = document.createElement('style');
            style.setAttribute('id', 'scrollServices-style');
            document.head.append(style);

            style.textContent = `
                .glo-slider{
                    overflow: hidden !important;
                }
    
                .glo-slider__wrap{
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                }
    
                .glo-slider__item{
                    flex: 0 0 33% !important;
                    margin: auto 0 !important;
                }
            `;
        }

        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider() {
            if (this.options.position > 0) {
                --this.options.position;
                this.servicesCarousel.style.transform = `translateX(-${this.options.position * 33}%)`;
            }
        }
        nextSlider() {
            if (this.options.position < this.divCarousel.length - this.options.slidesToShow) {
                ++this.options.position;
                this.servicesCarousel.style.transform = `translateX(-${this.options.position * 33}%)`;
            }
        }
    }

    const carousel = new ScrollServicesClass();
    carousel.init();

    // Колбек функция из модуля modalTemplate
    callbackModal('.services-carousel');

};

export default scrollServices;
