const correctAnswers = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // we don't want to refresh the page

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show score
  // console.log(score);

  // window.scrollTo(0, 0);
  scrollTo(0, 0);
  // result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  // animate the score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// window object - is the main global object in the browser.
// it represents the browser window or tab, and many browser features live inside it.

// setTime(()=> {},3000) - fire the call back function after a certain amount of time
// setInterval(()=> {},3000) - fire the callback function every certain amount of time(intervals)

// let i = 0;
// const keepLaughing = setInterval(() => {
//   console.log("haha");
//   i++;
//   if (i === 5) clearInterval(keepLaughing);
// }, 3000);
