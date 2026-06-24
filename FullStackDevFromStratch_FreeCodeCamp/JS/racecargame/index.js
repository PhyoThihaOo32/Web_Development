let welcomeEl = document.getElementById("welcome-el")

let firstName = "Pepito"
let lastName = "Mucho"
let fullName = firstName + " " + lastName
let greeting = "Hello "

welcomeEl.innerText = greeting + " " + fullName

welcomeEl.innerText += "❤️"

function greetingPepito() {
    console.log(greeting + " " + fullName)
}

greetingPepito()
greetingPepito()
greetingPepito()

let point = 3

function add3Points() {
    point += 3
}

function remove1Point() {
    point--;
}

