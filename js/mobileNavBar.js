"use strict";

const navSS = document.getElementById("navSS");
const menuIcon = document.querySelector(".icon");
function mobileNav() {
  if (navSS.style.display === "block") {
    navSS.style.display = "none";
  } else {
    navSS.style.display = "block";
    barTransform();
  }
  (function (menuIcon) {
    menuIcon.classList.toggle("change");
  })();
}

const navLink = document.querySelectorAll(".nav_link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", mobileNav);
}

const menuBars = document.querySelectorAll(".icon div");
function barTransform() {
  menuBars.classList.toggle("change");
  console.log("change");
}
