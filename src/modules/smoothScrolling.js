// Плавный скролл
const smoothScrolling = () => {

    const up = document.querySelector('.up'),
        servSection = document.querySelector('.services-section');

    let scrollDoc = document.documentElement.scrollTop;
    if (scrollDoc < servSection.offsetTop - 300) {
        up.style.display = 'none';
    }

    document.addEventListener('scroll', () => {
        scrollDoc = document.documentElement.scrollTop;
        if (scrollDoc < servSection.offsetTop - 300) {
            up.style.display = 'none';
        } else {
            up.style.display = 'block';
        }
    });

    up.addEventListener('click', () => {
        let interval = 0;
        scrollDoc = document.documentElement.scrollTop;

        const scroll = () => {
            interval = requestAnimationFrame(scroll, 1);
            if (document.documentElement.scrollTop >= 200) {
                scrollDoc -= 40;
                document.documentElement.scrollTop = scrollDoc;
            } else if (document.documentElement.scrollTop <= 200) {
                scrollDoc -= 10;
                document.documentElement.scrollTop = scrollDoc;
                if (scrollDoc <= 0) {
                    cancelAnimationFrame(interval);
                }
            }
        };
        interval = requestAnimationFrame(scroll, 1);
    });
};

export default smoothScrolling;
