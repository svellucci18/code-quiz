// add timer element
var timer = document.getElementById('countdown');

function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        // create if statement for subtracting 10000ms when user selects incorrectly.
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            console.log("All done!")
        }

    }, 1000);
}

countdown()