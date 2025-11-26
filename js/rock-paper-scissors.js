/*
TO DO:

Event Listener um user antwort per Klick zu erhalten
nach klick auswertung starten
    -> delay und animation vor der auswertung
nach auswertung 
    -> Nachricht aktualisieren 
    -> punktestand aktualisieren und anzeigen 
    -> round ++ 
    -> Button anzeigen um nächste runde zu spielen
    -> css klassen auf karten setzen (coputer-choice, user-choice, same-choice, not-choosen)
in der letzten Runde: Button zum ergebnis anzeigen, abhängig davon, wer das Spiel gewonnen hat (unterschiedlicher Link)

Zusatz:
-> ladeanmiation für Button (Nächste Runde) -> Nach x Sekunden startet runde automatisch, zeitverlauf wird bei Button angezeigt (analog Netflix)

*/

const resultWon     = "You win 🎉";
const resultLost    = "Servar wins 😭";
const resultDraw    = "It’s a draw 😕";
const messageStart  = "choose your weapon";

const buttonContainer   = document.querySelector("#btn-container");

const linkWon       = "result-won.html";
const linkLost      = "result-lost.html";
const linkDraw      = "result-draw.html";

const messageDiv    = document.querySelector("div.message");
const gameOptions   = document.querySelector("#game-options");
const rock          = document.querySelector("li#rock");
const paper         = document.querySelector("li#paper");
const scissors      = document.querySelector("li#scissors");
const rounds        = document.querySelector(".rounds");
const score        = document.querySelector("#score");
let humanClick      = undefined;
let computerClick   = undefined;
let computerChoice  = "";
let humanChoice = "";
let round           = 1;
let computerPoints  = document.querySelector("#computer-points");
let humanPoints  = document.querySelector("#user-points");
let buttonAdded = false; 
let pointsAdded = false;
let userDidChoose = false;

function updateText(element, text){
    element.textContent = text;
};
function updateInnerHTML(element, text){
    element.innerHTML = text;
};
updateInnerHTML(rounds, `Round ${round}<span> of 5</span>`)

function getHumanChoice(){
    let target = event.target;
    if (userDidChoose === false){
        if(target.id === "rock" || target.id === "rock-img"){
        humanChoice = "rock";
        humanClick = rock;
        checkResult();
    } else if(target.id === "paper" || target.id === "paper-img"){
        humanChoice = "paper";
        humanClick = paper;
        checkResult();
    } else if(target.id === "scissors" || target.id === "scissors-img"){
        humanChoice = "scissors";
        humanClick = scissors;
        checkResult();
    }
};

    }
    
    


let humanScore = 0; 
let computerScore = 0;

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


function playRound(){
        
        computerChoice = getComputerChoice();
        gameOptions.addEventListener("click", getHumanChoice);

    }
function computerWonRound(){
    updateText(messageDiv, resultLost);
    computerScore++;
    let newPoint  = document.createElement("li");
    computerPoints.appendChild(newPoint);
    humanClick.classList.add("user-choice");
}
function humanWonRound(){
    updateText(messageDiv, resultWon);
    humanScore++;
    let newPoint  = document.createElement("li");
    humanPoints.appendChild(newPoint);
    humanClick.classList.add("user-choice");
}
function checkResult(){
        if (humanChoice === computerChoice){
            updateText(messageDiv, resultDraw);
            humanClick.classList.add("same-choice");
            if(humanClick === rock){
                scissors.classList.add("not-choosen");
                paper.classList.add("not-choosen");
            } else if(humanClick === paper){
                rock.classList.add("not-choosen");
                scissors.classList.add("not-choosen");
            } else if(humanClick === scissors){
                rock.classList.add("not-choosen");
                paper.classList.add("not-choosen");
            } 

        } else if (humanChoice === "rock"){
            if (computerChoice === "scissors"){
                humanWonRound();
                scissors.classList.add("computer-choice");
                paper.classList.add("not-choosen");
            } else if (computerChoice === "paper"){
                computerWonRound();
                paper.classList.add("computer-choice");
                scissors.classList.add("not-choosen");
            }
        } else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                computerWonRound();
                scissors.classList.add("computer-choice");
                rock.classList.add("not-choosen");
            } else if (computerChoice === "rock"){
                
                humanWonRound();
                rock.classList.add("computer-choice");
                scissors.classList.add("not-choosen");
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                computerWonRound();
                rock.classList.add("computer-choice");
                paper.classList.add("not-choosen");
            } else if (computerChoice === "paper"){
                humanWonRound();
                paper.classList.add("computer-choice");
                rock.classList.add("not-choosen");
            }
        }
    userDidChoose = true;
    let buttonNextRound = document.createElement("a");
    if(buttonAdded === false){
        buttonAdded = true; 
        buttonContainer.classList.add("btn-container-bg-fix");
        score.classList.add("extra-margin");

        if(round < 5){
        round++;
        buttonNextRound.textContent = "Next round";
        buttonNextRound.classList.add("btn");
        buttonNextRound.addEventListener("click", startNewRound)
        buttonContainer.appendChild(buttonNextRound);
    } else{
        buttonNextRound.textContent = "See result";
        buttonNextRound.classList.add("btn");
        if(humanScore === computerScore){
            buttonNextRound.href = linkDraw;
        } else if(humanScore > computerScore){
            buttonNextRound.href = linkWon;
        } else if(humanScore < computerScore){
            buttonNextRound.href = linkLost;
        }
        buttonContainer.appendChild(buttonNextRound);
    }
    }
    
}
function startNewRound(){
    userDidChoose = false;
    buttonContainer.classList.remove("btn-container-bg-fix");
    score.classList.remove("extra-margin");
    let buttonRemove = document.querySelector("a.btn");
    updateInnerHTML(rounds, `Round ${round}<span> of 5</span>`)
    scissors.classList.remove("user-choice");
    scissors.classList.remove("same-choice");
    scissors.classList.remove("computer-choice");
    scissors.classList.remove("not-choosen");
    rock.classList.remove("user-choice");
    rock.classList.remove("same-choice");
    rock.classList.remove("computer-choice");
    rock.classList.remove("not-choosen");
    paper.classList.remove("user-choice");
    paper.classList.remove("same-choice");
    paper.classList.remove("computer-choice");
    paper.classList.remove("not-choosen");
    buttonContainer.removeChild(buttonRemove);
    updateText(messageDiv, messageStart)
    buttonAdded = false;
    playRound()
}
function playGame(){
    humanScore = 0; 
    computerScore = 0;
    playRound()
    
}
playGame()
