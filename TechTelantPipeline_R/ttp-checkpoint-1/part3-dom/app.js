// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================

// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]");

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list
const heading = document.getElementById("main-heading");
const pageStatus = document.getElementById("subtitle");
const itemList = document.getElementById("item-list");

console.log(heading);
console.log(pageStatus);
console.log(itemList);

// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)
const itemHeader = document.querySelector("h2");
const toggleBtn = document.querySelector("#toggle-btn");
const a_listItem = document.querySelector(".list-item");

console.log(itemHeader);
console.log(toggleBtn);
console.log(a_listItem);

// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const all_listItem = document.querySelectorAll(".list-item");
console.log(all_listItem);

// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.
all_listItem.forEach((item) => console.log(item.textContent));

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
//
//          answer: getElementById() select the element by its unique id -return that element
//          -querySelector() select the element by using css styling(.,#) - return the first matching element(if there are elements with same class names)
//          -querySelectorAll() return the nodeList
//          -nodeList is not the array but it has some array-like function for example forEach().

// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]");

// B1.
// Select the h1 with the id "main-heading" and log its text content.
console.log(heading.textContent);

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.
pageStatus.textContent = "Page loaded successfully";

// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const outputText = document.getElementById("output-text");
outputText.textContent = "Nothing To Display";

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
const outputBox = document.getElementById("output-box");
outputBox.style.backgroundColor = "#ff9a3c";

// B5.
// EXPLAIN: What is textContent?
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer: textContent is -to set or to get any text(visible and invisible) that is inside the html.
//          innerHTML include the tag(open and closing tag) plus any text on html
//          - using innerHTML can be risky because we can accidentally change the tag(like name or spelling) which can distroy the HTML contents structure or display

// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]");

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
const changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", (event) => {
  heading.textContent = "You Changed The Heading!";
});

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.
toggleBtn.addEventListener("click", (event) => {
  outputText.classList.toggle("highlighted");
});

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
heading.classList.add("active");
console.log(heading.classList);

// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
a_listItem.classList.remove("list-item");
console.log(a_listItem.classList);

// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer: an event listener wait something to happen on an element like click the button,
//          submit the form or movehover over the element and take actions as we want.
//          we only want that some action to happen only when the listen is tiggered not when the page(or the script) is loaded

// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer: classList.toggle can add the class if not exist and remove the class if exist.
//          - classList.add - add the class | classList.remove() - remove the class - the argument is the name of the class
//          - element.className - give the all class names of the html element

// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]");

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".
const li = document.createElement("li");
li.textContent = "Avacado";
li.setAttribute("class", "list-item");
itemList.append(li);

// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after
const inputItem = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", (event) => {
  const li = document.createElement("li");
  li.textContent = inputItem.value;
  li.setAttribute("class", "list-item");
  itemList.append(li);
  inputItem.value = "";
});

// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.
outputText.remove();
// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer: createElement() - create new HTML element
//          appendChild() adds the child element
//          -newly created element actually appear after they are added or appened to the DOM
