"use strict";

console.log("Hello World");


function getComputerChoice() {
    //Generate a random number that's greater than or equal to 0 and less than 1
    //Multiply that number by 3, round it down to integer, and store it in a variable
    //If the integer is 0, 1, and 2, return "rock", "paper", "scissors" respectively
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

/*
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
*/

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?",'').toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}

//console.log(getHumanChoice());

//Initialize counter variables - humanScore and computerScore - and set both to 0
/*
let humanScore = 0;
let computerScore = 0;


console.log(humanScore);
console.log(computerScore);

console.log(typeof humanScore);
console.log(typeof computerScore);
*/

//create playRound function
/*
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")) {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}
*/

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);
*/

console.log(playRound(humanSelection, computerSelection));

/*
check if function works using hardcoded choices
playRound("Rock","Scissors");
playRound("Rock","Paper");
playRound("Rock","Rock");
console.log(humanScore);
console.log(computerScore);
*/

//create playGame function; move playRound and score variables in it;
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore += 1;
            return `You win! ${humanChoice} beats ${computerChoice}!`;
        } else {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice,computerChoice))
    }
}
