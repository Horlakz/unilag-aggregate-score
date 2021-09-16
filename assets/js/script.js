const calculateBtn = document.querySelector("#calculate")
const message = document.querySelector("#message")
const jambScore = document.querySelector("#jambscore").value;
const postUtmeScore = document.querySelector("#postutmescore").value;



// Event Listeners
calculateBtn.addEventListener('click', calculate)

// Calculte aggregate score
function calculate() {
    console.log(jambScore)

    // console.log(jambScoreResult + postUtmeScore)

    displayResult()
}


function displayResult() {
    message.style.display = "block";
    calculateBtn.value = "Calculate again";
}