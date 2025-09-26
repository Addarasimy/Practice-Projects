const buttonEl = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

function computerMove() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoices = Math.floor(Math.random()* choices.length);
    return choices[randomChoices];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultEl.textContent = "It's a tie!";
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        userScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

buttonEl.forEach(button => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerMove()); 
        resultEl.textContent = result;
        userScoreEl.textContent = userScore;
        computerScoreEl.textContent = computerScore;

    })
});