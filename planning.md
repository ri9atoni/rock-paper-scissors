STEP 2
will RANDOMLY return one of three strings:
"rock", "paper", "scissors"
Math.random method returns a random number where num >= 0 && num < 1
Question: How to use this to CONDITIONALLY return one of three strings with equal probability

Thinking: 0 <= num < 1; all numbers generated with equal probability
  visualizing -- 0.00----------|1.00 --> this is our range
  Each number is a decimal
  if you divide the instances of number between 0 and max value of Math.random() into 3 ranges
  each range is going to represent a string
  however, it's too complicated to define the exact value between each range
  so we have to change the decimals to integer

QUESTION: What to do to the generated number to return 3 distinct integers? + - * /?
Math.floor() rounds down the decimal to the nearest integer
to have 3 choices, we have to be able to round down 3 floating numbers to integers
  new range visualizing -- 0.00----------1.00 1.00----------2.00 2.00----------|3.00 --> this is our NEW range
  +: 0.5+3 = 3.5 gives 2 choices - 3 and 4
  -: 0.5-3 = -2.5 gives 2 choices - -3 and -2
  *: 0.5*3 = 1.5 && 0.3*3 = 0.9 && 0.9*3 = 2.7 gives 3 choies - 0, 1, 2
  /: 0.5/3 = 0.167 gives 2 choices - 0 and 1
CONCLUSION: Range * n you will get n possible whole numbers (0 to n-1) when rounded down with Math.floor()

ALTERNATIVELY:
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
    */
}

STEP 3
Use prompt method to get user's input
make parameter humanChoice case-insensitive to clean and return data
console.log(getHumanChoice()) to return human choice

STEP 4
create humanScore and computerScore in the GLOBAL scope to keep track of players score
initialize both variables with 0

STEP 5
Create new function playRound
Define two parameters in the function: humanChoice and computerChoice
Create an if statement to check whether humanChoice is the same as computerChoice
    if it is, return "It's a tie!"
    no increment of score happens
    ELSE IF
    Rock > Scissors
    Scissors > Paper
    Paper > Rock
    To translate into code:
    if humanChoice === "rock" && computerChoice === "scissors", human wins; return string and increment humanScore;
    if humanChoice === "scissors" && computerChoice === "Paper", human wins; return string and increment humanScore;
    if humanChoice === "paper" && computerChoice === "rock", human wins; return string and increment humanScore;
    COMBINE THESE? use ||
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock"))
    ELSE
    computer wins, return string "You lose! ${computerChoice} beats ${humanChoice}"; increment computerScore;
    

First idea:
Create three if functions for computerChoice === "rock", "paper","scissors"
Within the if functions for computerChoice, create another if function for humanChoice === "rock", else if "paper", else "scissors", and increment either humanScore or computerScore by 1, and return the string to announce if the player lose or win such as "You lose! Paper beats Rock"`
This creates MANY nested if's -- 9 in fact -- too many! too complicated!!