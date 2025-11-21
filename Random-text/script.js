let btn = document.querySelector("button");
let main = document.querySelector("main");

let arr = [
  "Islam Makhachev",
  "Khabib Nurmagomedov",
  "Dustin Poirier",
  "Charles Oliveira",
  "Conor McGregor",
  "Jon Jones",
  "Ilia Topuria",
  "Israel Adesanya",
  "Alexander Volkanovski",
  "Sean O'Malley",
  "Leon Edwards",
  "Max Holloway",
  "Jorge Masvidal",
  "Nate Diaz",
  "Tony Ferguson",
  "Stipe Miocic",
  "Francis Ngannou",
];

btn.addEventListener("click", () => {
  //   let div = document.createElement("div");

  //   div.style.width = "200px";
  //   div.style.height = "200px";
  //   div.style.position = "absolute";

  let h1 = document.createElement("h1");

  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let r = Math.random() * 180;
  let scl = Math.random() * 3;
  
  let c1 = Math.floor(Math.random() * 250);
  let c2 = Math.floor(Math.random() * 250);
  let c3 = Math.floor(Math.random() * 250);
  let a = Math.floor(Math.random() * arr.length);
  h1.innerHTML = arr[a];
  main.appendChild(h1);

  h1.style.position = "absolute";
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = r + "deg";
  h1.style.scale = scl;
  h1.style.color = `rgb(${c1},${c2},${c3})`;

  //   div.style.left = x + "%";
  //   div.style.top = y + "%";
  //   div.style.rotate = r + "deg";
  //   div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

  //   main.appendChild(div);
});
