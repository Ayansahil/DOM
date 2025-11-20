let inc = document.querySelector("#increment");
let dec = document.querySelector("#decrement");
let h2 = document.querySelector("h2");

let count = 0;

function updateCounter() {
  h2.innerText = count;
  if (count < 0) {
    h2.style.color = "red";
  } else {
    h2.style.color = "white";
  }
}

inc.addEventListener("click", () => {
  count++;
  updateCounter();
});

dec.addEventListener("click", () => {
  count--;
  updateCounter();
});


updateCounter();
