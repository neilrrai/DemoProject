// selecting the element in which the chsnge happened
const formData = document.querySelector("form");
const fruitItmes = document.querySelector(".fruits");

// adding action to form and define the function on submit button
formData.addEventListener("submit", function (event) {
  event.preventDefault();

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
// adding Edit button:

const editBtn = document.createElement("button");
const editBtnText = document.createTextNode("Edit");
editBtn.appendChild(editBtnText);
editBtn.className = "edit-btn";
// fruitList[2].appendChild(editBtn);
const fruitList = document.querySelectorAll(".fruit");
fruitList.forEach((item) => {
  item.appendChild(editBtn.cloneNode(true));
});
