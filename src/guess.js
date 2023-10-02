const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  // do this code for each letter of the alphabet
  alphabet.split('').forEach((letter) => {
    const btn = document.createElement('button'); // create a button
    btn.innerText = letter; // set the text of the button to the letter
    btn.className = "letter-buttons";
    btn.addEventListener('click', (e) => handleGuess(e, letter)); // call "Handle Guess" when button is clicked, passing in the letter
    element.append(btn); // add button to screen
  });
}

export default setupGuesses;
