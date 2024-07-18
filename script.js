let humanScore, computerScore;
humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;
    /* make sure to declare variables outside the block, so that if they change
    it will also be reflected outside the block
    */
    if (randomNumber === 0) {
        choice = "rock".toUpperCase();
    }

    else if (randomNumber === 1) {
        choice = "paper".toUpperCase();
    }

    else {
        choice = "scissors".toUpperCase();
    }

    return choice;
}

function updateScoreDisplay(humanScore, computerScore) {
    const playerScoreElement = document.querySelector(".player-score");
    const computerScoreElement = document.querySelector(".computer-score");

    playerScoreElement.textContent = `Player: ${humanScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    
}
function updateItemPlayed(humanChoice, computerChoice) {
    const itemsPlayed = document.querySelector(".played")
    itemsPlayed.textContent = `You played ${humanChoice} and the computer played ${computerChoice}`;
}


function playRound(humanChoice, computerChoice) {
    const winnerText = document.querySelector(".Winner");
    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || 
    (humanChoice === "SCISSORS" && computerChoice === "PAPER") || 
    (humanChoice === "PAPER" && computerChoice === "ROCK")) {
        humanScore ++;
        if (humanScore === 5) {
            winnerText.textContent = `The game is over! You won!`;
            updateScoreDisplay(humanScore, computerScore);
            updateItemPlayed(humanChoice, computerChoice);
            return;
        }
        else {
            winnerText.textContent = `You win this round!`;
        }
    
    }

    else if (humanChoice === computerChoice) {
        winnerText.textContent = `This round is a tie!`;
    }

    else {
        computerScore ++;
        if (computerScore === 5) {
            winnerText.textContent = `The game is over! You lost!`;
            updateScoreDisplay(humanScore, computerScore);
            updateItemPlayed(humanChoice, computerChoice);
            return;
        }
        else {
            winnerText.textContent = "You lost this round! The computer wins this round!";
        }
    
    }

    updateScoreDisplay(humanScore, computerScore);
    updateItemPlayed(humanChoice, computerChoice);
}


const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissors = document.querySelector(".Scissors");
rock.addEventListener("click", function() {
    playRound("ROCK", getComputerChoice());
});
paper.addEventListener("click", function() {
    playRound("PAPER", getComputerChoice());
});
scissors.addEventListener("click", function() {
    playRound("SCISSORS", getComputerChoice());
});


