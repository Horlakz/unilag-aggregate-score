function calculate() {
    var jambScore = document.getElementById("jambscore").value;
    var postUtmeScore = document.getElementById('postutme').value;
    var result = (jambScore / 8) + parseInt(postUtmeScore, 10);
    
    console.log (result);
    console.log (postUtmeScore);

    document.getElementById('displayscore').innerHTML = result;
}

const data = {
    engineering: {
      courses: [
        "maths",
        "eng",
        "chem",
        "phy"
      ]
    }
  }


function subject(sub) {
    if (sub.value === 'pharmacy') {
        function pharmacy();
    } else if (sub.value === 'medicine') {
        function medicine();
    }
}

function pharmacy() {
    document.getElementById('subjects').style.display = "inherit";
}

function medicine() {
    document.getElementById('subjects').style.display = "inherit";
}