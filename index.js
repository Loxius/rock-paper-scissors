const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let p = 1;
let c = 1;

let playerSelection;
let computerSelection;

function getInt()   {
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection) {
    computerSelection = getInt();

    if(playerSelection == 2 && computerSelection == 0 ||
        playerSelection == 0  && computerSelection == 1 ||
            playerSelection == 1 && computerSelection == 2) {
        computer.textContent = "Computer Score: " + c++;

    } else if(playerSelection == 0 && computerSelection == 2 ||
                playerSelection == 1 && computerSelection == 0 ||
                    playerSelection == 2 && computerSelection == 1) {
        player.textContent = "Player Score: " + p++;

    }
}

playRound();

rock.addEventListener("click", function () {
        playRound(0);
    });

paper.addEventListener("click", function () {
        playRound(1);
    });

scissors.addEventListener("click", function () {
        playRound(2);
    });