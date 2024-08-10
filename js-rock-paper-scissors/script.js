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
        resultMessage = "It's a tie!";
        console.log(resultMessage);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage = "human wins!";
    } else {
        resultMessage = "Computer wins!";
    }

    // Detailed message
    if (resultMessage === "human wins!") {
        switch (humanChoice) {
            case "rock":
                console.log("You win! Rock beats Scissors.");
                break;
            case "scissors":
                console.log("You win! Scissors beats Paper.");
                break;
            case "paper":
                console.log("You win! Paper beats Rock.");
                break;
        }
    } else {
        switch (computerChoice) {
            case "rock":
                console.log("You lose! Rock beats Scissors.");
                break;
            case "scissors":
                console.log("You lose! Scissors beats Paper.");
                break;
            case "paper":
                console.log("You lose! Paper beats Rock.");
                break;
        }
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        function getHumanChoice() {
            let userValue = prompt("Round " + (i+1) + "\nEnter your choice => 'rock', 'paper' or 'scissors' : ");
            return userValue.toLowerCase();
        }
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        if (resultMessage === "human wins!"){
            humanScore += 1;
        } else if (resultMessage === "Computer wins!"){
            computerScore += 1;
        }
    }

    console.log("\nFinal scores are as follows:-");
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);

    if (humanScore > computerScore){
        alert("You won the game!");        
    } else {
        alert("You lose the game!");
    }
}

playGame();
