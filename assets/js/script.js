//starting game from the beginner level
 


function runGame() {  }
let beginnerButton=document.getElementsByClassName("btn btn--big btn--green")
let questionarea=document.getElementById("operand1")

beginnerButton=(addEventListener)("click", startGame)

function startGame() {  
console.log("started")
}
// Creates two paralell arrays to compare between swedish and english words for the basic level
let engOne = ["hi", "come", "go", "eat", "drink", " help", "welcome", "goodbye", "morning ", "afternoon", "evening", "night"];
let swedOne = ["hej", "kom", "gå", "ät", "dryck", "hjälp", "välkommen", "hejdå", "morgon", "eftermiddag", "kväll", "natt"];


function checkAnswer() {
    if (swedOne.indexOf("hej") === engOne.indexOf("hi")) {
        alert("Correct answer");
        incrementScore()
    }
    else {
        alert("Incorrect answer");
        incrementWrongAnswer();
    };
}

/**
 * Gets the operands (the swedish indices) and the level operator (basic,details, fill in etc)
 * to return the correct answer.
 */
function calculateCorrectAnswer() {
    let userAnswer = engOne(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Great!");
        incrementScore();

    }
    function incrementScore() {
        let userAnswer = engOne(document.getElementById("answer-box").value);
        let calculatedAnswer = calculateCorrectAnswer();
        let isCorrect = userAnswer === calculatedAnswer[0];

        if (isCorrect) {
            alert("Great!");
            incrementScore();
        } else {
            alert(`try again${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
            incrementWrongAnswer();
        }
    }
    function incrementWrongAnswer() {
    }
function incrementWrongAnswer(){
}

    function displayMoreQuestions() {
    }
}
// start game
function init() {
    // call fucntions here that will start your game
}
init()
    
    