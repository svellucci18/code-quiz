# What does my application need to function

- timer counting down - jumps down when questions are answered incorrectly
- multiple choice questions - answers revealed after selecting choice
- scoreboard stores initials and scores


# What does my application need to get from the user

- press the start quiz button
- selected answers to multiple choice questions
- user initials

# What kind of actions does my application need?

- start action
    - hide welcome
    - display the next question
    - start the countdown timer

- validate users choice
    - IF the choice is wrong, subtract from the timer

- display the next question
- display the answer result
- end the game
    - stop the timer from counting down [clearInterval]


Thoughts:
- Start page with Instructions and a button that is listening.
    - Make the start page content with js DONE
    - Stylize the start page with class names DONE
    - if pressed 
        -delete the content of the instructions DONE
        -start timer DONE
        -jump into the first question. DONE

- Begin Quiz
    - Make the content of the quiz with a for loop. DONE
    - Style the quiz questions with CSS DONE
    - Loop through the questions of the quiz when an answer is selected DONE
        - Announce if selected answer is true or false DONE
        - OR Reveal correct answer DONE
        - Subtract time from the timer when false DONE
    -Stop quiz when timer is out or all questions are answered
        

- Create scoreboard
    - Ask for user initials when game is finished
    - If they win:
        - Store time when finished
        - Ask user for initials
        - Store initials and scores with localStorage
        - declare all variables at the top
        - if I want the scoreboard in my contentContainerEl, I need to dynamically create that HTML
  
    

Final touches:
- Clean up the time so it has less decimal places.
- Find a way to look for the correct answer inside of the text rather than being exactly equal.
- Add numbers dynamically to the answer choices.
- Data attribute consolidation
- for the correct/incorrect answer prompts, build a timer within this function and set the time = to when you answer the following question.

Scoreboard tips:
Set empty array to whatever is stored in the storage when the page loads.
-dynamically create the scoreboard in the content box when the highscores (upper left) link is clicked. 
-Use the array to populate the list getItem