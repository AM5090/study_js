// Плавный скролл

const smoothScrolling = () => {

    const up = document.querySelector('.up'),
        servSectionPosition = document.querySelector('.services-section').getBoundingClientRect();

    console.log(servSectionPosition);

    const upPositionFunc = () => {
        const upPosition = up.getBoundingClientRect();
        console.log(upPosition.top);
        if (upPosition.top >= servSectionPosition.top) {
            up.style.display = 'none';
        }

    };

    up.addEventListener('click', () => {

        let docScroll = document.documentElement.scrollTop;
        let interval = 0;
        const startPoin = document.documentElement.scrollTop - 100;

        const scroll = () => {
            interval = requestAnimationFrame(scroll, 1);
            upPositionFunc();
            if (document.documentElement.scrollTop > startPoin - 100) {
                docScroll -= 30;
                document.documentElement.scrollTop = docScroll;
            } else if (document.documentElement.scrollTop > 100) {
                docScroll -= 50;
                document.documentElement.scrollTop = docScroll;
            } else {
                docScroll -= 20;
                document.documentElement.scrollTop = docScroll;
                if (docScroll <= 0) {
                    document.documentElement.scrollTop = 0;
                    cancelAnimationFrame(interval);
                }
            }
        };

        interval = requestAnimationFrame(scroll, 1);

    });
};

export default smoothScrolling;
