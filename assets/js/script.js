const calculateBtn = document.querySelector("#calculate")
const message = document.querySelector("#message")
const jambScore = document.querySelector("#jambscore").value;
const postUtmeScore = document.querySelector("#postutmescore").value;
const inputData = document.getElementById("data-input")
const answer = documemt.getElementById("result")

// Event Listeners
calculateBtn.addEventListener('click', calculate)

// Calculte aggregate score
function calculate() {
    const avg = ((jambScore / 8) + postUtmeScore)
    console.log(avg)

    // console.log(jambScoreResult + postUtmeScore)
    
    // refreshpage()
    message.style.display = "block";
    answer.innerText = avg;
    calculateBtn.innerHTML = "Calculate again";
    displayResult()
}

function refreshpage() {
    inputData.reset()
}

function displayResult() {
    console.log(jambScore)
    message.style.display = "block";
    message.innerText = avg;
    calculateBtn.innerHTML = "Calculate again";
}