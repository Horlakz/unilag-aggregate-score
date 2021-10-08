// export {};

const grades: any = {
	A1: 4,
	B2: 3.6,
	B3: 3.2,
	C4: 2.8,
	C5: 2.4,
	C6: 2
};

const otherSubjectsGrades: string[] = ["other-subjects-grade1", "other-subjects-grade2", "other-subjects-grade3"];

const coursesIds = ["mathematics-grade", "english-grade", ...otherSubjectsGrades];

function sum(...values:number[]) : number {
	var total = 0;

	for (const value of values) {
		total += value;
	}

	return total;
}

function to_int(value: string):number {
    return Number.parseInt(value);
  }
  
  function get_grade_point(grade:any):number {
    return grades[grade];
  }
  
  function display(value:number) {
    var display_container:any = document.querySelector("#message");
    var display_board : any = document.querySelector("#result");
    var display_button : any = document.querySelector("#calculate");
    const noScore = document.querySelector('#no-score');
    const resetValues = document.getElementById("reset-values");
  
    display_container.style!.display = "block";
  
    if (value) {
      display_board.innerText = value;
      display_button!.innerText = "Calculate again";
      // resetValues.click()
    } 
  
  function calculate_point() {
    const courses_grade_points = [];
    for (const course of coursesIds) {
      var grade:number = parseInt((document.querySelector(`#${course}`) as HTMLInputElement).value, 10);
      courses_grade_points.push(get_grade_point(grade));
    }
    
    const [mathematics, english, otherSubjects1, otherSubjects2, otherSubjects3] = courses_grade_points;
  

    let grade_scores:number, jambscore:number, postutmescore:number;
  
    grade_scores = sum(mathematics, english, otherSubjects1, otherSubjects2, otherSubjects3);
    jambscore = to_int((<HTMLInputElement>document.querySelector(`#jambscore`)).value) / 8;
    postutmescore = to_int((<HTMLInputElement>document.querySelector(`#postutmescore`)).value);
  
    var total_score:number = sum(grade_scores, jambscore, postutmescore);
    display(total_score);
  }
}