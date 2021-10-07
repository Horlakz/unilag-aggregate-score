"use strict";
// COLLECTING RESOURCES
const jambScore = parseInt(document.getElementById("jambscore").value, 10);
const postUtmeScore = parseInt(
  document.getElementById("postutmescore").value,
  10
);
const calculateBtn = document.getElementById("calculate");
const message = document.getElementById("message");

const resetValues = document.getElementById("reset-values");
console.log(jambScore, postUtmeScore);
// COLLECTING AND PROCESSING THE OPTIONS
//collecting grades value
const mathsGrade = parseInt(
  document.getElementById("mathematics-grade").value,
  10
);
const engGrade = parseInt(document.getElementById("english-grade").value, 10);
const otherSubGrades1 = parseInt(
  document.getElementById("other-sub-grade1").value,
  10
);
const otherSubGrades2 = parseInt(
  document.getElementById("other-sub-grade2").value,
  10
);
const otherSubGrades3 = parseInt(
  document.getElementById("other-sub-grade3").value,
  10
);
const oLevelResult =
  mathsGrade + engGrade + otherSubGrades1 + otherSubGrades2 + otherSubGrades3;
console.log(oLevelResult);
// CALCULATOR FUNCTION
const totalResult = jambScore / 8 + postUtmeScore + oLevelResult;
console.log(totalResult);
// DISPLAYING THE RESULT
calculateBtn.addEventListener("click", displayResult);
function displayResult() {
  const result = document.getElementById("result");
  message.style.display = "block";
  calculateBtn.innerText = "Calculate Again";
  result.innerText = totalResult.toString();
  resetValues.click();
}
