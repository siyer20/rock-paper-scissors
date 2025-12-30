//function to randomize computer play
function getComputerChoice(){
    switch(Math.floor(Math.random()*10)%3){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }

}

// //function for a single round of gameplay
function playRound (humanChoice){
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice){
        return console.log("It's a tie!");
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") ||
             (humanChoice == "paper" && computerChoice == "rock") ||
             (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") ||
             (humanChoice == "paper" && computerChoice == "scissors") ||
             (humanChoice == "scissors" && computerChoice == "rock")){
        compScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    else{
        return console.log("Invalid input! Please enter rock, paper, or scissors.");
    }
}

let btns = document.querySelectorAll("button");


// //declaring global score variables
// let humanScore = 0;
// let compScore=0;

// //loop to play this game!

// console.log("Welcome to Rock, Paper, Scissors! First to 5 wins!")

// while (humanScore < 5 && compScore < 5){
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
//     console.log(`Score - You: ${humanScore}, Computer: ${compScore}`);
// }

