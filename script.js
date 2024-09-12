const reset = document.querySelector(".reset")
const score = document.querySelector(".scores")
const result = document.querySelector(".result")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    let computerChoice = "";

    if(randomNumber == 1) {
        computerChoice = "rock"
    } else if(randomNumber == 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice
}
  
function playRound(humanChoice, computerChoice) {
    
    if(humanChoice == computerChoice){
        result.textContent = `It's a tie! ${humanChoice} can't beat ${computerChoice}`
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++ 
    } else {
        result.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    }

    updateScore()
    verifyWinner()
}

function verifyWinner(){
    if(humanScore == 5){
        result.textContent = "You Won!"
    } else if(computerScore == 5){
        result.textContent = "You Lost!"
    }
}

function updateScore() {
    score.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`
}

document.querySelector(".btnReset").addEventListener("click", () => {
    humanScore = 0
    computerScore = 0
    updateScore()
    result.textContent = ``
})

document.querySelector(".rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})

document.querySelector(".paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})

document.querySelector(".scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})

updateScore()