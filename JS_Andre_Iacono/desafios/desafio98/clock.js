function clock() {

    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';

    h = h<10 ?

} var inter = setInterval(clock, 400);