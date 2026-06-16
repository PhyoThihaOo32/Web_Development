const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// regular expression-regex
// const reg = /^[a-zA-Z0-9]{6,10}$/gi;
// const str = "testing";
// const result = reg.test(str);

const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the default action(refresh page) of the particular event
  // validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "valid username";
  } else {
    feedback.textContent =
      "user must contain letters between 6-12 characters only.";
  }
});

// keyboard events
// live feedback
form.username.addEventListener("keyup", (event) => {
  // console.log(event.target.value, form.username.value);
  console.log(event);
  if (usernamePattern.test(event.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
