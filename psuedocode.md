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
        -jump into the first question.

- Begin Quiz
    - Make the content of the quiz with a template literal