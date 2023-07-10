const currentTime = document.querySelector('h1'),
content = document.querySelector('.content'),
selectMenu = document.querySelectorAll('select'),
setAlarmBtn = document.querySelector('button');

let alarmTime, isAlarmSet,
ringtone = new Audio('./sounds/ringtone.mp3');

