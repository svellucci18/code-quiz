// init function is called when the page loads at the start so that you can pull from localstorage.
function init() {
    getScore();
};

// scoreboard variables and default for starting
var scoreTracker = [];
var isWin = false;
var endGame = document.createElement("h2");

// The winGame function is called if the win condition is met.
function winGame() {
    emptyContainer();
    endGame.textContent = "You've completed the state capital's challenge! Your score is " + timeLeft;
    contentContainerEl.appendChild(endGame);
    scoreTracker.push(timeLeft);
    setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
    emptyContainer();
    endGame.textContent = "Out of time! Try again?";
    contentContainerEl.appendChild(endGame);
    contentContainerEl.appendChild(startGame);
}
