/**
 *create game variables for manipulating the DOM
 */
 const buttons = document.getElementsByTagName('button');


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
        startGame.addEventListener('click',beginGame);
    }
}); 





