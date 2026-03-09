"use strict";

let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

const scoreDiv = document.getElementById("score");
const resultDiv = document.getElementById("result");
const winnerDiv = document.getElementById("winner-display");

const resetButton = document.getElementById("reset-btn");

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


rockButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let roundResult = playRound("Rock", computerChoice);
    scoreDiv.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
    resultDiv.textContent = roundResult;
    let winner = checkWinner();
    if (winner !== null) {
        winnerDiv.textContent = winner;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        resetButton.hidden = false;
    }
});

paperButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let roundResult = playRound("Paper", computerChoice);
    scoreDiv.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
    resultDiv.textContent = roundResult;
    let winner = checkWinner();
    if (winner !== null) {
        winnerDiv.textContent = winner;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        resetButton.hidden = false;
    }
});

scissorsButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let roundResult = playRound("Scissors", computerChoice);
    scoreDiv.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
    resultDiv.textContent = roundResult;
    let winner = checkWinner();
    if (winner !== null) {
        winnerDiv.textContent = winner;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        resetButton.hidden = false;
    }
});

resetButton.addEventListener("click", function() {
    humanScore = 0;
    computerScore = 0;

    scoreDiv.textContent = "Scores";
    resultDiv.textContent = "Round Result";
    winnerDiv.textContent = "Winner";
    
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    resetButton.hidden = true;
})