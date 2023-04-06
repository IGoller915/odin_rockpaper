let choices = ['rock', 'paper', 'scissors']

let playerWins = 0
let computerWins = 0

let resultText = document.querySelector('.result')

let playerSelectionText = document.querySelector('#player-selection')
let playerScoreText = document.querySelector('#player-score')

let computerSelectionText = document.querySelector('#computer-selection')
let computerScoreText = document.querySelector('#computer-score')

buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click', resultUpdate))


function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

function getPlayerChoice(e){
    const playerChoice = this.textContent.toLowerCase();
        if (choices.includes(playerChoice)){
            return playerChoice
        } else {console.log('invalid entry')}
}

function playRound(playerChoice, computerChoice) {
    
    if (playerChoice == computerChoice) {
        return "Tie"
    } 

    if (playerChoice=='rock' && computerChoice=='scissors'){
        return "Player Wins"
    }

    if (playerChoice=='rock' && computerChoice=='paper'){
        return "Computer Wins"
    }

    if (playerChoice=='paper' && computerChoice=='scissors'){
        return "Computer Wins"
    }

    if (playerChoice=='paper' && computerChoice=='rock'){
        return "Player Wins"
    }

    if (playerChoice=='scissors' && computerChoice=='rock'){
        return "Computer Wins"
    }

    if (playerChoice=='scissors' && computerChoice=='paper'){
        return "Player Wins"
    }
}

function resultUpdate(e){
    const selection = this.textContent
    const playerChoice = selection.toLowerCase()
    const computerChoice = getComputerChoice()

    computerSelectionText.textContent = `Computer Selection: ${computerChoice}`
    playerSelectionText.textContent = `Player Selection: ${playerChoice}`
    
    
    roundResult = playRound(playerChoice, computerChoice)

    resultText.textContent = roundResult

    if (roundResult == "Player Wins"){
        playerWins++
        playerScoreText.textContent = `Player Score: ${playerWins}`
    }

    if (roundResult == "Computer Wins"){
        computerWins++
        computerScoreText.textContent = `Computer Score: ${computerWins}`
    }       
        
}

