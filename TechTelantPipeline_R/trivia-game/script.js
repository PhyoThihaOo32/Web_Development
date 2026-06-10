/**
 * Phase 3: Your Data
 */

const questions = [
  {
    text: "What is the name of the boundary around a black hole beyond which nothing can escape?",
    answers: [
      "Photon ring",
      "Event horizon",
      "Singularity shell",
      "Gravity belt",
    ],
    correct: 1,
  },
  {
    text: "What is the main source of the Sun’s energy?",
    answers: [
      "Nuclear fission",
      "Chemical combustion",
      "Gravitational collapse",
      "Nuclear fusion",
    ],
    correct: 3,
  },
  {
    text: "Which planet has the shortest day in our solar system?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    text: "What is a light-year a measure of?",
    answers: ["Time", "Brightness", "Distance", "Speed"],
    correct: 2,
  },
  {
    text: "Which moon is known for its thick atmosphere and methane lakes?",
    answers: ["Europa", "Titan", "Ganymede", "Triton"],
    correct: 1,
  },
];

// questions[1].answers.forEach((n) => console.log(n));

// state variable to track the game as it progresses
let currentIndex = 0;
let score = 0;

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
// questionCard.classList.add("answered");
// questionCard.classList.remove("answered");

/**
 * Phase 3: Your Data - continue
 */

// this function take an index and update the DOM to show that question

function loadQuestion(index) {
  // 1. Get the current question object out of the questions array using index
  const currentQuestion = questions[index];
  //   console.log(currentQuestion);

  // 2. Update questionNumber.textContent — should read "Question X of Y"
  //    hint: use index + 1 for the display number, questions.length for the total
  questionNumber.textContent = `Question ${index + 1} of ${
    questions.length
  }`.toUpperCase();

  // 3. Update questionText.textContent with the question's text
  questionText.textContent = questions[index].text;

  // 4. Loop over the four answer buttons and for each one and set its textContent to the matching answer from the question object
  for (let i = 0; i < questions[index].answers.length; i++) {
    btnArr[i].innerText = questions[index].answers[i];
  }

  //    - Reset its className back to "answer-btn" to clear any leftover .correct / .wrong / .disabled
  //    hint: convert answerBtnsNodeList to a real array first, then use forEach
  btnArr.forEach((btn) => {
    btn.className = "answer-btn";
  });

  // 5. Hide the next button
  nextBtn.remove();

  // 6. Remove the "answered" class from questionCard
  questionCard.classList.remove("answered");
}

loadQuestion(0);
