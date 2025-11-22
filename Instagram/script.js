let post = document.querySelector(".post-image img");
let heart = document.querySelector(".post-image i");
let action = document.querySelector(".action-buttons i");

post.addEventListener("dblclick", function () {
  heart.style.opacity = "1";
  heart.style.transform = "translate(-50%, -50%) scale(1) ";

  action.classList.add("ri-heart-3-fill");
  action.classList.remove("ri-heart-3-line");
  action.style.color = "red";

  setTimeout(function () {
    heart.style.opacity = "0";
    heart.style.transform = "translate(-50%, -50%) scale(0)  rotate(-20deg)";
  }, 1000);
});

action.addEventListener("click", function () {
  if (action.classList.contains("ri-heart-3-fill")) {
    // If it's already liked, unlike it
    action.classList.remove("ri-heart-3-fill");
    action.classList.add("ri-heart-3-line");
    action.style.color = "initial"; // Reverts to the default color
  } else {
    // If it's not liked, like it
    action.classList.add("ri-heart-3-fill");
    action.classList.remove("ri-heart-3-line");
    action.style.color = "red";
  }
});
