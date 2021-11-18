// add timer element
var timer = document.getElementById('countdown');
var timeLeft = 0;

function countdown() {
    timeLeft = 75;
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

// create an object with the question sets
var questions = [
    {
        question: "Commonly used data types DO NOT include",
        multChoices: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
        ],
        correct: "alert"
    }
]