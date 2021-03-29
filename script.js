// Creates a variable for key elements .key


window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  console.log(e.code); // for testing purposes
  if(!audio) return; // check if audio selector exists
  audio.currentTime = 0; // resets Current Time for audio arg
  audio.play();
  key.classList.add('playing'); // change CSS style when pressing corresponding key
});


const keys = document.querySelectorAll('.key');
// iterate for every .key class element in the HTML and attach a EventListener
