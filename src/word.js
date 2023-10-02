let word;

function setupWord(initWord, element) {
  word = initWord;
  word.split('').forEach(() => {
    element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
  });
}

function isLetterInWord(letter) {
  return word.includes(letter);
}

function revealLetterInWord(letter) {
  let letterBoxes = document.querySelectorAll(".letter-box");
  for(let i = 0; i < word.length; i++) {
    if(word[i] === letter) letterBoxes[i].textContent = word[i];
  }
}

export {setupWord, isLetterInWord, revealLetterInWord};