function calculate() {
    var jambScore = document.getElementById("jambscore").value;
    var postUtmeScore = document.getElementById('postutme').value;
    var result = (jambScore / 8) + parseInt(postUtmeScore, 10);
    
    console.log (result);
    console.log (postUtmeScore);

    document.getElementById('displayscore').innerHTML = result;
}

function courses(subjects) {
    if (subjects.value === 'mathematics') {
        function mathematics();
    } else if (subjects.value === 'chemistry') {
        function chemistry();
    }
}

function mathematics() {
    document.getElementById("grade").style.display = "inherit";
}

function chemistry() {
    document.getElementById('grade').style.display = "inherit";
}