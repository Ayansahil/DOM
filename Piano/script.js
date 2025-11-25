let allkeys = document.querySelectorAll(".key");

// Keyboard key -> Note mapping
const keyMap = {
  'a': 'C3', 's': 'D3', 'd': 'E3', 'f': 'F3', 'g': 'G3', 'h': 'A3', 'j': 'B3',
  'z': 'C4', 'x': 'D4', 'c': 'E4', 'v': 'F4', 'b': 'G4', 'n': 'A4', 'm': 'B4'
};

// Note -> sound file mapping
const noteToFile = {
  'C3': 'c.wav', 'D3': 'd.wav', 'E3': 'e.wav', 'F3': 'f.wav', 'G3': 'g.wav',
  'A3': 'a.wav', 'B3': 'b.wav', 'C4': 'c.wav', 'D4': 'd.wav', 'E4': 'e.wav',
  'F4': 'f.wav', 'G4': 'g.wav', 'A4': 'a.wav', 'B4': 'b.wav'
};

// Mouse click: play sound based on data-note
allkeys.forEach(function(key){
  key.addEventListener("click", function() {
    let note = this.getAttribute("data-note");
    let file = noteToFile[note];
    if (file) {
      let sound = new Audio('/tunes/' + file);
      sound.play();
    }
  });
});

// Keyboard (keydown): play sound based on pressed key
document.addEventListener("keydown", function(e) {
  let note = keyMap[e.key.toLowerCase()];
  let file = noteToFile[note];
  if (file) {
    let sound = new Audio('/tunes/' + file);
    sound.play();
  }
});
