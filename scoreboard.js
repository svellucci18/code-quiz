// init function is called when the page loads at the start so that you can pull from localstorage.
function init() {
    getScore();
};

// scoreboard variables and default for starting
var scoreTracker = [];
var isWin = false; //don't even use this?
var endGame = document.createElement("h2");
var highscoreDivEl = document.querySelector("#highscoreDiv");
var formEl = document.querySelector("#initials");
var savesScoreEl = document.querySelector("#savesScore");
var scoreArray = [];

// The winGame function is called if the win condition is met.
function winGame() {
    emptyContainer();
    endGame.textContent = "You've completed the state capital's challenge! Your score is " + timeLeft;
    contentContainerEl.appendChild(endGame);
    scoreTracker.push(timeLeft);
    // Removing the class hidden so that it becomes visible
    highscoreDivEl.classList.remove("hidden");
    
    savesScoreEl.addEventListener("click",function() {
        // Grabbing the initials
        var userInitials = formEl.value;
        var object = {
            user: userInitials,
            score: timeLeft
        }
        scoreArray.push(object);
        localStorage.setItem("highscores", JSON.stringify(scoreArray));  
    });
    
}

// The loseGame function is called when timer reaches 0
function loseGame() {
    emptyContainer();
    endGame.textContent = "Out of time! Try again?";
    contentContainerEl.appendChild(endGame);
    contentContainerEl.appendChild(startGame);
}
