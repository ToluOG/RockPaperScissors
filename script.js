// Variables for tracking the scores for the player/computer.
let rounds = 1;
let humanScore = 0;
let computerScore = 0;

let humanSelection = null;
let computerSelection = null;

// Randomly returns a choice between rock, paper and scissors.
function getComputerChoice() {
    let random = Math.random();

    if (random >= 0 && random < 1/3) {
        return 'rock';
    }
    else if (random >= 1/3 && random < 2/3) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// Displays a prompt window, during which the player must input their choice between rock, paper and scissors.
// Works based on case-insensitive string input.
function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Enter your choice: (rock / paper / scissors)");
        if (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
            console.log("Invalid player input! Please try again.");
        }
        else return humanChoice.toLowerCase();
    }
}

// Controls the way each round is played.
function playRound(humanChoice, computerChoice) {
    console.log('You chose ' + humanChoice + ' and computer chose ' + computerChoice + '.');
    if (humanChoice == computerChoice) {
        
        console.log('Draw! No one gets points!');
    }
    else if (humanChoice == 'rock') {
        if (computerChoice == 'scissors') {
            console.log('You win the round! Rock beats scissors.');
            humanScore++;
        }
        else {
            console.log('You lose the round! Paper beats rock.');
            computerScore++;
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log('You win the round! Paper beats rock.');
            humanScore++;
        }
        else {
            console.log('You lose the round! Scissors beats paper.');
            computerScore++;
        }
    }
    else {
        if (computerChoice == 'paper') {
            console.log('You win the round! Scissors beats paper.');
            humanScore++;
        }
        else {
            console.log('You lose the round! Rock beats scissors.');
            computerScore++;
        }
    }
    console.log('Current score: ');
    console.log('Player   - ' + humanScore);
    console.log('Computer - ' + computerScore);
}

// Controls how the entire game is played.
// Hardcoded to have a player play 5 rounds against the computer.
function playGame() {
    while (rounds <= 5) {
        console.log('Round ' + rounds);
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        rounds++;
    }
    console.log('Final score:');
    console.log('Player   - ' + humanScore);
    console.log('Computer - ' + computerScore);

    if (humanScore > computerScore) {
        console.log('You win the game!');
    }
    else if (computerScore < humanScore) {
        console.log('You lose the game!');
    } 
    else {
        console.log('Its a draw!');
    }
    
}