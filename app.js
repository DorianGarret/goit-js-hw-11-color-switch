const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
};
const { btnStart, btnStop } = refs;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

btnStop.disabled = true;

btnStart.addEventListener('click', onStartBtnClick);
btnStop.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorChange = null;

function onStartBtnClick() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    colorChange = setInterval(() => {
        document.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
}

function onStopBtnClick() {
    clearInterval(colorChange);
    btnStop.disabled = true;
    btnStart.disabled = false;
}
