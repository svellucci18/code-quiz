// Get the parent element that will store the content
var contentContainerEl = document.querySelector('.content');

// Get stuff from DOM
var highscoresBoard = document.querySelector("#highscoresBoard");
var scoreBoard = document.querySelector("#scoreBoard");

// Set scoreArray to an empty set to fill with the answers
var scoreArray = renderHighscore();

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

    var scoreArray = JSON.parse(localStorage.getItem("highscores")) || [];

   for (var i = 0; i < scoreArray.length; i++) {

       var highScoresList = document.createElement("li");

       highScoresList.textContent = scoreArray[i].initials + scoreArray[i].score;

       scoreBoard.append(highScoresList);
   }
};

// Add functionality to clear highscores
// Note that replay button is a trick button!
var clearHighscoresButton = document.querySelector('clearHighscores')
