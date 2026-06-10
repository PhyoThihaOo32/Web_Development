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
