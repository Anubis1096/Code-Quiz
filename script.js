//Questions array
const questions = [
    {
        title: "In a for loop, what does the second statement define?",
        choices: ["Value increase", "Variable", "Condition", "Code to be run"],
        answer: "Condition"
    },    
    {
        title: "An array is contained within _____.",
        choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
        answer: "Square brackets"
    },
    {
        title: "Math.random( ) returns _____.",
        choices: ["a number between 1 and 9", "a number between 0 and 9", "a number between 0 and 1", "a number between 0 and 99"],
        answer: "a number between 0 and 1"
    },
    {
        title: "Under which HTML tag can one write JavaScript code?",
        choices: ["javascript", "script", "scripted", "js"],
        answer: "script"
    },
    {
        title: "The condition in an if/else statement is contained within _____.",
        choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
        answer: "Parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store _____.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    }
]

//Variables
const startButton = document.getElementById('start-button');
const leaderButton = document.getElementById('leaderBoardButton');
const restartButton = document.getElementById('restartButton');
const recordScoreButton = document.getElementById('RecordScoreButton');
const mainContainerEl = document.getElementById('mainScreen');
const questionContainerEl = document.getElementById('questionScreen');
const resultContainerEl = document.getElementById('resultScreen');
const leaderContainerEl = document.getElementById('highScores');
const answerButton = document.querySelectorAll('.answerButton');
const timerEl = document.getElementById('timeLeft');
const scoreEl = document.getElementById('finalScore');
const enterUserName = document.getElementById('enterUserName');
const displayUserInitials = document.getElementById('displayUserInitials');

let currentIndex = 0;
let secondsLeft = (questions.length * 15 + 1);


startButton.addEventListener("click", startQuiz, countDown);

//Initiate quiz
function startQuiz() {
mainContainerEl.classList.add('hide');    
questionContainerEl.classList.remove('hide');
showQuestions();
}

//Populate question and answer text
function showQuestions() {
    let question = questions[currentIndex];       
    
    document.querySelector('#questionTitle').innerHTML = question.title;
    document.querySelector('#choiceA').innerHTML = question.choices[0];
    document.querySelector('#choiceB').innerHTML = question.choices[1];
    document.querySelector('#choiceC').innerHTML = question.choices[2];
    document.querySelector('#choiceD').innerHTML = question.choices[3];
}

for (let i = 0; i < answerButton.length; i++) {
    //When an answer button is clicked, value from that button is grabbed
    answerButton[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        
        //If the answer is correct
        if(event.currentTarget.innerText === questions[currentIndex].answer){
            document.querySelector("#checkAnswer").innerHTML = "Correct!";
        //If the answer is incorrect
        } else {
            //Deduct 5 seconds from the clock and continue 
            document.querySelector("#checkAnswer").innerHTML = "Incorrect.";
            secondsLeft = secondsLeft - 15;
        }
        //Go to the next question
        currentIndex++;
        
        if (currentIndex < 6) {
        
        showQuestions();
        }
    });
}

//Timer
setInterval(countDown, 1000);

function countDown() {
    secondsLeft--;
    timerEl.innerHTML = secondsLeft;

    if (secondsLeft <= 0) {
        questionContainerEl.classList.add('hide');    
        resultContainerEl.classList.remove('hide');
    } else if (currentIndex === 6) {
        questionContainerEl.classList.add('hide');    
        resultContainerEl.classList.remove('hide');
    }
}

//Score
scoreEl.innerHTML = secondsLeft;

//Leader Board
leaderButton.addEventListener("click", leaderBoard);

function leaderBoard() {
    questionContainerEl.classList.add('hide');
    resultContainerEl.classList.add('hide');
    leaderContainerEl.classList.remove('hide');
}

//Record Score
const users =[];

//Create li for each user submission
addUser;

function addUser() {
    for (let i = 0; i < users.length; i++) {
        const initials = users[i];

        const li = document.createElement("li");
        li.textContent = initials;
        userInitials.appendChild(li);
    }
}

//When button is clicked
recordScoreButton.addEventListener("click", recordScore);

function recordScore() {
    resultContainerEl.classList.add('hide');
    leaderContainerEl.classList.remove('hide');

    const userData = enterUserName.value.trim();

    if (userData === "") {
        return;
    }
    
    displayUserInitials.push(userData);

    addUser();
}

//Restart
restartButton.addEventListener("click", restartQuiz);

function restartQuiz() {
    resultContainerEl.classList.add('hide'); 
    leaderContainerEl.classList.add('hide');   
    mainContainerEl.classList.remove('hide');

}