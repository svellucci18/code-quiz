// Create an object with the questions as array elements
var questions = [
    {
        question: "What is the capital of Iowa?",
        multChoices: [
            "Salem",
            "Des Moines",
            "Topeka",
            "Omaha"
        ],
        correct: "Des Moines"
    },
    {
        question: "What is the capital of Nebraska?",
        multChoices: [
            "St. Louis",
            "Lincoln",
            "Omaha",
            "Wichita"
        ],
        correct: "Lincoln"
    },
    {
        question: "What is the capital of Maine?",
        multChoices: [
            "Montpelier",
            "Bangor",
            "Augusta",
            "Portland"
        ],
        correct: "Augusta"
    },
    {
        question: "What is the capital of Florida?",
        multChoices: [
            "Miami",
            "Tampa",
            "Tallahassee",
            "Jacksonville"
        ],
        correct: "Tallahassee"
    },
    {
        question: "What is the capital of Vermont?",
        multChoices: [
            "Plattsburgh",
            "Montpelier",
            "Concord",
            "Augusta"
        ],
        correct: "Montpelier"
    },    
    {
        question: "What is the capital of New Hampshire?",
        multChoices: [
            "Concord",
            "Montpelier",
            "Bishkek",
            "Augusta"
        ],
        correct: "Concord"
    },
    {
        question: "What is the capital of Kansas?",
        multChoices: [
            "Omaha",
            "Topeka",
            "Jefferson City",
            "Wichita"
        ],
        correct: "Topeka"
    },
    {
        question: "What is the capital of Tennessee?",
        multChoices: [
            "Knoxville",
            "Chattanooga",
            "Memphis",
            "Nashville"
        ],
        correct: "Nashville"
    },
    {
        question: "What is the capital of Massachusetts?",
        multChoices: [
            "Boston",
            "Yonkers",
            "Concord",
            "Salem"
        ],
        correct: "Boston"
    },
    {
        question: "What is the capital of Illinois?",
        multChoices: [
            "Chicago",
            "Detroit",
            "Springfield",
            "Wichita"
        ],
        correct: "Springfield"
    },
    {
        question: "What is the capital of Maryland?",
        multChoices: [
            "Annapolis",
            "Rockville",
            "Baltimore",
            "Norfolk"
        ],
        correct: "Annapolis"
    },
    {
        question: "What is the capital of West Virginia?",
        multChoices: [
            "Charleston",
            "Raleigh",
            "Concord",
            "Arlington"
        ],
        correct: "Charleston"
    },
    {
        question: "What is the capital of Mississippi?",
        multChoices: [
            "Jackson",
            "New Orleans",
            "Montgomery",
            "Mobile"
        ],
        correct: "Jackson"
    },
    {
        question: "What is the capital of Missouri?",
        multChoices: [
            "Jefferson City",
            "Wichita",
            "Pierre",
            "St. Louis"
        ],
        correct: "Jefferson City"
    },
    {
        question: "What is the capital of Indiana?",
        multChoices: [
            "Chicago",
            "Indianapolis",
            "Akron",
            "Green Bay"
        ],
        correct: "Indianapolis"
    },
    {
        question: "What is the capital of Washington?",
        multChoices: [
            "Salem",
            "Olympia",
            "Tacoma",
            "Seattle"
        ],
        correct: "Olympia"
    },
    {
        question: "What is the capital of South Dakota?",
        multChoices: [
            "Aberdeen",
            "Sioux Falls",
            "Pierre",
            "Rapid City"
        ],
        correct: "Pierre"
    },
    {
        question: "What is the capital of North Dakota?",
        multChoices: [
            "Fargo",
            "Pierre",
            "Bismarck",
            "Sioux Fall"
        ],
        correct: "Bismarck"
    },
    {
        question: "What is the capital of Hawaii?",
        multChoices: [
            "Hilo",
            "Honolulu",
            "Kahulul",
            "Honouliuli"
        ],
        correct: "Honolulu"
    },
    {
        question: "What is the capital of Pennsylvania?",
        multChoices: [
            "Philadelphia",
            "Pittsburgh",
            "Harrisburg",
            "Reading"
        ],
        correct: "Harrisburg"
    },
    {
        question: "What is the capital of Virginia?",
        multChoices: [
            "Richmond",
            "Virginia Beach",
            "Arlington",
            "Norfolk"
        ],
        correct: "Richmond"
    },
    {
        question: "What is the capital of New Mexico?",
        multChoices: [
            "Tucson",
            "Yuma",
            "Santa Fe",
            "Albuquerque"
        ],
        correct: "Santa Fe"
    },
    {
        question: "What is the capital of Connecticut?",
        multChoices: [
            "New Haven",
            "Hartford",
            "Yonkers",
            "Stamford"
        ],
        correct: "Hartford"
    },
    {
        question: "What is the capital of Minnesota?",
        multChoices: [
            "St. Paul",
            "Lincoln",
            "Sioux Falls",
            "Minneapolis"
        ],
        correct: "St. Paul"
    },
    {
        question: "What is the capital of California?",
        multChoices: [
            "Sacramento",
            "San Diego",
            "San Francisco",
            "Los Angeles"
        ],
        correct: "Sacramento"
    },
    {
        question: "What is the capital of New Jersey?",
        multChoices: [
            "Atlantic City",
            "Neward",
            "Yonkers",
            "Trenton"
        ],
        correct: "Trenton"
    },
    {
        question: "What is the capital of Colorado?",
        multChoices: [
            "Colorado Springs",
            "Denver",
            "Detroit",
            "Cheyenne"
        ],
        correct: "Denver"
    },
    {
        question: "What is the capital of Alaska?",
        multChoices: [
            "Juneau",
            "Helena",
            "Anchorage",
            "Jacksonville"
        ],
        correct: "Juneau"
    },
    {
        question: "What is the capital of Utah?",
        multChoices: [
            "Orem",
            "Denver",
            "Salt Lake City",
            "Provo"
        ],
        correct: "Salt Lake City"
    },
    {
        question: "What is the capital of Arkansas?",
        multChoices: [
            "Little Rock",
            "Albany",
            "Denver",
            "Topeka"
        ],
        correct: "Little Rock"
    },
    {
        question: "What is the capital of Delaware?",
        multChoices: [
            "Newark",
            "Dover",
            "Norfolk",
            "New York City"
        ],
        correct: "Dover"
    },
    {
        question: "What is the capital of Wisconsin?",
        multChoices: [
            "Madison",
            "Milwaukee",
            "Detroit",
            "Green Bay"
        ],
        correct: "Madison"
    },
    {
        question: "What is the capital of Michigan?",
        multChoices: [
            "Lansing",
            "Detroit",
            "Chicago",
            "Green Bay"
        ],
        correct: "Lansing"
    },
    {
        question: "What is the capital of Idaho?",
        multChoices: [
            "Cheyenne",
            "Salt Lake City",
            "Boise",
            "Helena"
        ],
        correct: "Boise"
    },
    {
        question: "What is the capital of Nevada?",
        multChoices: [
            "Las Vegas",
            "Reno",
            "Carson City",
            "Yuma"
        ],
        correct: "Carson City"
    },
    {
        question: "What is the capital of Texas?",
        multChoices: [
            "Houston",
            "San Antonio",
            "Austin",
            "Forth Worth"
        ],
        correct: "Austin"
    },
    {
        question: "What is the capital of South Carolina?",
        multChoices: [
            "Columbia",
            "Mount Pleasant",
            "Charleston",
            "Myrtle Beach"
        ],
        correct: "Columbia"
    },
    {
        question: "What is the capital of Arizona?",
        multChoices: [
            "Tucson",
            "Phoenix",
            "Pierre",
            "Des Moines"
        ],
        correct: "Phoenix"
    },
    {
        question: "What is the capital of Oregon?",
        multChoices: [
            "Salem",
            "Portland",
            "Tacoma",
            "Seattle"
        ],
        correct: "Salem"
    },
    {
        question: "What is the capital of Oklahoma?",
        multChoices: [
            "Tulsa",
            "St. Louis",
            "Wichita",
            "Oklahoma City"
        ],
        correct: "Oklahoma City"
    },
    {
        question: "What is the capital of Louisiana?",
        multChoices: [
            "Baton Rouge",
            "Corpus Christi",
            "Mobile",
            "New Orleans"
        ],
        correct: "Baton Rouge"
    },
    {
        question: "What is the capital of Ohio?",
        multChoices: [
            "Cincinnati",
            "Akron",
            "Cleveland",
            "Columbus"
        ],
        correct: "Columbus"
    },
    {
        question: "What is the capital of Alabama?",
        multChoices: [
            "Montgomery",
            "Bismarck",
            "Albany",
            "Omaha"
        ],
        correct: "Montgomery"
    },
    {
        question: "What is the capital of Rhode Island?",
        multChoices: [
            "Pawtucket",
            "Hartford",
            "Newport",
            "Providence"
        ],
        correct: "Providence"
    },
    {
        question: "What is the capital of Wyoming?",
        multChoices: [
            "Cheyenne",
            "Seattle",
            "Helena",
            "Casper"
        ],
        correct: "Cheyenne"
    },
    {
        question: "What is the capital of Georgia?",
        multChoices: [
            "Myrtle Beach",
            "Savannah",
            "Albany",
            "Atlanta"
        ],
        correct: "Atlanta"
    },
    {
        question: "What is the capital of New York?",
        multChoices: [
            "Buffalo",
            "Kingston",
            "New York City",
            "Albany"
        ],
        correct: "Albany"
    },
    {
        question: "What is the capital of Montana?",
        multChoices: [
            "Salt Lake City",
            "Helena",
            "Seattle",
            "Cheyenne"
        ],
        correct: "Helena"
    },
    {
        question: "What is the capital of North Carolina?",
        multChoices: [
            "Charleston",
            "Charlotte",
            "Myrtle Beach",
            "Raleigh"
        ],
        correct: "Raleigh"
    },
    {
        question: "What is the capital of Kentucky?",
        multChoices: [
            "Frankfort",
            "Knoxville",
            "Louisville",
            "Chattanooga"
        ],
        correct: "Frankfort"
    },

];

// Get the parent element that will store the content
var contentContainerEl = document.querySelector('.content');

// Create welcome page in document
var welcome = document.createElement("h2");
var instructions = document.createElement("h3");
var startGame = document.createElement("button");

// Add text to welcome page
welcome.textContent = "Welcome to the state capitals quiz!";
instructions.textContent = "You'll have 5 minutes to guess all the state capitals, beware that answering incorrectly deducts 10 seconds from the timer. Good luck!";
startGame.textContent = "Start";

contentContainerEl.appendChild(welcome);
contentContainerEl.appendChild(instructions);
contentContainerEl.appendChild(startGame);

// Create class, id and style for welcome page
welcome.className = "contentHeader";
welcome.id = "welcomeHeader";
instructions.setAttribute("style", "margin:auto; width:80%; padding:15px 0px; line-height: 1.5;");
instructions.id = "instructions";
startGame.id = "startGameButton";

// Access the welcome page content including start game button
var startGameButton = document.querySelector('#startGameButton');
var welcomeEl = document.querySelector('#welcomeHeader');
var instructionsEl = document.querySelector('#instructions')

// When start game is clicked start timer, hide welcome content and start quiz
// Might want to clean this up into one startGame function.
startGameButton.addEventListener("click",countdown);
startGameButton.addEventListener("click",emptyContainer);
startGameButton.addEventListener("click",renderQuestion);

// Clears contents of contentContainerEl 
function emptyContainer() {
    contentContainerEl.innerHTML = "";
};


// Function for the rendering the question by grabbing it from the questions object
var quizIndex = 0;
function renderQuestion() {
    // Create question headers
    var question = document.createElement("h2");
    question.textContent = questions[quizIndex].question;
    question.className = "contentHeader";
    contentContainerEl.appendChild(question);
    
    // Loop through the multiple choice answers and create buttons for them.
    for(var i=0; i<4; i++) {
        var multChoice = document.createElement("button");
        var lineBreak = document.createElement("br");
        multChoice.textContent = questions[quizIndex].multChoices[i];
        multChoice.className = "multChoices";
        contentContainerEl.appendChild(multChoice);
        contentContainerEl.appendChild(lineBreak);
        // when the answer is selected nextQuestion is called
        multChoice.addEventListener("click",nextQuestion)
    };
};

// Function to render next Question and reveal if answer was correct and decrement timer if wrong
function nextQuestion(event) {
    // Declare button that was clicked
    var userAnswer = event.target.innerText;
    // Declare correct answer
    var correct = questions[quizIndex].correct;
    var result = document.createElement("h3");

    if(userAnswer == correct) {
        console.log("correct");
        result.textContent = correct + " was correct! ";
        result.className = "result";
    } else {
        console.log("incorrect");
        result.textContent = "Nope! The correct answer was " + correct;
        result.className = "result";
    };

    // Adds one to the index, aka which question are we on.
    quizIndex++;

    // Clear the previous question
    emptyContainer();
    contentContainerEl.appendChild(result);
    renderQuestion();
};

// init function is called when the page loads at the start so that you can pull from localstorage.
function init() {
    getScore();
};

// scoreboard variables and default for starting
var scoreTracker = [];
var isWin = false;
var endGame = document.createElement("h2");
// Add timer element
var timer = document.getElementById('countdown');
var timeLeft = 0;

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

// function for the countdown timer
function countdown() {
    timeLeft = 50000;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time: " + (timeLeft/10000) + " minutes";

        // create if statement for subtracting 10000ms when user selects incorrectly.
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            console.log("All done!");
        }

    }, 1000);
};