/**
 * Phase 1: Connect to the DOM
 */

const gameTitle = document.getElementById("game-title");
const scoreDisplay = document.getElementById("score");
// select #question-number  → store in questionNumber
const questionNumber = document.getElementById("question-number");
// select #question-text    → store in questionText
const questionText = document.getElementById("question-text");
// select #question-card    → store in questionCard
const questionCard = document.getElementById("question-card");
// select #answer-list      → store in answerList
const answerList = document.getElementById("answer-list");
// select #next-btn         → store in nextBtn
const nextBtn = document.getElementById("next-btn");
// select #end-screen       → store in endScreen
const endScreen = document.getElementById("end-screen");

/**
 *
 * getElementsByClassName returns an HTMLCollection — it has no .map(), no .filter(), no array methods at all.
 * querySelectorAll returns a NodeList — it has .forEach(), but still no .map() or .filter().
 */

// select the answer buttons two different ways
const answerBtnCollection = document.getElementsByClassName("answer-btn");
const answerBtnNodes = document.querySelectorAll(".answer-btn");

// logging into console
console.log(answerBtnCollection); // HTMLCollection
console.log(answerBtnNodes); // NodeList
answerBtnNodes.forEach((n) => console.log(n.innerHTML));

// converting htmlCollection into array
const btnArr = Array.from(answerBtnCollection);
btnArr.forEach((e) => console.log(e.innerHTML));

/**
 * getElementsByClassName returns an HTMLCollection.
 * querySelectorAll returns a NodeList.
 * To use .map() on either, convert with Array.from().
 */

/**
 * Phase 2: Read and Modify the Page
 */

// update the tile
gameTitle.textContent = " ☘︎ Quick Fire Trivia ";

// read the current question text and log
console.log("First Question: ", questionText.textContent);

// change the question number label to uppercase
questionNumber.innerText = questionNumber.innerText.toUpperCase();

// walking the tree - with traversal
const firstBtn = answerBtnNodes[0];
const firstLi = firstBtn.parentElement;
const parentBtn = firstLi.parentElement;

console.log("The first button: ", firstBtn);
console.log("Its parent <li>: ", firstLi);
console.log("The <ul> that holds all buttons: ", parentBtn);

// toggle a class on the question card

/**
 * classList is the list of CSS classes on an HTML
 * element. add() puts a new class into that list.
 */
questionCard.classList.add("answered");
questionCard.classList.remove("answered");
