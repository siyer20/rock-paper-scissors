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

}//function to get user's play
let getHumanChoice = () => prompt("What's your play?");
