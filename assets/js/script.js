const grades = {
  A1: 4,
  B2: 3.6,
  B3: 3.2,
  C4: 2.8,
  C5: 2.4,
  C6: 2.2,
};

const courses_ids = ["mathematics-grade", "english-grade", "chemistry-grade"];

function sum(...values) {
  var total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

function to_int(value) {
  return Number.parseInt(value);
}

function get_grade_point(grade) {
  return grades[grade];
}

function display(value) {
  var display_container = document.querySelector("#message");
  var display_board = document.querySelector("#result");
  var display_button = document.querySelector("#calculate");

  display_container.style.display = "block";

  if (value) {
    display_board.innerText = value;
    display_button.innerText = "Calculate again";
  }
}

function calculate_point() {
  const courses_grade_points = [];
  for (const course of courses_ids) {
    var grade = document.querySelector(`#${course}`).value;
    courses_grade_points.push(get_grade_point(grade));
  }
  const [mathematics, english, chemistry] = courses_grade_points;

  let grade_scores, jambscore, postutmescore;

  grade_scores = sum(mathematics, english, chemistry);
  jambscore = to_int(document.querySelector(`#jambscore`).value) / 8;
  postutmescore = to_int(document.querySelector(`#postutmescore`).value);

  var total_score = sum(grade_scores, jambscore, postutmescore);
  display(total_score);
}
