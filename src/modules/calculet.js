// eslint-disable-next-line no-unused-vars
const calculet = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');

    // eslint-disable-next-line no-unused-vars
    let interval;

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1,
            count = 0;


        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;


        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        const anmtCulc = () => {

            interval = requestAnimationFrame(anmtCulc, 1);

            if (total < 1000) {
                count += 100;
            } else if (total < 5000) {
                count += 700;
            } else if (total < 10000) {
                count += 2000;
            } else {
                count += 5000;
            }

            if (count < total) {
                totalValue.textContent = count;
            } else {
                totalValue.textContent = Math.floor(total);
                cancelAnimationFrame(interval);
            }

        };

        interval = requestAnimationFrame(anmtCulc, 1);

    };


    calcBlock.addEventListener('input', event => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            cancelAnimationFrame(interval);
            if (target.matches('input')) {
                target.value = target.value.replace(/\D/g, '');
            }

            if (target.value === '0' || target.value === '') {
                totalValue.textContent = 0;
                clearInterval(interval);
            } else {
                countSum();
            }
        }
    });

};

export default calculet;
