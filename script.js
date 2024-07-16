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

function getHumanChoice() {
    let choice = prompt("Your choice: ").toUpperCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || 
    (humanChoice === "SCISSORS" && computerChoice === "PAPER") || 
    (humanChoice === "PAPER" && computerChoice === "ROCK")) {
        console.log("Your choice was " + humanChoice + " and the computer choice was " + computerChoice);
        console.log("You won this round!");
        humanScore ++;
        // console.log(humanScore);
    }

    else if (humanChoice === computerChoice) {
        console.log("Your choice was " + humanChoice + " and the computer choice was " + computerChoice);
        console.log("Its a tie this round!");
        // console.log(humanScore);
    }

    else {
        console.log("Your choice was " + humanChoice + " and the computer choice was " + computerChoice);
        console.log("You lost this round!");
        computerScore ++;
        // console.log(humanScore);
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }

    else if (humanScore === computerScore) {
        console.log("Its a tie!");
    }
    else {
        console.log("You lost the game!");
    }
}


playGame();