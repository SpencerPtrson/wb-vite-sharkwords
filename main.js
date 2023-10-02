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

  revealLetterInWord(word[0]);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
