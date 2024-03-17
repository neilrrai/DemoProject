// creating description input tag
const description = document.createElement("input");
description.id = "description";
description.setAttribute("type", "text");
description.setAttribute("name", "desc");
description.setAttribute("placeHolder", "Add Description");
description.setAttribute("classs", "desc");
// adding descrption tag before button
const forms = document.getElementsByTagName("form");
const form = forms[0];
const buttons = document.getElementsByTagName("button");
const button = buttons[0];
form.insertBefore(description, button);
description.addEventListener("input", function () {
  const descriptionText = description.value;
}); // addede the Decription input tag
// console.log(description.value);

//*******/
// filter Operations also set on description and list !!
const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItmes = document.getElementsByClassName("fruit");
  const descriptionItems = document.getElementsByTagName("p");
  // console.log(descriptionItems);

  // console.log(descriptionValue);
  for (let i = 0; i < fruitItmes.length; i++) {
    const currentFruitText =
      fruitItmes[i].firstChild.textContent.toLocaleLowerCase();
    const currentDescriptionText =
      descriptionItems[i].firstChild.textContent.toLocaleLowerCase();
    // console.log(descriptionItems[i].firstChild.textContent.toLocaleLowerCase());

    if (
      currentFruitText.indexOf(textEntered) === -1 ||
      currentDescriptionText.indexOf(textEntered) === -1
    ) {
      fruitItmes[i].style.display = "none";
    }
    if (
      currentFruitText.indexOf(textEntered) !== -1 ||
      currentDescriptionText.indexOf(textEntered) !== -1
    ) {
      console.log(currentFruitText.indexOf(textEntered));
      fruitItmes[i].style.display = "flex";
    }
  }
});

///*********/
// all the submit button action and adding edit button

// selecting the element in which the chsnge happened
const formData = document.querySelector("form");
const fruitItmes = document.querySelector(".fruits");

// adding action to form and define the function on submit button
formData.addEventListener("submit", function (event) {
  event.preventDefault();

  // selecting description element
  const descriptionToAdd = document.getElementById("description");
  // creating P tag to add descriptions
  const descriptionPara = document.createElement("p");
  // adding input descr text to para inner text
  const descriptionParaText = document.createTextNode(descriptionToAdd.value);

  // linking descrpara to its text value
  descriptionPara.appendChild(descriptionParaText);
  descriptionPara.style.fontStyle = "italic";

  // ********************//

  //selecting theinput Element
  const fruitToAdd = document.getElementById("fruit-to-add");

  // create the 'li' tag
  const newLi = document.createElement("li");
  // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'; // this single line can do all the work from line19 line34.

  // added input value to li tag as text.
  const newLiText = document.createTextNode(fruitToAdd.value);

  //link li with li text
  newLi.appendChild(newLiText);
  // adding class to our li tag
  newLi.className = "fruit";
  // creating button tag
  const detelBtn = document.createElement("button");
  // again the button tag text
  const detelBtnText = document.createTextNode("x");

  // link bitton to button text
  detelBtn.appendChild(detelBtnText);
  // adding class to botton
  detelBtn.className = "delete-btn";
  //  now adding this button to our li tag as child
  newLi.appendChild(detelBtn);
  // console.log(newLi);

  // same adding edit button when we add new item:
  const editBtn = document.createElement("button");
  const editBtnText = document.createTextNode("Edit");
  editBtn.appendChild(editBtnText);
  editBtn.className = "edit-btn";
  newLi.appendChild(editBtn);

  // now the final li tag added to final tag which we selected in line 2.

  fruitItmes.appendChild(newLi);
  newLi.appendChild(descriptionPara);
});

// detting action Delet button in items:
fruitItmes.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    // here I targeting the only when our class is same as delet button's class.
    // get the parent of button where we click

    const fruitToDelete = event.target.parentElement;
    fruitItmes.removeChild(fruitToDelete);
  }
});
// // adding Edit button:pre existing fruit items

const editBtn = document.createElement("button");
const editBtnText = document.createTextNode("Edit");
editBtn.appendChild(editBtnText);
editBtn.className = "edit-btn";
// fruitList[2].appendChild(editBtn);
const fruitList = document.querySelectorAll(".fruit");
fruitList.forEach((item) => {
  item.appendChild(editBtn.cloneNode(true));
});

//*********/
// Adding descriptions to pre existing fruit items

const fruitDescriptions = [
  "Banana is fiber rich",
  "Apple is iron rich",
  "Orange is Vitmin C rich",
  "Kiwi is good for blood",
];

for (let i = 0; i < fruitList.length; i++) {
  const fruitDescription = document.createElement("p");
  fruitDescription.style.fontStyle = "italic";
  fruitDescription.setAttribute("id", "description");
  description.setAttribute("classs", "desc");
  fruitDescription.textContent = fruitDescriptions[i];

  fruitList[i].appendChild(fruitDescription);
}
