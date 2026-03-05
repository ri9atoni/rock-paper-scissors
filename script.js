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

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?",'').toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}

//create playGame function; move playRound and score variables in it;
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Scissors" && computerChoice === "Paper") || 
        (humanChoice === "Paper" && computerChoice === "Rock")) {
            humanScore += 1;
            return `You win! ${humanChoice} beats ${computerChoice}!`;
        } else {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }

    /*
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice,computerChoice))
        console.log("Your score: "+ humanScore);
        console.log("Computer score: "+ computerScore);
    }
    */

    if (humanScore === computerScore) {
        return "It's a tie!";
    } else if (humanScore > computerScore) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

console.log(playGame());