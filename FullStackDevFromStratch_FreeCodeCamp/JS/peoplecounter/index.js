// document.getElementById("count-el").innerText = 5

// initialize the count as 0
// listen for clicks on the increment button

// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;


// grab the count-el element, store it in the count-el var
let countEl = document.getElementById("count-el")

// grab the log-count element, store it in the saveCount var
let saveCount = document.getElementById("log-count")


function increment() {
    count++;
    // set countEl's innerText to the count
    countEl.innerText = count

}

function decrement() {
    count--;
    countEl.innerText = count
}


// 1. create a function, save(), which logs out the count when it's called
function save() {

    let countStr = count + " - "
    saveCount.textContent += countStr
    count = 0
    countEl.textContent = count
}
