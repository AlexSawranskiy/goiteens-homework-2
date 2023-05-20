

console.log(new Date('feb 28 2023'));

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

const countTimer = {
    start(){
        const targetDate = new Date('june 5 2023');
        setInterval(() => {
            const totalTimeLeft = targetDate - new Date();
            
            const timeComponent = getTimeContent(totalTimeLeft);

            updateCountTimer(timeComponent);
        }, 1000)
    }
}

function getTimeContent(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {days, hours, mins, secs}
}

function updateCountTimer({days, hours, mins, secs}) {
    refs.days.textContent = `${days}`;

    refs.hours.textContent = hours;

    refs.hours.textContent = mins;

    refs.secs.textContent = secs;
}

countTimer.start()
