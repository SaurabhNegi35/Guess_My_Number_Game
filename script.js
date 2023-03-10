'use strict';

// console.log(document.querySelector('.message').textContent);
let secretNumber = Math.trunc(Math.random()*20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', ()=> {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        // document.querySelector('.message').textContent = "â Not a Number";
        displayMessage("â Not a Number");
    } else if (guess === secretNumber){        
            // document.querySelector('.message').textContent = "ð Correct Guess";  
            displayMessage("ð Correct Guess");
            
            document.querySelector('body').style.backgroundColor = '#03c534'
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            
            if(score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

    } else if (guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = (guess >secretNumber) ? "ð Guess Too High" : "ð Guess Too Low";
            displayMessage((guess >secretNumber) ? "ð Guess Too High" : "ð Guess Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = "ðYou Loss the Game";
            displayMessage("ðYou Loss the Game");
            document.querySelector('.score').textContent = 0;
        }
    }
    
    
    // else if (guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = "ð Guess Too High";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "ðYou Loss the Game";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = "ð Guess Too Low";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "ðYou Loss the Game";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', ()=> {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = "Start Guessing...";
    displayMessage("Start Guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(30, 117, 247)';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

});
