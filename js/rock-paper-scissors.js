/*

getHumanrChoice

prompt anzeigen, 
inhalt als return Value laden




*/

const questionForUser = "What do you chose, rock, paper or scissors?"

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
};/*
function getFirstLetterLowerCase(string){
    let newString = string.toLowerCase();
    return newString.slice(0,1);
};
let computerChoice = "scissors";
let humanChoice = "rock"
*/
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(humanChoice);
console.log(computerChoice);

function getResult(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a draw")
    } else if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            console.log("You win")
        } else if (computerChoice === "paper"){
            console.log("The computer wins")
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log("The computer wins")
        } else if (computerChoice === "rock"){
            console.log("You win")
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            console.log("The computer wins")
        } else if (computerChoice === "paper"){
            console.log("You win")
        }
    }
}
getResult(humanChoice, computerChoice)
