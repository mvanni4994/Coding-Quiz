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
            
            } else{
                console.log("wrong")
            }
            if(questions.length-1 > questionPosition){
                questionPosition++
                startQuiz()
            } else{ window.location.replace("file:///C:/Users/mvann/OneDrive/Desktop/Coding/HW/Coding-Quiz/highscores.html");
            }
        }
        )
    }
});

// with tutor work on timer/ work on file directory when linkin highscores 
// timer
// highscore generator (not needed)

// on click function to cycle through questions starting from starting question : display question 1
// on click replace jumbotron with question














