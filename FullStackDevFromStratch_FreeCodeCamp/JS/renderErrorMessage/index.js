// when the user clicks the purchase button, render out 'something went wrong, please try again'
// in the paragraph that has the id='error'

let errorMessage = "Something went wrong, please try again."
let renderMessage = document.getElementById("error")

function purchaseError() {
    renderMessage.textContent = errorMessage

}

