"use strict!";

var clientImages = document.querySelectorAll(".c > img");
var clientArray = [0, 1, 2, 3, 4, 5, 6];
var teaserArray = [0, 1, 2, 3, 4, 5];
var rightTopImg = clientImages[4];
var leftTopImg = clientImages[2];

var imageElement;
var sliderParagraph = document.querySelectorAll(".wrapper-client-text p");
var leftOrRight;

function arrowLeftClient() {
  imageElement = rightTopImg;
  leftOrRight = "left";
  /*  clientImages.forEach(
    (element) => (element.style.animation = `${leftOrRight} + 1s`)
  ); */
  clientImages.forEach((element) => (element.style.animation = "left 1s"));
  animation(true);
  leftShiftArray(clientArray);
  timeOut();
  paragraphSwitch();
}

function arrowRightClient() {
  imageElement = leftTopImg;
  clientImages.forEach((element) => (element.style.animation = "right 1s"));
  animation(false);
  rightShiftArray(clientArray);
  timeOut();
  paragraphSwitch();
}

let maxPosition;
let positionIncrease;
let position;
let vw;

function animation(direction) {
  vw = window.innerWidth;
  maxPosition = Math.floor(vw / 3.5 / 10) * 10;
  positionIncrease = Math.floor(vw / 27);
  position = 0;
  interval = setInterval(movePortrait, (1 / 30) * 1000, direction);

  function movePortrait(direction) {
    if (position >= maxPosition) {
      clearInterval(interval);
    } else {
      position += positionIncrease;
      if (direction === true) {
        rightTopImg.style.right = position + "px";
      } else {
        leftTopImg.style.left = position + "px";
      }
      imageElement.style.width = 95 + position / 7 + "px";
    }
  }
}

leftShiftArray = (varArray) => varArray.unshift(varArray.pop());
rightShiftArray = (varArray) => varArray.push(varArray.shift());

function timeOut() {
  window.setTimeout(function () {
    imageElement.style.width = 95 + "px";
    rightTopImg.style.right = 0;
    leftTopImg.style.left = 0;
    clientImages.forEach((element) => (element.style.animation = ""));
    imageSwitch();
  }, 410);
}

function imageSwitch() {
  clientImages[clientArray[0]].src = "img/face1.png";
  clientImages[clientArray[1]].src = "img/face2.png";
  clientImages[clientArray[2]].src = "img/face3.png";
  clientImages[clientArray[3]].src = "img/face4.png";
  clientImages[clientArray[4]].src = "img/face5.png";
  clientImages[clientArray[5]].src = "img/face6.png";
  clientImages[clientArray[6]].src = "img/face7.png";
}

/* function imageSwitch() {
  for (let i = 0; i < clientImages.length; i++) {
    clientImages[clientArray[i]].src = clientImages[i].src;
  }
}
 */

let z = 0;
function paragraphSwitch() {
  z += 1;
  sliderParagraph[clientArray[0]].style.zIndex = z + 1;
}

//new page: slider specialties

const teaserLeftAniClass = "teaser_ani_left";
function leftClickTeaser() {
  console.log(teaserLeftAniClass);
  slideAnimation(teaserLeftAniClass);
  window.setTimeout(function slideTeaserLeft() {
    leftShiftArray(teaserArray);
    teaserSwitch();
  }, 1000);
}

const teaserRightAniClass = "teaser_ani_right";
function rightClickTeaser() {
  slideAnimation(teaserRightAniClass);
  window.setTimeout(function slideTeaserRight() {
    rightShiftArray(teaserArray);
    teaserSwitch();
  }, 1000);
}

function teaserSwitch() {
  let teaser = document.querySelectorAll(".teaser");
  for (let i = 0; i < teaser.length; i++) {
    teaser[teaserArray[i]].style.order = i + 1;
  }
}

function slideAnimation(aniClass) {
  const wrapper = document.querySelector(".teaser_wrapper");
  wrapper.classList.remove(`${aniClass}`);
  wrapper.offsetWidth = wrapper.offsetWidth;
  wrapper.classList.add(`${aniClass}`);
}
