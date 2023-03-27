let choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const randomElement = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomElement)
}