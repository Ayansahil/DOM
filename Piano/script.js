let keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
  key.addEventListener("click", function () {
    let soundName = key.dataset.note; // data-note se naam milega
    playSound(soundName);
   
  });
});

document.body.addEventListener("keydown", function (event) {
  let keyPressed = event.key.toLowerCase();
  playSound(keyPressed);
});

// 4) Yeh function sound play karega
function playSound(name) {
  let audio = new Audio(`./sounds/${name}.wav`);
  audio.currentTime = 0;
  audio.play();
}
