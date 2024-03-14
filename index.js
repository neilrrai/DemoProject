// creating Element;
const subHeading = document.createElement("h3");

// Create text in our element:
const subHeadingText = document.createTextNode(
  "Buy high quality organic fruits online"
);

// link this text to our element:
subHeading.appendChild(subHeadingText);

//Insert the element in the HTML in selected div at it's last position.

const divs = document.getElementsByTagName("div"); // getting the collections of all the div
const firstDiv = divs[0]; // selecting the div in which we want to insert our element.
firstDiv.appendChild(subHeading);
subHeading.style.fontStyle = "italic";

const para = document.createElement("p");
const paraText = document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
const secondDiv = divs[1];
// insert our element before the div other child:insertBefore(a,b);a=> element want to insert; b=>that element before you want to insert your element;
const fruitsList = document.querySelector(".fruits"); //selected the "b"
secondDiv.insertBefore(para, fruitsList);
para.id = "fruits-total";
