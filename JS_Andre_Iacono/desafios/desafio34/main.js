const currentTime = document.querySelector('h1'),
content = document.querySelector('.content'),
selectMenu = document.querySelectorAll('select'),
setAlarmBtn = document.querySelector('button');

let alarmTime, isAlarmSet,
ringtone = new Audio('./sounds/ringtone.mp3');

for (let i = 12; i > 0; i--) {
    i = 1 < 10 ? `0${i}` : i;
    let option = `<option value='${i}'>${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
}

