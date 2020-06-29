var modal = document.getElementById("modal");
var input = document.querySelectorAll("#contact input");
var correctIn = true;
var backDrop = document.querySelector(".backdrop");
var output = document.querySelectorAll("#modal div");

const submitButton = document.querySelector(".submit_btn");
submitButton.addEventListener("click", submitForm);

const modalButton = document.querySelector("#modal button");

function submitForm() {
  event.preventDefault();
  validateInput();
  storeInputData();
  if (correctIn === true) {
    modal.style.display = "grid";
    modalButton.focus();
    backDrop.style.display = "block";
    document.body.style.overflow = "hidden";
    /*     for (var i = 0; i < input.length - 1; i++) {
      output[i * 2 + 1].innerHTML = input[i].value;
    } */
  }
}

function validateInput() {
  const inputValue = input[0].value;
  try {
    if (inputValue === "") throw "is mandatory";
    if (inputValue.length < 3) throw "is too short";
    if (/\d/g.test(inputValue) === true) throw "should only contain letters";
  } catch (error) {
    document.querySelector(".throw_error").innerHTML = "Input " + error;
    correctIn = false;
  }
}

function closeFunction() {
  modal.style.display = "none";
  backDrop.style.display = "none";
  document.body.style.overflow = "auto";
}

/* var value0 = input[0].value;
var value1 = input[1].value;
var value2 = input[2].value; */

var input = document.querySelectorAll("#contact input");

function storeInputData() {
  var recipeData = {
    fname: input[0].value,
    lname: input[1].value,
    email: input[2].value,
  };
  localStorage.setItem(input[0].value, JSON.stringify(recipeData));
  dataOutput();
}

function dataOutput() {
  const divAllRecipes = document.querySelector(".div_all_recipes");
  var teaserAllRecipes = document.querySelectorAll(".box_all_recipes");

  const imgAllRecipes = document.querySelectorAll(".img_all_recipes");
  const h3AllRecipes = document.querySelectorAll(".h3_all_recipes");
  const prepTimeAllRecipes = document.querySelectorAll(".preparation_time");
  const cookTimeAllRecipes = document.querySelectorAll(".cooking_time");
  let valueRecipeName = JSON.parse(localStorage.getItem(input[0].value));
  let lastIndexTAR = teaserAllRecipes.length;
  console.log(teaserAllRecipes.length);

  var clone = teaserAllRecipes[0].cloneNode(true);
  divAllRecipes.appendChild(clone);
}

function recipeDetails() {}
