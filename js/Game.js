/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const startScreen = document.getElementById("overlay");
const hearts = document.querySelectorAll(".tries");


 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase ("Get a taste of your own medicine"),
                        new Phrase ("Better late than never"), 
                        new Phrase ("Break a leg"),
                        new Phrase ("Hang in there"),
                        new Phrase ("Make a long story short")]
        this.activePhrase = null
    }

/**
 * Begins game by selecting a random phrase and displaying it to user
 */
     startGame(){

     ul.innerHTML = "";
        for (let i = 0; i < keys.length; i++) {
            keys[i].className = "key";
            keys[i].disabled = false;
        };
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].firstChild.src = "images/liveHeart.png";
        }
        this.missed = 0;
        startScreen.style.display = "none";
        this.activePhrase = new Phrase(this.getRandomPhrase()); 
        this.activePhrase.addPhraseToDisplay();    
     }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase(){
        let phrasesNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phrasesNum].phrase;
    }

    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.phrase.includes(button.innerHTML)) {
            button.className += " chosen";
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if (this.checkForWin()) {
                this.gameOver(true);
            };
        } else {
            button.className += " wrong";
            this.removeLife();
        };
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

     removeLife() {
       this.missed += 1;
       let heartIndex = hearts.length - this.missed;
       if (this.missed < 5) {
           hearts[heartIndex].firstChild.src = "images/lostHeart.png"
       } else {
           this.gameOver(false);
       };
   };

    /**
     * Checks for winning move by looking for any letters with the "hide" class
     */

     checkForWin() {
        let remainingLetters = 0
        for (let i = 0; i < ul.children.length; i++) {
            if (ul.children[i].className.includes("hide")) {
                remainingLetters++;
            };
        };
        if (remainingLetters === 0) {
            return true;
        };
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

    gameOver(gameWon) {
        let message = document.getElementById("game-over-message");
        if (gameWon) {
           startScreen.style.display = "initial";
           startScreen.className = "win";
           message.innerHTML = `You Win! The phrase was <em>"${this.activePhrase.phrase}"</em> 🎆🎇🎈🎉 🎊` 
        } else {
            startScreen.style.display = "initial";
            startScreen.className = "lose";
            message.innerHTML = `You lose! The phrase was <em>"${this.activePhrase.phrase}"</em>` 
        }; 
   };
}