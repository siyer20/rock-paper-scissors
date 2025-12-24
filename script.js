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

//function to get user's play
let getHumanChoice = () => prompt("What's your play?");

//function for a single round of gameplay
function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase().trim();

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
}


//declaring global score variables
let humanScore = 0;
let compScore=0;