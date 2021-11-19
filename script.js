// Create an object with the questions as array elements
var questions = [
    {
        question: "What is the capital of Iowa?",
        multChoices: [
            "1. Salem",
            "2. Des Moines",
            "3. Topeka",
            "4. Omaha"
        ],
        correct: "Des Moines"
    },
    {
        question: "What is the capital of Nebraska?",
        multChoices: [
            "1. St. Louis",
            "2. Lincoln",
            "3. Omaha",
            "4. Wichita"
        ],
        correct: "Lincoln"
    },
    {
        question: "What is the capital of Maine?",
        multChoices: [
            "1. Montpelier",
            "2. Bangor",
            "3. Augusta",
            "4. Portland"
        ],
        correct: "Augusta"
    },
    {
        question: "What is the capital of Florida?",
        multChoices: [
            "1. Miami",
            "2. Tampa",
            "3. Tallahassee",
            "4. Jacksonville"
        ],
        correct: "Tallahassee"
    },
    {
        question: "What is the capital of Vermont?",
        multChoices: [
            "1. Plattsburgh",
            "2. Montpelier",
            "3. Concord",
            "4. Augusta"
        ],
        correct: "Montpelier"
    },    
    {
        question: "What is the capital of New Hampshire?",
        multChoices: [
            "1. Concord",
            "2. Montpelier",
            "3. Bishkek",
            "4. Augusta"
        ],
        correct: "Concord"
    },
    {
        question: "What is the capital of Kansas?",
        multChoices: [
            "1. Omaha",
            "2. Topeka",
            "3. Jefferson City",
            "4. Wichita"
        ],
        correct: "Topeka"
    },
    {
        question: "What is the capital of Tennessee?",
        multChoices: [
            "1. Knoxville",
            "2. Chattanooga",
            "3. Memphis",
            "4. Nashville"
        ],
        correct: "Nashville"
    },
    {
        question: "What is the capital of Massachusetts?",
        multChoices: [
            "1. Boston",
            "2. Yonkers",
            "3. Concord",
            "4. Salem"
        ],
        correct: "Boston"
    },
    {
        question: "What is the capital of Illinois?",
        multChoices: [
            "1. Chicago",
            "2. Detroit",
            "3. Springfield",
            "4. Wichita"
        ],
        correct: "Springfield"
    },
    {
        question: "What is the capital of Maryland?",
        multChoices: [
            "1. Annapolis",
            "2. Rockville",
            "3. Baltimore",
            "4. Norfolk"
        ],
        correct: "Annapolis"
    },
    {
        question: "What is the capital of West Virginia?",
        multChoices: [
            "1. Charleston",
            "2. Raleigh",
            "3. Concord",
            "4. Arlington"
        ],
        correct: "Charleston"
    },
    {
        question: "What is the capital of Mississippi?",
        multChoices: [
            "1. Jackson",
            "2. New Orleans",
            "3. Montgomery",
            "4. Mobile"
        ],
        correct: "Jackson"
    },
    {
        question: "What is the capital of Missouri?",
        multChoices: [
            "1. Jefferson City",
            "2. Wichita",
            "3. Pierre",
            "4. St. Louis"
        ],
        correct: "Jefferson City"
    },
    {
        question: "What is the capital of Indiana?",
        multChoices: [
            "1. Chicago",
            "2. Indianapolis",
            "3. Akron",
            "4. Green Bay"
        ],
        correct: "Indianapolis"
    },
    {
        question: "What is the capital of Washington?",
        multChoices: [
            "1. Salem",
            "2. Olympia",
            "3. Tacoma",
            "4. Seattle"
        ],
        correct: "Olympia"
    },
    {
        question: "What is the capital of South Dakota?",
        multChoices: [
            "1. Aberdeen",
            "2. Sioux Falls",
            "3. Pierre",
            "4. Rapid City"
        ],
        correct: "Pierre"
    },
    {
        question: "What is the capital of North Dakota?",
        multChoices: [
            "1. Fargo",
            "2. Pierre",
            "3. Bismarck",
            "4. Sioux Fall"
        ],
        correct: "Bismarck"
    },
    {
        question: "What is the capital of Hawaii?",
        multChoices: [
            "1. Hilo",
            "2. Honolulu",
            "3. Kahulul",
            "4. Honouliuli"
        ],
        correct: "Honolulu"
    },
    {
        question: "What is the capital of Pennsylvania?",
        multChoices: [
            "1. Philadelphia",
            "2. Pittsburgh",
            "3. Harrisburg",
            "4. Reading"
        ],
        correct: "Harrisburg"
    },
    {
        question: "What is the capital of Virginia?",
        multChoices: [
            "1. Richmond",
            "2. Virginia Beach",
            "3. Arlington",
            "4. Norfolk"
        ],
        correct: "Richmond"
    },
    {
        question: "What is the capital of New Mexico?",
        multChoices: [
            "1. Tucson",
            "2. Yuma",
            "3. Santa Fe",
            "4. Albuquerque"
        ],
        correct: "Santa Fe"
    },
    {
        question: "What is the capital of Connecticut?",
        multChoices: [
            "1. New Haven",
            "2. Hartford",
            "3. Yonkers",
            "4. Stamford"
        ],
        correct: "Hartford"
    },
    {
        question: "What is the capital of Minnesota?",
        multChoices: [
            "1. St. Paul",
            "2. Lincoln",
            "3. Sioux Falls",
            "4. Minneapolis"
        ],
        correct: "St. Paul"
    },
    {
        question: "What is the capital of California?",
        multChoices: [
            "1. Sacramento",
            "2. San Diego",
            "3. San Francisco",
            "4. Los Angeles"
        ],
        correct: "Sacramento"
    },
    {
        question: "What is the capital of New Jersey?",
        multChoices: [
            "1. Atlantic City",
            "2. Neward",
            "3. Yonkers",
            "4. Trenton"
        ],
        correct: "Trenton"
    },
    {
        question: "What is the capital of Colorado?",
        multChoices: [
            "1. Colorado Springs",
            "2. Denver",
            "3. Detroit",
            "4. Cheyenne"
        ],
        correct: "Denver"
    },
    {
        question: "What is the capital of Alaska?",
        multChoices: [
            "1. Juneau",
            "2. Helena",
            "3. Anchorage",
            "4. Jacksonville"
        ],
        correct: "Juneau"
    },
    {
        question: "What is the capital of Utah?",
        multChoices: [
            "1. Orem",
            "2. Denver",
            "3. Salt Lake City",
            "4. Provo"
        ],
        correct: "Salt Lake City"
    },
    {
        question: "What is the capital of Arkansas?",
        multChoices: [
            "1. Little Rock",
            "2. Albany",
            "3. Denver",
            "4. Topeka"
        ],
        correct: "Little Rock"
    },
    {
        question: "What is the capital of Delaware?",
        multChoices: [
            "1. Newark",
            "2. Dover",
            "3. Norfolk",
            "4. New York City"
        ],
        correct: "Dover"
    },
    {
        question: "What is the capital of Wisconsin?",
        multChoices: [
            "1. Madison",
            "2. Milwaukee",
            "3. Detroit",
            "4. Green Bay"
        ],
        correct: "Madison"
    },
    {
        question: "What is the capital of Michigan?",
        multChoices: [
            "1. Lansing",
            "2. Detroit",
            "3. Chicago",
            "4. Green Bay"
        ],
        correct: "Lansing"
    },
    {
        question: "What is the capital of Idaho?",
        multChoices: [
            "1. Cheyenne",
            "2. Salt Lake City",
            "3. Boise",
            "4. Helena"
        ],
        correct: "Boise"
    },
    {
        question: "What is the capital of Nevada?",
        multChoices: [
            "1. Las Vegas",
            "2. Reno",
            "3. Carson City",
            "4. Yuma"
        ],
        correct: "Carson City"
    },
    {
        question: "What is the capital of Texas?",
        multChoices: [
            "1. Houston",
            "2. San Antonio",
            "3. Austin",
            "4. Forth Worth"
        ],
        correct: "Austin"
    },
    {
        question: "What is the capital of South Carolina?",
        multChoices: [
            "1. Columbia",
            "2. Mount Pleasant",
            "3. Charleston",
            "4. Myrtle Beach"
        ],
        correct: "Columbia"
    },
    {
        question: "What is the capital of Arizona?",
        multChoices: [
            "1. Tucson",
            "2. Phoenix",
            "3. Pierre",
            "4. Des Moines"
        ],
        correct: "Phoenix"
    },
    {
        question: "What is the capital of Oregon?",
        multChoices: [
            "1. Salem",
            "2. Portland",
            "3. Tacoma",
            "4. Seattle"
        ],
        correct: "Salem"
    },
    {
        question: "What is the capital of Oklahoma?",
        multChoices: [
            "1. Tulsa",
            "2. St. Louis",
            "3. Wichita",
            "4. Oklahoma City"
        ],
        correct: "Oklahoma City"
    },
    {
        question: "What is the capital of Louisiana?",
        multChoices: [
            "1. Baton Rouge",
            "2. Corpus Christi",
            "3. Mobile",
            "4. New Orleans"
        ],
        correct: "Baton Rouge"
    },
    {
        question: "What is the capital of Ohio?",
        multChoices: [
            "1. Cincinnati",
            "2. Akron",
            "3. Cleveland",
            "4. Columbus"
        ],
        correct: "Columbus"
    },
    {
        question: "What is the capital of Alabama?",
        multChoices: [
            "1. Montgomery",
            "2. Bismarck",
            "3. Albany",
            "4. Omaha"
        ],
        correct: "Montgomery"
    },
    {
        question: "What is the capital of Rhode Island?",
        multChoices: [
            "1. Pawtucket",
            "2. Hartford",
            "3. Newport",
            "4. Providence"
        ],
        correct: "Providence"
    },
    {
        question: "What is the capital of Wyoming?",
        multChoices: [
            "1. Cheyenne",
            "2. Seattle",
            "3. Helena",
            "4. Casper"
        ],
        correct: "Cheyenne"
    },
    {
        question: "What is the capital of Georgia?",
        multChoices: [
            "1. Myrtle Beach",
            "2. Savannah",
            "3. Albany",
            "4. Atlanta"
        ],
        correct: "Atlanta"
    },
    {
        question: "What is the capital of New York?",
        multChoices: [
            "1. Buffalo",
            "2. Kingston",
            "3. New York City",
            "4. Albany"
        ],
        correct: "Albany"
    },
    {
        question: "What is the capital of Montana?",
        multChoices: [
            "1. Salt Lake City",
            "2. Helena",
            "3. Seattle",
            "4. Cheyenne"
        ],
        correct: "Helena"
    },
    {
        question: "What is the capital of North Carolina?",
        multChoices: [
            "1. Charleston",
            "2. Charlotte",
            "3. Myrtle Beach",
            "4. Raleigh"
        ],
        correct: "Raleigh"
    },
    {
        question: "What is the capital of Kentucky?",
        multChoices: [
            "1. Frankfort",
            "2. Knoxville",
            "3. Louisville",
            "4. Chattanooga"
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

// Add timer element
var timer = document.getElementById('countdown');
var timeLeft = 0;

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

// When start game is clicked start timer, hide welcome content and start quiz
startGameButton.addEventListener("click",countdown);
startGameButton.addEventListener("click",hideWelcome);
startGameButton.addEventListener("click",renderQuestion);

function hideWelcome() {
    startGameButton.remove();
    welcomeEl.remove();
    instructionsEl.remove();
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

// Function to render next Question and reveal if answer was correct and decrement timer
function nextQuestion(event) {
    // Find the button that was clicked
    console.log(event) 
    console.log(event.target.innerText)
    console.log(questions[quizIndex].correct)
    var string = JSON.stringify(questions[quizIndex].correct);
    var string2 = JSON.stringify(event.target.innerText);
    var correct = string.includes(string2);
    console.log(correct);
    console.log(string, string2);
    if(string == string2) {
        console.log("correct");
    };
    // Adds one to the index, aka which question are we on.
    quizIndex++;
    // Clear the previous question
    contentContainerEl.innerHTML = "";
    renderQuestion();
};

