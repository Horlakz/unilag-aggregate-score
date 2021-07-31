function calculate() {
    var jambScore = document.getElementById("jambscore").value;
    var postUtmeScore = document.getElementById('postutme').value;
    var result = (jambScore / 8) + parseInt(postUtmeScore, 10);
    
    console.log (result);
    console.log (postUtmeScore);

    document.getElementById('displayscore').innerHTML = result;
}

function courses(subjects) {
    if (subjects.value === 'pharmacy') {
        function pharmacy();
    } else if (subjects.value === 'medicine') {
        function medicine();
    }
}

function pharmacy() {
    document.getElementById("grade").style.display = "inherit";
}

function medicine() {
    document.getElementById('grade').style.display = "inherit";
}