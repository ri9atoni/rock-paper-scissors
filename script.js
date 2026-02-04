"use strict";

console.log("Hello World");


function getComputerChoice() {
    //Generate a random number that's greater than or equal to 0 and less than 1
    //Multiply that number by 3, round it down to integer, and store it in a variable
    //If the integer is 0, 1, and 2, return "rock", "paper", "scissors" respectively
    let computerChoice = Math.floor(Math.random() * 3);


    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?",'').toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());

//Initialize counter variables - humanScore and computerScore - and set both to 0
let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);

console.log(typeof humanScore);
console.log(typeof computerScore);