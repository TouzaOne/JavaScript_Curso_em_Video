var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);

timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if(difference <= 0) {
        clearInterval(timer);
    } else {
        
    }
}