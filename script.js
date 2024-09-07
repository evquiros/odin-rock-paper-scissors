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

function getHumanChoice() {
    let humanChoice = ""
    
    humanChoice = prompt("Choose between Rock, Paper or Scissors: ")
    humanChoice.toLowerCase()

    return humanChoice
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    function playRound(humanChoice, computerChoice) {
    
        if(humanChoice == computerChoice){
            console.log(`It's a tie! ${humanChoice} can't beat ${computerChoice}`)
        } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++ 
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }

    function verifyWinner(humanScore, computerScore){
        if (humanScore == computerScore) {
            console.log(`It's a Tie!`)
        } else if(humanScore > computerScore){
            console.log("You Won!")
        } else {
            console.log("You Lost!")
        }
    }
    
    for (let i = 1; i <= 5; i++) {
        console.log(`Round number: ${i}`)

        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
        console.log(`Your score: ${humanScore}\nComputer's score: ${computerScore}`)
    }

    verifyWinner(humanScore, computerScore)
}

playGame()