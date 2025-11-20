// let box = document.querySelector(".box");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let c1 = Math.floor(Math.random() * 256);
//   let c2 = Math.floor(Math.random() * 256);
//   let c3 = Math.floor(Math.random() * 256);

//   let colors= (`rgb(${c1},${c2},${c3})`);
//   box.style.backgroundColor = colors;
// });

let arr = [
  {
    team: "Chennai Super Kings",
    captain: "MS Dhoni",     
    champion: 5,               
    primary: "Yellow",
    secondary: "Blue"
  },
  {
    team: "Mumbai Indians",
    captain: "Hardik Pandya",   
    champion: 5,
    primary: "Blue",
    secondary: "Gold"
  },
  {
    team: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",   
    champion: 3,
    primary: "Purple",
    secondary: "Gold"
  },
  {
    team: "Royal Challengers Bengaluru",
    captain: "Rajat Patidar",  
    champion: 1,
    primary: "Red",
    secondary: "Black"
  },
  {
    team: "Gujarat Titans",
    captain: "Shubman Gill",  
    champion: 1,
    primary: "Teal",
    secondary: "Gold"
  },
  {
    team: "Sunrisers Hyderabad",
    captain: "Pat Cummins",    
    champion: 1,
    primary: "Orange",
    secondary: "Black"
  },
  {
    team: "Rajasthan Royals",
    captain: "Sanju Samson",   
    champion: 1,
    primary: "Pink",
    secondary: "Blue"
  },
  {
    team: "Delhi Capitals",
    captain: "Axar Patel",    
    champion: 0,
    primary: "Blue",
    secondary: "Red"
  },
  {
    team: "Punjab Kings",
    captain: "Shreyas Iyer",   
    champion: 0,
    primary: "Red",
    secondary: "Silver"
  },
  {
    team: "Lucknow Super Giants",
    captain: "Rishabh Pant",   
    champion: 0,
    primary: "Navy Blue",
    secondary: "Gold"
  }
];


let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function () {

  let winner= arr[Math.floor(Math.random() * arr.length)];
  h1.innerHTML=winner.team;
  h1.style.color=winner.secondary;
  h1.style.backgroundColor=winner.primary;
  
});
