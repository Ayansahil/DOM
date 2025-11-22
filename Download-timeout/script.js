let btn = document.querySelector("button");
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let progress = document.querySelector(".progress");

let grow = 0;

btn.addEventListener("click", () => {
  let tm = setInterval(() => {
    if (grow <= 99) {
        grow++;
      inner.style.width = `${grow}%`;
      progress.innerHTML = `${grow}%`;
    }
  }, 200);
});
clearInterval(tm);
