let count = 0;

let countEl = document.getElementById("count-el");
let saveCount = document.getElementById("log-count");

function increment() {
    count++;
    countEl.textContent = count;

    // subtle animation effect
    countEl.classList.add("pulse");
    setTimeout(() => {
        countEl.classList.remove("pulse");
    }, 200);
}

function save() {
    if (count === 0) return;

    let countStr = count + " reps 🌿 | ";
    saveCount.textContent += countStr;

    count = 0;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = count;

    // Clear previous records
    saveCount.textContent = "Previous Sets:";
}