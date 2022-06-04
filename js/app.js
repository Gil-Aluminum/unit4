/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";
const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");


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
    for (let i = 0; i < keys.length; i++) {
        if (e.key === keys[i].innerHTML && keys[i].disabled === false) {
            game.handleInteraction(keys[i]);
        }
    }
});



