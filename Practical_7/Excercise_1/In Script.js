"Selecting elements by ID and class name"
const title = document.getElementById("main-title");
const paragraphs = document.getElementsByClassName("content");
const container = document.getElementById("container");

"Traversing the DOM"
console.log(container.parentElement);   // Parent of container
console.log(container.children);        //  All Children 
console.log(container.firstElementChild); // First child element

"Manipulating the Content"
title.textContent = "Welcome to the DOM Practice!";
paragraphs[0].style.color = "green";

"Adding Event Listeners"
document.getElementById("changeTextBtn").addEventListener("click", () => {
  title.textContent = "Text Changed via Button Click!";
});

document.getElementById("addElementBtn").addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "New paragraph added!";
  newPara.classList.add("highlight");
  container.appendChild(newPara);
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
  const lastChild = container.lastElementChild;
  if (lastChild && lastChild.tagName === "P") {
    container.removeChild(lastChild);
  }
});

// Optional Challenge: Add a button to toggle a class on all <p> elements

document.getElementById("toggleHighlightBtn").addEventListener("click", () => {
    // Select all <p> elements
    const paragraphs = document.getElementsByClassName("content");
    
    // The original HTML defines the 'highlight' class under .box .highlight
    // It changes the color to 'crimson' and font-weight to 'bold'.
    
    // Iterate over all paragraphs and toggle the 'highlight' class
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle("highlight");
    }
});
