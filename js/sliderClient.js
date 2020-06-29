"use strict!";

var clientImages = document.querySelectorAll(".c > img");
var nArray = [0, 1, 2, 3, 4, 5, 6];
var rightTopImg = clientImages[4];
var middleImg = clientImages[3];
var leftTopImg = clientImages[2];
var maxPosition;
var positionIncrease;
var position;
var vw;
var imageElement;
var sliderParagraph = querySelectorAll(".wrapper-client-text p");

function arrowLeftClient() {
  imageElement = rightTopImg;
  clientImages.forEach(element => (element.style.animation = "left 1s"));
  x = true;
  animation();
  leftShiftArray();
  timeOut();
  paragraphSwitch();
}

function arrowRightClient() {
  imageElement = leftTopImg;
  clientImages.forEach(element => (element.style.animation = "right 1s"));
  x = false;
  animation();
  rightShiftArray();
  timeOut();
  paragraphSwitch();
}

function animation() {
  vw = window.innerWidth;
  maxPosition = Math.floor(vw / 3.5 / 10) * 10;
  positionIncrease = Math.floor(vw / 115);
  position = 0;
  interval = setInterval(movePortrait, (1 / 30) * 1000);

  function movePortrait() {
    if (position >= maxPosition) {
      clearInterval(interval);
    } else {
      position += positionIncrease;
      if (x === true) {
        rightTopImg.style.right = position + "px";
      } else {
        leftTopImg.style.left = position + "px";
      }
      imageElement.style.width = 95 + position / 5 + "px";
    }
  }
}

leftShiftArray = () => nArray.unshift(nArray.pop());
rightShiftArray = () => nArray.push(nArray.shift());

function timeOut() {
  window.setTimeout(function() {
    imageElement.style.width = 95 + "px";
    rightTopImg.style.right = 0;
    leftTopImg.style.left = 0;
    clientImages.forEach(element => (element.style.animation = ""));
    imageSwitch();
  }, 410);
}

function imageSwitch() {
  clientImages[nArray[0]].src = "img/face1.png";
  clientImages[nArray[1]].src = "img/face2.png";
  clientImages[nArray[2]].src = "img/face3.png";
  clientImages[nArray[3]].src = "img/face4.png";
  clientImages[nArray[4]].src = "img/face5.png";
  clientImages[nArray[5]].src = "img/face6.png";
  clientImages[nArray[6]].src = "img/face7.png";
}

function paragraphSwitch() {
  let = z;
  z += 1;
  sliderParagraph[nArray[0]].style.zindex = z + 1;
  console.log("z-index", z);
  console.log(sliderParagraph[nArray[0]].style.zindex);
}
