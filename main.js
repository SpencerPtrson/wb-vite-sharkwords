import setupGuesses from './src/guess';
import getRandomWord from './src/randomWord';
import setSharkImage from './src/sharkImage';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word';
import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

let sharkImage = document.getElementById("shark-img");


const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

  setupWord(word, document.querySelector("#word-container"));
  setSharkImage(sharkImage, numWrong);

  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.disabled = true;
    if (isLetterInWord(letter)) revealLetterInWord(letter);
    else {
      numWrong++;
      setSharkImage(sharkImage, numWrong);
      if (numWrong >= 5) {
        console.log("too many wrong guesses");
        handleLoss();
      } 
    }
  };

  setupGuesses(document.querySelector("#letter-buttons"), handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();


const handleLoss = () => {
  alert("You lose!")
  let letterBoxes = document.querySelectorAll(".letter-buttons");
  console.log(letterBoxes);
  letterBoxes.forEach(box => box.disabled = true);
}