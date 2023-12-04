const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = 
`Willy the Goblin\n
Big Daddy\n
Father Christmas`;
let insertY = 
`the soup kitchen\n
Disneyland\n
the White House`;
let insertZ = 
`spontaneously combusted\n
melted into a puddle on the sidewalk\n
turned into a slug and crawled away`;

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/:insertx:/g, xItem); // Use regular expression to replace all occurrences
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);
    newStory = newStory.replace(/:insertx:/g, name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    newStory = newStory.replace('94 fahrenheit', `${temperature} centigrade`); // Update temperature in Celsius
    newStory = newStory.replace('300 pounds', `${weight} stone`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


