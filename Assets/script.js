// variables needed for the quiz
var timer
var questions
var choices
var answer
var highscore
var start
var restart

var questionOne = {
    question:"What does var stand for?",
    choices: ["Varient", "Variable", "Varment", "Values are repetitive"],
    answer: "Variable",
}

var questionTwo = {
    question: "What type of code is used to start the base page of a website?",
    choices: ["HTML", "Javascript", "CSS", "Node"],
    answer: "HTML",
}

var questionThree = {
    question: "What is the main code used for customizing a page in the way it looks?",
    choices: ["HTML", "Javascript", "CSS", "Bitcoin"],
    answer:"CSS"
}

var questionFour = {
    question: "What does a string need to be considered a string?",
    choices: ["!", ".","'","?"],
    answer: "'"
}

var questionFive = {
    question: "What does console.log() do?",
    choices: ["Automatically calls for a tutor's help","Debugs your code","Displays an output on the console", "Creates an entire webpage for you"],
    answer: "Displays an output on the console"
}

// function timeDisplayer() {
//     timer.textcontent = "Time Left:" + time + "seconds.";
//     if (time < 0) {
//         clearInterval(interval);
//         alert("You're out of time!")
//         gameOver();
//     }
// }

// function timer(){
//     time=50;
//     interval = setInterval(function() {
//         time--;
//         timeDisplay()
//     }, 1000);
// }

// function start(event){
//     event.stopPropgation();
//     gameTimer();
//     Question = -2;
//     start.style.display = "none";
//     questions.textContent = "";
//     choices.textContent = "";
//     nextQuestion();
// }

$(document).ready(function() {
    $("#startBtn").click(function(){
        alert("I have been clicked");
    })
});
