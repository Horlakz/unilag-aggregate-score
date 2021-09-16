const calculateBtn = document.querySelector("#calculate")
const message = document.querySelector("#message")
const jambScore = document.querySelector("#jambscore").value;
const postUtmeScore = document.querySelector("#postutmescore").value;
const inputData = document.getElementById("data-input")


// Event Listeners
calculateBtn.addEventListener('click', calculate)

// Calculte aggregate score
function calculate() {
    console.log(jambScore)

    // console.log(jambScoreResult + postUtmeScore)
    
    // refreshpage()
    displayResult()
}

function refreshpage() {
    inputData.reset()
}

function displayResult() {
    console.log(jambScore)
    message.style.display = "block";
    calculateBtn.innerHTML = "Calculate again";
}