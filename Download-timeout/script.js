let btn = document.querySelector("button");
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let progress = document.querySelector(".progress");
let h1 = document.querySelector("h1");

let grow = 0;
let tm = null;

btn.addEventListener("click", () => {
  if (tm) return; // multiple click se bachne ke liye (optional)

  tm = setInterval(() => {
    if (grow < 100) {
      grow++;
      // 100% = 360deg, isliye 3.6 * grow
      outer.style.background = `
        radial-gradient(closest-side, #e3edf7 79%, transparent 80% 100%),
        conic-gradient(#4caf50 ${grow * 3.6}deg, #e3edf7 0deg)
      `;
      progress.innerHTML = `${grow}%`;
      h1.innerHTML = "Downloading...";
      h1.style.color = "black";
    } else {
      h1.innerHTML = "Downloaded!!!";
      h1.style.color = "green";
      clearInterval(tm);
    }
  }, 50);
});
