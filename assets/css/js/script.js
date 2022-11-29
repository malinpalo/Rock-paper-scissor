/** Create game variables for DOM elements*/
const buttons = ducument.getElementsByClassName('btns');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const results = document.getElementById('results');
const choises = ['rock', 'paper', 'scissors'];
let playerscore = 0;
let computerscore = 0;

/**Add event listeners */
document.addEventListener("DOMContentLoaded", function () {
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let rollPlayer = this.getAttribute("data-result");
            playGame(rollPlayer);

            setTimeout(function () {
                returnGame(userAnswer);
            }, 4000);
        });
    }
});


