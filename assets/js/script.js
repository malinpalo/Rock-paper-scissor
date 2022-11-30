/**
 *create game variables for manipulating the DOM
 */
 let buttons = document.getElementsByTagName('button');


let r = document.getElementById('r');
let p = document.getElementById('p');
let s = document.getElementById('s');



/** Add event listener for buttons used in the main game, code executes after the DOM content has completely been loaded */
document.addEventListener('DOMContentLoaded', function() {
    
    for (let button of buttons) {
        button.addEventListener('click', function() {
            let playerPlays = this.getAttribute('data-type');
            startGame(playerPlays);
        });
       
    }
}); 

/**The Game, here is the possible results of the computers and plyers choises of hands */
function startGame(playerPlays) {
    let computerPlay = computersPlay
    console.log(button)

}

function computersPlay() {

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
