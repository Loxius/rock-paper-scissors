let computerSelection;
let computerChoice;
let playerSelection;
let playerChoice;

let c = 0;
let p = 0;

function getInt()   {
    return Math.floor(Math.random() * 3)
}

function getComputerChoice()    {
    let choice;
    if (computerSelection == 0)  {
        choice = "Rock";
    } else if (computerSelection == 1)   {
        choice = "Paper";
    } else{
        choice = "Scissors";
    }
    return choice
}

function getPlayerChoice()    {
    let choice;
    if (playerSelection == 0)  {
        choice = "Rock";
    } else if (playerSelection == 1)   {
        choice = "Paper";
    } else{
        choice = "Scissors";
    }
    return choice
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == 0 && computerSelection == 1) {
        return console.log("You lose! Computer chose " + computerChoice + " and you chose " + playerChoice + "\nP: " + p + " C: " + c++);
    } else if(playerSelection == 0 && computerSelection == 2)  {
        return console.log("You win! Computer chose " + computerChoice + " and you chose " + playerChoice + "\nP: " + p++ + " C: " + c);
    } else if(playerSelection == 1 && computerSelection == 0)  {
        return console.log("You win! Computer chose " + computerChoice + " and you chose " + playerChoice + "\nP: " + p++ + " C: " + c);
    } else if(playerSelection == 1 && computerSelection == 2)  {
        return console.log("You lose! Computer chose " + computerChoice + " and you chose " + playerChoice + "\nP: " + p + " C: " + c++);
    } else if(playerSelection == 2 && computerSelection == 0)  {
        return console.log("You lose! Computer chose " + computerChoice + " and you chose " + playerChoice + "\nP: " + p + " C: " + c++);
    } else if(playerSelection == 2 && computerSelection == 1)  {
        return console.log("You win! Computer chose " + computerChoice + " and you chose " + playerChoice + "\nP: " + p++ + " C: " + c);
    } else {
        return console.log("It's a draw! Computer chose " + computerChoice + " and you chose " + playerChoice + "\nP: " + p++ + " C: " + c++);
    }
}

function playGame() {
    computerSelection = getInt();
    computerChoice = getComputerChoice();
    playerSelection = prompt("Rock = 0\nPaper = 1\nScissors = 2");
    playerChoice = getPlayerChoice();
    playRound(playerSelection, computerSelection);
}