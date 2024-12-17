let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.random();

    if (randomValue < 1 / 3) {
        return 'rock';
    } else if (randomValue < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}




let resultMessage = "";
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage = `human wins! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        resultMessage = `Computer wins! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    return resultMessage;
}

function handlePlayerSelection(playerSelection){
    const computerSelection = getComputerChoice();
    const resultMessage = playRound(playerSelection, computerSelection);

    if (resultMessage.includes("wins")){
        humanScore += (resultMessage.includes("human")? 1 : 0);
        computerScore += (resultMessage.includes("Computer")? 1 : 0);
    }

    updateDOM(resultMessage);
    checkForWinner();
}

function updateDOM(resultMessage){
    document.getElementById("results").innerText = `Round Result: ${resultMessage}`;
    document.getElementById("score").innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkForWinner(){
    if (humanScore === 5){
        alert("You won the game!");
        resetGame();
    }
    else if (computerScore === 5){
        alert("You got your ass beaten by a computer!!!");
        resetGame();
    }
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    updateDOM("");
}



function playGame() {
    document.getElementById("rock").addEventListener('click', ()=> handlePlayerSelection("rock"));
    document.getElementById("paper").addEventListener('click', ()=> handlePlayerSelection("paper"));
    document.getElementById("scissors").addEventListener('click', ()=> handlePlayerSelection("scissors"));
}

playGame();
