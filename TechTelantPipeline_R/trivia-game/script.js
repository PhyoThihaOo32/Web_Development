/**
 * Open script.js. Your first job is to give JavaScript handles to the elements it'll need. The first two are done for you — follow the same pattern for the rest:
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
