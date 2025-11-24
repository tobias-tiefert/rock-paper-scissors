/*

getHumanrChoice

prompt anzeigen, 
inhalt als return Value laden




*/

const questionForUser = "What do you chose, rock, paper or scissors?";

let humanScore = 0; 
let computerScore = 0;

function displayWinner(winner){
    if (winner === "computer"){
        console.log("The computer wins");
        computerScore++;
    } else if (winner === "human"){
        console.log("You win");
        humanScore++;
    }
}

function getIntegerBetween1andN(n){
    return Math.ceil( Math.random() * n)
}


function getComputerChoice(){
    let choice = getIntegerBetween1andN(3);
    switch(choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice(){
    return prompt(questionForUser);
};


function playGame(){
    humanScore = 0; 
    computerScore = 0;

    function playRound(){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice){
            console.log("It's a draw")
        } else if (humanChoice === "rock"){
            if (computerChoice === "scissors"){
                displayWinner("human");
            } else if (computerChoice === "paper"){
                displayWinner("computer");
            }
        } else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                displayWinner("computer");
            } else if (computerChoice === "rock"){
                displayWinner("human");
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                displayWinner("computer");
            } else if (computerChoice === "paper"){
                displayWinner("human");
            }
        }
    }

    for(let i = 0; i < 5; i++){
        playRound();
        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        console.log("Rounds played: "+ (i+1));
        console.log("------------------------------------")
    };

    if(humanScore > computerScore){
        console.log("You won the game!")
    } else if(humanScore < computerScore){
        console.log("The computer won the game")
    } else{
        console.log("The game was a draw")
    };
}

playGame();
