// export {};

// ASSIGNING SCORES TO VALUES
const grades: any = {
  A1: 4,
  B2: 3.6,
  B3: 3.2,
  C4: 2.8,
  C5: 2.4,
  C6: 2,
};

// id OF OTHER SUBJECTS
const otherSubjectsGrades: string[] = [
  "other-subjects-grade1",
  "other-subjects-grade2",
  "other-subjects-grade3",
];

// ALL O-LEVEL IDs
const coursesIds: string[] = [
  "mathematics-grade",
  "english-grade",
  ...otherSubjectsGrades,
];

// ADDING ALL THE SCORES TOGETHER
function sum(...values: number[]): number {
  var total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

// PARSING THE JAMB SCORE AND POST-UTME SCORE VALUES INTO A NUMBER
function to_int(value: string): number {
  return Number.parseInt(value);
}

// CONVERTING THE OPTION VALUE INTO SCORE VALUE
function get_grade_point(grade: string): number {
  return grades[grade];
}

// DISPLAYING THE RESULT FUNCTION
function display(value: number) {
  var display_container: any = document.querySelector("#message"); // THE RESULT MESSAGE
  var display_board: any = document.querySelector("#result"); // THE RESULT BLOCK
  var display_button: any = document.querySelector("#calculate"); // CALCULATE BUTTON

  display_container.style.display = "block";

  if (value) {
    display_board.innerText = value;
    display_button!.innerText = "Calculate again";
    // resetValues.click() NOT NECESSARY
  }
}

// CALCULATOR FUNCTION
function calculate_point() {
  const courses_grade_points = [];
  for (const valueResult of coursesIds) {
    var grade: string = (
      document.querySelector(`#${valueResult}`) as HTMLInputElement
    ).value;
    courses_grade_points.push(get_grade_point(grade));
  } // LOOPING THROUGH THE O-LEVEL IDS TO GET THE VALUES

  const [
    mathematics,
    english,
    otherSubjects1,
    otherSubjects2,
    otherSubjects3,
  ]: number[] = courses_grade_points; // GETTING THE O-LEVEL VALUES

  let grade_scores: number, jambscore: number, postutmescore: number;

  grade_scores = sum(
    mathematics,
    english,
    otherSubjects1,
    otherSubjects2,
    otherSubjects3
  ); // ADDING THE O-LEVEL VALUES

  jambscore =
    to_int((<HTMLInputElement>document.querySelector(`#jambscore`)).value) / 8; // JAMBSCORE

  postutmescore = to_int(
    (<HTMLInputElement>document.querySelector(`#postutmescore`)).value // POST-UTME SCORE
  );

  var total_score: number = sum(grade_scores, jambscore, postutmescore); // ADDING THE TOTAL SCORES
 
  display(total_score); // RUNNING THE DISPLAY FUNCTION
}
