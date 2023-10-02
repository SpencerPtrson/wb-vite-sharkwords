import sample from 'lodash.sample';
const words = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

function getRandomWord() { return sample(words);}

export default getRandomWord; // export a default because it's the only thing we're exporting