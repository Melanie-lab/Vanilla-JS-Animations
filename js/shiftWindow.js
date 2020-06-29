"use strict!";

let height = document.querySelector(".header_ws").offsetHeight;
console.log(height);

var about = document.querySelector("#about");
var topOfElement = about.offsetTop - 1100;
var navLinks = document.querySelector(".link_about");

scrollHack = () => {
  window.scrollTo(0, 700); //window.scroll() about.scroll() -> Problem
  console.log("topOfElement", topOfElement);
  console.log(window.scrollTo(0, 700));
};

navLinks.addEventListener("click", scrollHack);

/* 
window.addEventListener("hashchange", function() {
  window.scroll(
    top: topOfElement,
    behavior: "smooth"
  );
});

Probleme mit hashchange: Wenn hash ist auf about gesetzt und es wird gescrollt, dann gibt es auf click keinen hashchange

 */
