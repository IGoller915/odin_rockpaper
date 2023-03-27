let choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice)
    return computerChoice
}

function getPlayerChoice(){
    const playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        if (choices.includes(playerChoice)){
            return playerChoice
        } else {console.log('invalid entry')}
}

function playRound() {
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()

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