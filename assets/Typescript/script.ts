

// COLLECTING RESOURCES
const jambScore:number = parseInt((<HTMLInputElement>document.getElementById("jambscore"))!.value, 10)
const postUtmeScore:number = parseInt((<HTMLInputElement>document.getElementById("postutmescore")).value, 10)
const calculateBtn = document.getElementById("calculate")
const message = document.getElementById("message")
const result = document.getElementById("result")
const resetValues = document.getElementById("reset-values")

console.log (jambScore, postUtmeScore)

// COLLECTING AND PROCESSING THE OPTIONS
//collecting grades value
const mathsGrade:number = parseInt((<HTMLInputElement>document.getElementById("mathematics-grade"))!.value, 10)
const engGrade:number = parseInt((<HTMLInputElement>document.getElementById("english-grade")!).value, 10)
const otherSubGrades1:number = parseInt((<HTMLInputElement>document.getElementById("other-sub-grade1"))!.value, 10)
const otherSubGrades2:number = parseInt((<HTMLInputElement>document.getElementById("other-sub-grade2"))!.value, 10)
const otherSubGrades3:number = parseInt((<HTMLInputElement>document.getElementById("other-sub-grade3"))!.value, 10)

const oLevelResult:number = mathsGrade + engGrade + otherSubGrades1 + otherSubGrades2 + otherSubGrades3
console.log (oLevelResult)

// CALCULATOR FUNCTION
const totalResult:number = (jambScore/8) + postUtmeScore + oLevelResult
console.log (totalResult)

// DISPLAYING THE RESULT
calculateBtn.addEventListener('click', displayResult)

function displayResult() {
    message.style.display ="block"
    calculateBtn.innerText = "Calculate Again"
    result.innerText = totalResult.toString()
    resetValues.click()

}
