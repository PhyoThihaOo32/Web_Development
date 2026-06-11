const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the default action(refresh page) of the particular event
  //   console.log(username.value);
  console.log(form.username.value);
});

// regular expression
