// 1) Saari piano keys select kari
let keys = document.querySelectorAll(".key");

// 2) Har key pe click event lagaya
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    let soundName = key.dataset.note; // HTML se data-note attribute lo

    if (soundName) {
      key.classList.add("active"); // Active effect
      playSound(soundName); // Sound play karo

      setTimeout(function () {
        key.classList.remove("active"); // Remove effect
      }, 200);
    }
  });
});

// 3) Keyboard se key press karne pe
document.body.addEventListener("keydown", function (event) {
  let keyPressed = event.key.toLowerCase(); // Jo key press hui uska naam liya (lowercase me)

  // HTML me us key ko dhunda jo data-note match kare
  let pressedKey = document.querySelector(`[data-note="${keyPressed}"]`);

  if (pressedKey) {
    pressedKey.classList.add("active"); // Active effect
    playSound(keyPressed); // Sound play karo

    setTimeout(function () {
      pressedKey.classList.remove("active"); // Remove effect
    }, 200);
  }
});

// 4) Sound play karne wala function
function playSound(name) {
  let audio = new Audio(`./sounds/${name}.wav`); // Sound file load kari
  audio.currentTime = 0; // Sound ko start se play karo
  audio.play().catch(function (error) {
    // Error handle
  });
}
