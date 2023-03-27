let choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomElement)
}

function getPlayerChoice(){
    const playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        if (choices.includes(playerChoice)){
            console.log(playerChoice)
        } else {console.log('invalid entry')}
}