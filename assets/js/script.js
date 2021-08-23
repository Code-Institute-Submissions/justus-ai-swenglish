//wait for the DOM to finish before running the code
//get the button elements and event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
   function runGame() {
   
       // Creates two paralell arrays to compare between swedish and english words for the basic level
       let engOne=["hi","come", "go", "eat", "drink"," help", "welcome",  "goodbye", "morning ","afternoon","evening","night" ];
       let swedOne=["hej","kom","gå","ät","dryck","hjälp","välkommen","hejdå","morgon","eftermiddag","kväll","natt" ];
   }
   function checkAnswer(){
   if (swedOne.indexOf("hej")===engOne.indexOf("hi")){ return[ "correct answer"];

}
else{ alert[ "incorrect answer"];
   
};
}
/**
 * Gets the operands (the swedish indices) and the level operator (basic,details, fill in etc)
 * to return the correct answer.
 */
function calculateCorrectAnswer(){
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
function incrementScore(){
}
function incrementWrongAnswer(){
}
function displayBeginnerQuestions(){
}

function displayFillInBlanks(){
}


