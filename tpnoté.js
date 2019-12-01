document = "tpnoté.html";


let score = 0;
let score_j = document.getElementById("score");
let niveau_j = document.getElementById("niveau");
let next = document.getElementById("next")


function correct() {
    answer = document.getElementById("q1_r");
    if (answer.checked === true) {
        addScore();
    }
    answer2 = document.getElementById("q2_r");
    if (answer2.checked === true) {
        addScore();
    }
    answer3 = document.getElementById("q3_r");
    if (answer3.checked === true) {
        addScore();
    }
    answer4 = document.getElementById("q4_r");
    if (answer4.checked === true) {
        addScore();
    }

    niveau_suivant();
}

function addScore() {
    score++;
    score_j.innerHTML = score;
}


function niveau_suivant() {
    if(score > 3) {
        niveau_j.innerHTML = "You answered every question correctly !";
        console.log("test");
        next.innerHTML = "You can go to the next level";
    }
    else {
        score=0
    }
    
}

