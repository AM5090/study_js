window.addEventListener('DOMContentLoaded', () => {


    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');



        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        let idInterval = 0;

        function updateClock() {
            const timer = getTimeRemaining();

            if (timer.timeRemaining > 0) {
                timerHours.textContent = timer.hours > 9 ? timer.hours : '0' + timer.hours;
                timerMinutes.textContent = timer.minutes > 9 ? timer.minutes : '0' + timer.minutes;
                timerSeconds.textContent = timer.seconds > 9 ? timer.seconds : '0' + timer.seconds;
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(idInterval);
            }
        }

        idInterval = setInterval(updateClock, 1000);
    }

    countTimer('16 december 2020');
});

