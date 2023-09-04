var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);

timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);

