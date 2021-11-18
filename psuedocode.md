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