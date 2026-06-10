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
console.log(questions[1].correct); // 3

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

const progressFill = document.getElementById("progress-fill");

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
  nextBtn.classList.add("hidden");
  //   console.log(nextBtn);

  // 6. Remove the "answered" class from questionCard
  questionCard.classList.remove("answered");
}

loadQuestion(0);

/**
 * Phrase 4; Make it Interactive
 */

/**
 * Now the buttons do something.

Instead of attaching a click listener to every button, attach one listener to #answer-list. When any button inside the list is clicked, the event bubbles up to the list and fires the listener. This is event delegation — one handler covers all current and future children.

Every DOM element has a tagName property that tells you what kind of element it is — "BUTTON", "LI", "DIV", etc. It's always uppercase. You'll use this to filter out clicks that land on the list itself rather than on a button.
 */

answerList.addEventListener("click", (event) => {
  //   console.log(btnArr.indexOf(event.target));
  // 1. If the click was not on a BUTTON element, return early and do nothing
  //    hint: check event.target.tagName — it will be the string "BUTTON" if a button was clicked
  if (event.target.tagName !== "BUTTON") return;
  // 2. Store the clicked button and figure out which index it is in the list
  //    hint: convert answerBtnsNodeList to an array and use .indexOf(event.target)
  // 3. Get the correct answer index from the current question in the data array
  // 4. Compare: did the player pick the right one?
  //    - If correct: add the "correct" class to the clicked button, increment score,
  //      and update scoreDisplay.textContent
  //    - If wrong: add the "wrong" class to the clicked button,
  //      and add "correct" to the button at the correct index to reveal it
  // 5. Disable all four answer buttons so the player can't change their answer
  //    hint: convert to a real array and use forEach to add "disabled" to each
  else {
    let index = btnArr.indexOf(event.target) + 1;
    // console.log(index);
    // console.log(questions[0].correct);
    if (index === questions[index].correct) {
      //   console.log("Correct");
      event.target.classList.add("correct");
      score++;
      scoreDisplay.textContent = score;
    } else {
      event.target.classList.add("wrong");
      btnArr.forEach((btn) => {
        btn.classList.add("disabled");
      });
    }
  }

  // 6. Add "answered" to questionCard and remove "hidden" from nextBtn
  questionCard.classList.add("answered");
  nextBtn.classList.remove("hidden");
});

// Why does clicking a button inside #answer-list trigger this listener?
// Answer: because event delegation - one handler covers all current and future children
//
// What is the difference between event.target and event.currentTarget here?
// event.target  → is the element where the event actually happened (for ex: when the user click the answer button)
// event.currentTarget → is where the event listen is attached - that can be partent node

/**
 * Move to the Next Question
 */

nextBtn.addEventListener("click", () => {
  // 1. Increment currentIndex
  currentIndex++;

  const percentage = Math.round((currentIndex / questions.length) * 100);

  // 2. If there are more questions left (currentIndex < questions.length):
  //    - Call loadQuestion with the updated index
  if (currentIndex < questions.length) {
    loadQuestion(currentIndex);
    progressFill.style.width = `${percentage}%`;
  }

  // 3. Otherwise the game is over — call showEndScreen()
  else {
    showEndScreen();
  }
});

// this function builds the entire end screen dynamically
// (by not editing HTML - use document.createElement for every element)
function showEndScreen() {
  // 1. Hide the question card
  questionCard.classList.add("hidden");

  // 2. Show the end screen (it started with class="hidden" — remove that now)
  endScreen.classList.remove("hidden");

  // 3. Create an <h2> and set its textContent to show the final score
  //    e.g. "You scored 3 out of 5"
  //    hint: use the score and questions.length variables
  endScreen.innerHTML = `<h2>You scored ${score} out of ${questions.length}`;

  // 4. Create a <p> for an encouragement message
  //    Write a conditional with at least two different messages
  //    (e.g. one for a perfect score, one for passing, one for failing)

  if (score > questions.length / 2) {
    // endScreen.innerHTML += `<p>You have the passing score! </p>`;
    const p = document.createElement("p");
    p.textContent = `Passing Score.`;
    endScreen.append(p);
  }

  if (score === questions.length) {
    const p = document.createElement("p");
    p.textContent = `Perfect.Bravo!`;
    endScreen.append(p);
  }

  if (score === 0) {
    // endScreen.innerHTML += `<p>You Failed!</p>`;
    const p = document.createElement("p");
    p.textContent = `You Fail!`;
    endScreen.append(p);
  }

  // 5. Create a <button>, set its id to "restart-btn" and its textContent to "Play Again"
  const re_btn = document.createElement("button");
  endScreen.append(re_btn);
  re_btn.textContent = "Play Again?";
  re_btn.id = "restart-btn";

  // 6. Append all three elements to endScreen
  //    note: createElement builds the node in memory — appendChild is what puts it on the page
}

/**
 * Phase 6: Restart
 */

endScreen.addEventListener("click", (event) => {
  // 1. Return early if the clicked element is not the restart button
  //    hint: check event.target.id
  //    think: why can't we just do document.getElementById("restart-btn") at the top of the file?
  if (event.target.id !== "restart-btn") console.log("not restart");
  // 2. Reset both state variables (score and currentIndex) to 0
  //    - Also update scoreDisplay.textContent so the header reflects the reset
  else if (event.target.id === "restart-btn") {
    // console.log("restart-btn clicked");
    score = 0;
    currentIndex = 0;
    scoreDisplay.innerText = score;
    endScreen.innerHTML = "";
    endScreen.classList.add("hidden");
    questionCard.classList.remove("hidden");

    // restart the progress bar
    progressFill.style.width = 0;

    loadQuestion(0);
  }

  // 3. Clear everything showEndScreen built
  //    hint: setting endScreen.innerHTML to "" removes all child elements at once

  // 4. Bring the question card back

  // 5. Load the first question
});
