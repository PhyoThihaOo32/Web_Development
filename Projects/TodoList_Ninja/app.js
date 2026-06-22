const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
     <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html; // create the template string and add to the (todos) list
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page from reload
  const todo = addForm.add.value.trim(); // get whatever the user type(the value) from the input box and trim it(remove the white space before and after)
  //   console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); // clear the input after submit
  }
});

// delete todos
list.addEventListener("click", (event) => {
  // if the classList of the target element contains delete class
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
