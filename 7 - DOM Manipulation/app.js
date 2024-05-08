// Accessing Elements

// ID (.getElementById())
let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);

// Modify element (.textContent)
elementWithID.textContent = "Div 1";

// Class (.getElementsByClassName())
let elementsWIthClass = document.getElementsByClassName("sample-div");
console.log("Elements with class 'sample-div':", elementsWIthClass);

// Modify element (.textContent)
elementsWIthClass[1].textContent = "Div 2";

// Modify element .textContent property using for loop
for (let i = 0; i < elementsWIthClass.length; i++) {
    let element = elementsWIthClass[i];
    element.textContent += " is updated!";
}

// Tag Name (.getElementsByTagName)
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

// Modify element's background color
listItems[0].style.backgroundColor = "yellow";

// Modify element's background color using a for loop
for (let i = 0; i < listItems.length; i++) {
    let element = listItems[i];
    element.style.backgroundColor = "maroon";
}

/* ======================== */

// querySelector() - first occurence of the target element
let buttonDiv = document.querySelector("#button-div");
buttonDiv.style.color = "red";

let unorderedListItem = document.querySelector("li");
console.log(unorderedListItem);

// querySelectorAll() - all occurences of the target element
let headingElements = document.querySelectorAll("h3");
console.log(headingElements);

// Modify element background color
for (let i = 0; i < headingElements.length; i++) {
    let heading = headingElements[i];
    heading.style.backgroundColor = "beige";
}

// Adding Event Listeners
let button = document.getElementById("button");
button.addEventListener("click", function () {
    let buttonDiv = document.getElementById("button-div");
    alert("Button clicked!");
    buttonDiv.textContent = "Hello World!";
});

// Appending New Elements
let append = document.getElementById("append");
let newElement = document.createElement("div");
newElement.textContent = "Newly Appended Element";
append.appendChild(newElement);

// Removing an Element
let elementToBeRemoved = document.getElementById("remove");
elementToBeRemoved.remove();

// Updating Element Attributes
let image = document.getElementById("image");
image.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
)
console.log(image.getAttribute("src"));
