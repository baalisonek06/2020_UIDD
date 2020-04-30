var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 3;

countdownNumberEl.textContent = countdown;

setInterval(function() {
    countdown = --countdown <= 0 ? 3: countdown;

    countdownNumberEl.textContent = countdown;
}, 1000);

self.location.href="icon.html";
