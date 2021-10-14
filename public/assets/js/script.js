"use strict";
// export {};
// ASSIGNING SCORES TO VALUES
const grades = {
    A1: 4,
    B2: 3.6,
    B3: 3.2,
    C4: 2.8,
    C5: 2.4,
    C6: 2,
};
// id OF OTHER SUBJECTS
const otherSubjectsGrades = [
    "other-subjects-grade1",
    "other-subjects-grade2",
    "other-subjects-grade3",
];
// ALL O-LEVEL IDs
const coursesIds = [
    "mathematics-grade",
    "english-grade",
    ...otherSubjectsGrades,
];
// ADDING ALL THE SCORES TOGETHER
function sum(...values) {
    var total = 0;
    for (const value of values) {
        total += value;
    }
    return total;
}
// PARSING THE JAMB SCORE AND POST-UTME SCORE VALUES INTO A NUMBER
function to_int(value) {
    return Number.parseInt(value);
}
// CONVERTING THE OPTION VALUE INTO SCORE VALUE
function get_grade_point(grade) {
    return grades[grade];
}
// DISPLAYING THE RESULT FUNCTION
function display(value) {
    var display_container = document.querySelector("#message"); // THE RESULT MESSAGE
    var display_board = document.querySelector("#result"); // THE RESULT BLOCK
    var display_button = document.querySelector("#calculate"); // CALCULATE BUTTON
    display_container.style.display = "block";
    if (value) {
        display_board.innerText = value;
        display_button.innerText = "Calculate again";
        // resetValues.click() NOT NECESSARY
    }
}
// CLICK BUTTON
const cacl_btn = document.getElementById("calculate");
// EVENT LISTENER
cacl_btn === null || cacl_btn === void 0 ? void 0 : cacl_btn.addEventListener('click', calculate_point);
// CALCULATOR FUNCTION
function calculate_point() {
    const courses_grade_points = [];
    for (const valueResult of coursesIds) {
        var grade = document.querySelector(`#${valueResult}`).value;
        courses_grade_points.push(get_grade_point(grade));
    } // LOOPING THROUGH THE O-LEVEL IDS TO GET THE VALUES
    const [mathematics, english, otherSubjects1, otherSubjects2, otherSubjects3,] = courses_grade_points; // GETTING THE O-LEVEL VALUES
    let grade_scores, jambscore, postutmescore;
    grade_scores = sum(mathematics, english, otherSubjects1, otherSubjects2, otherSubjects3); // ADDING THE O-LEVEL VALUES
    jambscore =
        to_int(document.querySelector(`#jambscore`).value) / 8; // JAMBSCORE
    postutmescore = to_int(document.querySelector(`#postutmescore`).value // POST-UTME SCORE
    );
    var total_score = sum(grade_scores, jambscore, postutmescore); // ADDING THE TOTAL SCORES
    display(total_score); // RUNNING THE DISPLAY FUNCTION
}
