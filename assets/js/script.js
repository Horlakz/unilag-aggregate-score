const calculateBtn = document.getElementById("calculate")
const message = document.getElementById("message")
const jambScore = document.getElementById("jambscore").value;
const postUtmeScore = document.getElementById("postutmescore").value;


// Event Listeners
calculateBtn.addEventListener('click', calculate)

// Calculte aggregate score
function calculate() {
    let jambScoreResult = parseInt((jambScore / 8), 10)
    // console.log(jambScoreResult + postUtmeScore)

    displayResult()
}


function displayResult() {
    message.style.display = "block";
    calculateBtn.innerHTML = "Calculate again";
}