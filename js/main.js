/*
Slide nav script
*/

var slideBtn = document.getElementById("slideBtn");

var slideNav = document.getElementById("slideNav");

slideBtn.addEventListener("click", showNav, false);
slideNav.addEventListener("click", hideNav, false);

function showNav(e) {
   slideNav.classList.add("show");

   document.body.style.overflow = "hidden";

}

function hideNav(e) {
   slideNav.classList.remove("show");
   e.stopPropagation();

   document.body.style.overflow = "auto";
}

