// variables needed for the quiz
// var timer

// var choices
// var answer
// var highscore
// var start
// var restart

var questionPosition = 0;

var questions = [
    { 
        question:"What does var stand for?",
        choices: ["Varient", "Variable", "Varment", "Values are repetitive"],
        answer: "Variable",
    },
    {
        question: "What type of code is used to start the base page of a website?",
        choices: ["HTML", "Javascript", "CSS", "Node"],
        answer: "HTML",
    },
    {
        question: "What is the main code used for customizing a page in the way it looks?",
        choices: ["HTML", "Javascript", "CSS", "Bitcoin"],
        answer:"CSS"
    },
    {
        question: "What does a string need to be considered a string?",
        choices: ["!", ".","'","?"],
        answer: "'"
    },
    {
        question: "What does console.log() do?",
        choices: ["Automatically calls for a tutor's help","Debugs your code","Displays an output on the console", "Creates an entire webpage for you"],
        answer: "Displays an output on the console"
    },
];

// loop through array of objects
// create an element on click

$(document).ready(function() {
    $("#startBtn").click(function(){
startQuiz()
    })
    function startQuiz() {
        console.log(questions[questionPosition])
        document.querySelector(".jumbotron").innerHTML = `
        <h1>${questions[questionPosition].question}</h1>
        <button type="choices">${questions[questionPosition].choices[0]}</button>
        <button type="choices">${questions[questionPosition].choices[1]}</button>
        <button type="choices">${questions[questionPosition].choices[2]}</button>
        <button type="choices">${questions[questionPosition].choices[3]}</button>`
        $("button").click(function(e){
            console.log(e.target.innerText)
            if(e.target.innerText == questions[questionPosition].answer){
                console.log("correct")
                incrimentScore(CORRECT_POINTS)

            } else{
                console.log("wrong")
                decrimentScore(INCORRECT_POINTS)
            }
            if(questions.length-1 > questionPosition){
                questionPosition++
                startQuiz()
            } else{alert("You scored " + score + " points. Try again?");
            }
        }
        )
        setInterval (startCountdown, 1000);
    }
});

let scoreText = document.getElementById("score");
let score = 0
let CORRECT_POINTS = 10
let INCORRECT_POINTS = 10

let startingMinutes = 1;
let time = startingMinutes * 60;
let timerEl = document.getElementById("timer");

// setInterval (startCountdown, 1000);
// function incrimentScore(num){}
incrimentScore = num => {
score += num;
scoreText.innerText = "Score:" + score;
$("#score").addClass("green");
$("#score").removeClass("red");
}

decrimentScore = num => {
    score -= num;
    scoreText.innerText = "Score:" + score;
    $("#score").addClass("red");
    $("#score").removeClass("green");
}

function startCountdown(){
let minutes = Math.floor(time / 60)
let seconds = time % 60
    if (time < 0){
      confirm("YOU RAN OUT OF TIME ARE YOU KIDDING ME IT'S 5 QUESTIONS. Anyways, try again?");
      if(confirm){window.location.replace("/index.html")}
      else{alert("alt f4 please")}
      clearInterval(counter);
    }

// ternirary? operator //

seconds = seconds<10 ? "0" + seconds : seconds
    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    };

/* have timer stop at 0:00 inside of counter function
make another conditional function. If timer = 0, then stop function will 
- google:"clear interval"
*/













// function startTimer(duration,display){
// var timer = duration, seconds;
// setInterval(function(){
//     minutes = parseInt(timer/ 60, 10);
//     seconds = parseInt(timer % 60, 10);
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//         timer = duration;
//     }
// }, 1000);
// }

// window.onload = function () {
// var fiveMinutes = 60 * 5,
//     display = document.querySelector('#time');
// startTimer(fiveMinutes, display);
// };

// with tutor work on timer/ work on file directory when linking highscores 
// timer
// highscore generator (not needed)

// on click function to cycle through questions starting from starting question : display question 1
// on click replace jumbotron with question














