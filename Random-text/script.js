let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  let div = document.createElement("div");

  div.style.width = "200px";
  div.style.height = "200px";
  div.style.position = "absolute";

  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let r = Math.random() * 360;
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.rotate = r + "deg";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

  main.appendChild(div);
});
