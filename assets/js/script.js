/**
 *create game variables for manipulating the DOM
 */
 let buttons = document.getElementsByTagName('button');
 let resultDisplay
 

let r = document.getElementById('r');
let p = document.getElementById('p');
let s = document.getElementById('s');



/** Add event listener for buttons used in the main game, code executes after the DOM content has completely been loaded */
document.addEventListener('DOMContentLoaded', function() {
    
    for (let button of buttons) {
        button.addEventListener('click', function() {
            let playerPlays = this.getAttribute('data-type');
            startGame(playerPlays);
            computerPlaysRandom()

        });
       
    }
}); 

/**The Game, here is the possible results of the computers and plyers choises of play*/
function startGame(playerPlays) {
    let computerPlays = computerPlaysRandom();
    if (playerPlays === 'rock' && computerPlays === 'paper') {
        document.getElementById('result-message').innerHTML = "Buu, You lose!"
    }
    if (playerPlays === 'paper' && computerPlays === 'rock') {
        document.getElementById('result-message').innerHTML = "Yeah, You win!"
    }
    if (playerPlays === 'scissors' && computerPlays === 'paper') {
        document.getElementById('result-message').innerHTML = "Yeah, You win!"
    }
    if (playerPlays === 'scissors' && computerPlays === 'rock') {
        document.getElementById('result-message').innerHTML = "Buu, You lose!"
    }
    if (playerPlays === 'paper' && computerPlays === 'rock') {
        document.getElementById('result-message').innerHTML = "Buu, You lose!"
    }
    if (playerPlays === 'rock' && computerPlays === 'scissors') {
        document.getElementById('result-message').innerHTML = "Yeah, You win!"
    }
    else if (playerPlays === computerPlays) {
        document.getElementById('result-message').innerHTML = "Oh,It's a draw!"
    }
    resultDisplay = result;

}

function computerPlaysRandom() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = (Math.floor(Math.random() * 3)+1);
    return choices[randomNumber]; 
}

function result() {

}

function incrementScore() {

}

function winningText() {

}

function lostText() {

}

function playAgain() {

}
