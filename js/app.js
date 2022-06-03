/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";
const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");


 //const phrase = new Phrase('Life is like a box of chocolates'); 
 //console.log(`Phrase - phrase: ${phrase.phrase}`);

//  const game = new Game();
// game.phrases.forEach((phrase, index) => { console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => { console.log(`Phrase - phrase: `,phrase.phrase)
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase());

// const game = new Game(); 
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// const randomPhrase = game.getRandomPhrase(); const phrase = new Phrase(randomPhrase.phrase); phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


// Starts new game when start button is clicked

startButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
} )

// When keys on screen on clicked with mouse it triggers the handleInteraction function

keyboard.onclick = (e) => {
    let target = e.target;
    if (target.className === "key") {
        game.handleInteraction(target);
    };
};

// When keys on keyboard are used it triggers the handleInteraction function

document.addEventListener("keyup", (e) => {
    for (let i=0; i < keys.length; i++) {
        if (e.key === keys[i].innerHTML && keys[i].disabled === false) {
            game.handleInteraction(keys[i]);
        }
    }
});




















