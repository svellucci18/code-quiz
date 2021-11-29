// scoreboard variables and default for starting
var scoreTracker = [];
var endGame = document.createElement("h2");
var highscoreDivEl = document.querySelector("#highscoreDiv");
var formEl = document.querySelector("#initials");
var savesScoreEl = document.querySelector("#savesScore");

// Get the parent element that will store the content
var contentContainerEl = document.querySelector('.content');

// The winGame function is called if the win condition is met.
function winGame() {
    emptyContainer();
    endGame.textContent = "You've completed the state capital's challenge! Your score is " + timeLeft;
    contentContainerEl.appendChild(endGame);
    scoreTracker.push(timeLeft);
    // Removing the class hidden so that it becomes visible
    highscoreDivEl.classList.remove("hidden");

    savesScoreEl.addEventListener("click",setWins);
    
}

// The loseGame function is called when timer reaches 0
function loseGame() {
    emptyContainer();
    endGame.textContent = "Out of time! Try again?";
    contentContainerEl.appendChild(endGame);
    contentContainerEl.appendChild(startGame);
}

// Get stuff from DOM
var highscoresBoard = document.getElementById("highscoresBoard");
var scoreBoard = document.getElementById("scoreBoard");
var highScoresList;

// Set scoreArray to an empty set to fill with the answers
var scoreArray = [];

// setWins function
function setWins() {
    // Grabbing the initials
    var userInitials = formEl.value;
    var object = {
        user: userInitials,
        score: timeLeft
    }
    scoreArray.push(object);
    localStorage.setItem("highscores", JSON.stringify(scoreArray));
    renderHighscore();
}

// render highscore element
function renderHighscore() {

    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

   for (var i = 0; i < highScores.length; i++) {

       var highScoresList = document.createElement("li");

       highScoresList.textContent = highScores[i].name + highScores[i].score;

       scoreBoard.append(highScoresList);
   }
};

// Add functionality to clear highscores
// Note that replay button is a trick button!
var clearHighscoresButton = document.querySelector('clearHighscores')
