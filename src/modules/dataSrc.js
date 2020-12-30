// eslint-disable-next-line no-unused-vars
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

export default dataSrc;
