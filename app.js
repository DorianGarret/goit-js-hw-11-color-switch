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

btnStart.addEventListener('click', checkDisabledBtn);
btnStop.addEventListener('click', checkDisabledBtn);

function checkDisabledBtn(event) {
    if (event.target.dataset.action === 'start') {
        btnStop.disabled = false;
        btnStart.disabled = true;
        return;
    }
    if (event.target.dataset.action === 'stop') {
        btnStop.disabled = true;
        btnStart.disabled = false;
        return;
    }
}
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
