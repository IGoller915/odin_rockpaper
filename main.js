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

function game(){
    const rounds = prompt("How Many Rounds?")
    let playerWins = 0
    let computerWins = 0

    for (let i=0; i<rounds; i++){
        roundResult = playRound()
        if (roundResult == "Tie"){
            console.log(roundResult)
            continue
        }

        if (roundResult == "Player Wins"){
            console.log(roundResult)
            playerWins++
        }

        if (roundResult == "Computer Wins"){
            console.log(roundResult)
            computerWins++
        }
    }

    if (playerWins>computerWins){
        winText = "Player Wins Game"
    }else if (playerWins==computerWins){
        winText="Game is a Tie"
    }else{
        winText="Computer Wins Game"
    }

    return `Score is Player:${playerWins} to Computer: ${computerWins}. ${winText}.`
}