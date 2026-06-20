// phase 1: connect to the DOM

let currentFilter = "all";

const appTitle = document.getElementById("app-title");
const movieCount = document.getElementById("movie-count");
const movieForm = document.getElementById("movie-form");
const titleInput = document.getElementById("title-input");
const genreInput = document.getElementById("genre-input");
const movieList = document.getElementById("movie-list");
const filterBar = document.getElementById("filter-bar");
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

// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → reads what was written in the HTML file
// .value               → read the live state - what the user actually typed right now

// Phrase3 : Handle the Form

/**
 * A form has default browser behavior: when you submit it, the browser tries to
 * reload the page (or navigate to a URL). That would wipe everything
 * your JavaScript built. Your first line inside any submit handler
 * must stop that.
 */

movieForm.addEventListener("submit", (event) => {
  // 1. Stop the browser from reloading the page — this must be the very first line
  //    Without this, the page refreshes on every submit and you lose everything
  //    hint: event.preventDefault()
  event.preventDefault();

  // 2. Read the movie title from the input — use .value, not getAttribute
  //    hint: titleInput.value reads the live value the user typed
  const currTitle = titleInput.value;

  // 3. Read the genre the same way
  const currGenre = genreInput.value;

  // 4. Log both values to the console
  //    Type a title and genre, submit — confirm you see them in DevTools
  console.log(currTitle);
  console.log(currGenre);

  //   // 5. At the end, reset the form so the inputs are blank for the next entry
  //   //    hint: movieForm.reset() clears all inputs in the form at once
  //   movieForm.reset();

  // 6. Don't build cards yet — that's Phase 4
  movieList.appendChild(createMovieCard(currTitle, currGenre));

  // 3. // TODO: call updateCount() here — you'll write that function in Phase 6
  updateCount();
  // 4. Call movieForm.reset()
  movieForm.reset();
});

// Phase 4: Build a Card

// this function receive the title and genre and build a complete <li> card
/**
 * <li class="movie-card" data-genre="Sci-Fi">
  <div class="movie-info">
    <span class="movie-title">Inception</span>
    <span class="movie-genre">Sci-Fi</span>
  </div>
  <div class="movie-actions">
    <button class="watch-btn">Mark Watched</button>
    <button class="remove-btn">Remove</button>
  </div>
</li>
 */
// and return it

function createMovieCard(title, genre) {
  // 1. Create the outer <li>
  //    - give it the class "movie-card"
  //    - use setAttribute to set data-genre to the genre value
  const li = document.createElement("li");
  li.setAttribute("class", "movie-card");
  li.setAttribute("data-genre", genre);

  // 2. Create a <div> for the info section — class "movie-info"
  //    Inside it, create two <span> elements:
  //    - one with class "movie-title" — set its textContent to title
  //    - one with class "movie-genre" — set its textContent to genre (show "No genre" if empty)
  //    Append both spans into the info div
  const div = document.createElement("div");
  li.appendChild(div);
  div.setAttribute("class", "movie-info");

  const span1 = document.createElement("span");
  div.appendChild(span1);
  span1.setAttribute("class", "movie-title");
  span1.textContent = title;

  const span2 = document.createElement("span");
  div.appendChild(span2);
  span2.setAttribute("class", "movie-genre");
  span2.textContent = genre;

  // 3. Create a <div> for the buttons — class "movie-actions"
  //    Inside it, create two <button> elements:
  //    - one with class "watch-btn" — textContent "Mark Watched"
  //    - one with class "remove-btn" — textContent "Remove"
  //    Append both buttons into the actions div
  const btn_div = document.createElement("div");
  btn_div.setAttribute("class", "movie-actions");
  li.appendChild(btn_div);

  const btn1 = document.createElement("button");
  btn1.setAttribute("class", "watch-btn");
  btn1.innerText = "Mark Watch";

  const btn2 = document.createElement("button");
  btn2.setAttribute("class", "remove-btn");
  btn2.innerText = "Remove";

  // 4. Append the info div and actions div into the <li>
  btn_div.appendChild(btn1);
  btn_div.appendChild(btn2);

  // 5. return the card — do NOT append it here
  //    The function's job is to build and return. Appending is the caller's job.
  return li;
}

// phase 5: button behavior

// event.target is the button that was clicked
// event.target.closest("li") walks UP the tree and returns the first <li> it finds
// This gives you the whole card, not just the button

// const card = event.target.closest("li")
// Now you can do card.remove(), card.classList.toggle("watched"), etc.

movieList.addEventListener("click", (event) => {
  // 1. If the click was not on a BUTTON, return early
  //    hint: event.target.tagName === "BUTTON"
  if (event.target.tagName !== "BUTTON") return;
  // 2. Get the card the button lives in
  //    hint: event.target.closest("li")
  else {
    const card = event.target.closest("li");
    const btn1 = card.querySelector(".watch-btn");
    // 3. Was it the remove button?
    //    - Check: event.target.classList.contains("remove-btn")
    //    - If yes: remove the card from the DOM entirely
    //      hint: card.remove()

    if (event.target.classList.contains("remove-btn")) {
      card.remove();

      //    - // TODO: call updateCount() here — Phase 6
      updateCount();
      //    - // TODO: call applyFilter(currentFilter) here — Phase 6
      applyFilter(currentFilter);
    }
    // 4. Was it the watch button?
    //    - Check: event.target.classList.contains("watch-btn")
    //    - If yes: toggle the "watched" class on the card
    //      hint: card.classList.toggle("watched")
    //   console.log(event.target);

    //    - Update the button's textContent based on the new state:
    //      if the card now has .watched → set button text to "Unmark Watched"
    // const btn1 = document.getElementbyClassName(".watch-btn");
    if (event.target.classList.contains("watch-btn")) {
      if (!card.classList.contains("watched")) {
        btn1.textContent = "Unmark Watch!!";
        card.classList.toggle("watched");

        //      if it no longer has .watched → set button text to "Mark Watched"
        //      hint: card.classList.contains("watched") returns true or false
      } else if (card.classList.contains("watched")) {
        btn1.textContent = "Mark Watch";
        card.classList.toggle("watched");
      }
    }
  }
  //    - // TODO: call applyFilter(currentFilter) here — Phase 6
  applyFilter(currentFilter);
});

// Why do we attach the listener to #movie-list instead of to each button?
// Answer:
//
// What does event.target.closest("li") do?
// Answer:

// phase 6: Count and Filters

// this function counts how many cards are currently in the list and updates the header
function updateCount() {
  // 1. Query all cards in the list
  //    hint: movieList.querySelectorAll(".movie-card").length
  const ttlMovies = movieList.querySelectorAll(".movie-card").length;

  // 2. Update movieCount.textContent
  //    e.g. "3 movies" or "1 movie" — handle the singular if you want a bonus
  movieCount.textContent = `${ttlMovies} movies`;
}

// partB - filter the list

/**
 * Function 1 — update which filter button looks active:

This runs every time the filter changes. Its only job is visual: make the active button look selected and reset all the others. It has no idea what cards exist — that's Function 2's job.
 */

function updateFilterButtons(activeFilter) {
  // 1. Loop over filterBtns
  const filterBtns = document.querySelectorAll(".filter-btn");
  // 2. On each button:
  //    - first remove "active-filter" from every button
  //    - then add it back only to the one whose id matches the active filter
  //      hint: btn.id === "filter-" + activeFilter
  filterBtns.forEach((btn) => {
    btn.setAttribute("class", "filter-btn");
    if (btn.id === "filter-" + activeFilter) {
      btn.classList.add("active-filter");
    }
  });
}

updateFilterButtons("unwatched");

/**
 * Function 2 — show or hide cards based on the filter:

This is the core of the filter feature. It runs whenever a filter button is clicked, and also after any add, remove, or watch toggle — so the view never gets out of sync. It never deletes cards; it just shows or hides them by toggling the filtered-out class.
 */

function applyFilter(filter) {
  // 1. Update the currentFilter variable so the rest of the app knows what's active
  currentFilter = filter;

  // 2. Update which button looks active
  //    hint: call updateFilterButtons(filter)
  updateFilterButtons(filter);

  // 3. Get all cards in the list
  //    hint: movieList.querySelectorAll(".movie-card")
  const allCards = movieList.querySelectorAll(".movie-card");

  // 4. Loop over every card and decide: show it or hide it?
  //    hint: card.classList.contains("watched") tells you the card's current state
  //    hint: card.classList.add("filtered-out") hides it, .remove("filtered-out") shows it
  allCards.forEach((card) => {
    //    if filter === "all"       → show every card
    if (filter === "all") {
      card.classList.remove("filtered-out");
    }
    //    if filter === "watched"   → show cards with .watched, hide the rest
    if (filter == "watched") {
      if (card.classList.contains("watched")) {
        card.classList.remove("filtered-out");
      } else {
        card.classList.add("filtered-out");
      }
    }
    //    if filter === "unwatched" → show cards without .watched, hide the rest
    if (filter === "unwatched") {
      if (!card.classList.contains("watched")) {
        card.classList.remove("filtered-out");
      } else {
        card.classList.add("filtered-out");
      }
    }
  });
}

// The filter-all button calls applyFilter("all")
// The filter-watched button calls applyFilter("watched")
// The filter-unwatched button calls applyFilter("unwatched")

// You can do this with three separate addEventListener calls — one per button
// Or loop over filterBtns and extract the filter name from each button's id
//   hint: btn.id.replace("filter-", "") turns "filter-watched" into "watched"

filterBar.addEventListener("click", (event) => {
  const filter = event.target.id.replace("filter-", "");
  applyFilter(filter);
});

/**
 * I DID IT!
 */

// Part C - clear watched

clearWatchedBtn.addEventListener("click", () => {
  // 1. Select all cards that currently have the "watched" class
  //    hint: movieList.querySelectorAll(".watched")
  const watchedLists = movieList.querySelectorAll(".watched");

  console.log(watchedLists);

  // 2. Loop over them and call .remove() on each
  watchedLists.forEach((watched) => {
    watched.remove();
  });

  // 3. Call updateCount()
  updateCount();

  // 4. Call applyFilter(currentFilter)
  applyFilter(filter);
});
