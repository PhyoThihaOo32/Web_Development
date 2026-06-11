// phase 1: connect to the DOM

const appTitle = document.getElementById("app-title");
const movieCount = document.getElementById("movie-count");
const movieForm = document.getElementById("movie-form");
const titleInput = document.getElementById("title-input");
const genreInput = document.getElementById("genre-input");
const movieList = document.getElementById("movie-list");
const clearWatchedBtn = document.getElementById("clear-watched-btn");

// select ALL elements with class "filter-btn" using querySelectorAll
const filterBtnsNodeList = document.querySelectorAll(".filter-btn");
console.log(filterBtnsNodeList);
// store them in filterBtns — you'll loop over them in Phase 6
const filterBtnArray = Array.from(filterBtnsNodeList);
console.log(filterBtnArray);

// Phase 2: Review the Core DOM tools

//PartA-textContent(review)
appTitle.textContent = "My Movie Watchlist";

//Read and log the current count text
console.log("Current Movie Count: ", movieCount.textContent);

/**
 * textContent and innerText both get text from an element, but they are not exactly the same.

textContent

Gets all text inside the element, even hidden text.
It does not care about CSS styling.

innerText

Gets only the visible text the user can actually see on the page.

It pays attention to styling like display: none.

Easy rule

Use textContent most of the time when working with JavaScript.

Use innerText when you specifically care about what is visible on screen.
 * 
 */

// update the count text manually
movieCount.textContent = "0 movies";

//PartB - classList(review)

// classList is how javaScript applies and removes visual state.

// .add() puts a class on the element
movieCount.classList.add("active-filter");

// .remove() takes it off
movieCount.classList.remove("active-filter");

// .toggle() adds if missing, removes if present - one call does both
movieCount.classList.toggle("active-filer");
movieCount.classList.toggle("active-filter");

/**
 * Rule of thumb: never do element.style.color = "red" in your JavaScript. Do this instead: define a CSS class and toggle it with classList. Visual rules stay in the stylesheet. JavaScript only controls which classes are active.
 */

// PartC-Attributes vs Properties

/**
 * // getAttribute reads the HTML attribute as it was written in the file
 */

console.log(titleInput.getAttribute("placeholder"));
console.log(titleInput.getAttribute("type"));
console.log(titleInput.getAttribute("required"));

// setAttribute changes or adds an attribute
titleInput.setAttribute("placeholder", "Try: Shawshank Redemption");

// removeAttribute removes it entirely
titleInput.removeAttribute("required");

// the input is no longer required — blank submissions won't be blocked
titleInput.setAttribute("required", "");

/**getAttribute("value") reads what was written in the HTML file. .value reads the live state — what the user actually typed right now.
When you're working with form inputs, always use .value.
 */

console.log(titleInput.getAttribute("value"));
console.log(titleInput.value);
