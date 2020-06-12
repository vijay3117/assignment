var time = 1;
var seconds = time;
function timer() {
    var days = Math.floor(seconds / 24 / 60 / 60);
    var hoursLeft = Math.floor((seconds) - (days * 86400));
    var hours = Math.floor(hoursLeft / 3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
    var minutes = Math.floor(minutesLeft / 60);
    var remainingSeconds = seconds % 60;
    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }
    document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
    if (seconds == 0) {
        clearInterval(countdownTimer);
    } else {
        seconds++;
    }
}
var countdownTimer = setInterval('timer()', 1000);

//favourite 
var favouriteElem = document.getElementById('favourite');
favouriteElem.addEventListener('click', function () {
    if (favouriteElem.getAttribute('style') !== 'fill: #ffffff') {
        favouriteElem.setAttribute('style', 'fill: #ffffff');
    } else {
        favouriteElem.setAttribute('style', 'fill: #FFFF00');
    }
});

// Rating 
var ratingElem = document.getElementById('rating-1');
ratingElem.addEventListener('click', function () {
    if (ratingElem.getAttribute('style') !== 'fill: #ffffff') {
        ratingElem.setAttribute('style', 'fill: #ffffff');
    } else {
        ratingElem.setAttribute('style', 'fill: #FFFF00');
    }
});
