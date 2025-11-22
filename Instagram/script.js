let post = document.querySelector(".post-image img");
let action = document.querySelector(".action-buttons");
let heart = document.querySelector(".ri-heart-3-line");

post.addEventListener("dblclick", function () {
  heart.classList.add("active");
  heart.style.color='red';
  console.log("click");
  

});