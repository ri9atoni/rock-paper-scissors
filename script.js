"use strict";

let humanScore = 0;
let computerScore = 0;


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

//replace getHumanChoice() with buttons

//create playGame function; move playRound and score variables in it;
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

function checkWinner() {
    if (humanScore === 5) {
        return "Human wins!";
    }else if (computerScore === 5) {
        return "Computer wins!";
    } else {
        return null;
    }
}

const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

rockButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    console.log(playRound("Rock", computerChoice));
    let winner = checkWinner();
    if (winner !== null) {
        console.log(winner);
    }
});

paperButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    console.log(playRound("Paper", computerChoice));
    let winner = checkWinner();
    if (winner !== null) {
    console.log(winner);
    }
});

scissorsButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    console.log(playRound("Scissors", computerChoice));
    let winner = checkWinner();
    if (winner !== null) {
    console.log(winner);
    }
});