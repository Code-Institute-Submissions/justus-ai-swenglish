//starting game 
 

let startButton=document.getElementById ("start.btn")
let questionContainerElement=getElementById("question-container")
startButton.addEventListener ("click",startGame)
function startGame () {
    console.log("started")
    startButton.classList.add("hide")
    questionContainerElement.classList, remove ("hide")
    setNextQuestion ()
  }

funtion setNextQuestion () {
}
// Creates two paralell arrays to compare between swedish and english words for the basic level
let engOne = ["hi", "come", "go", "eat", "drink", " help", "welcome", "goodbye", "morning ", "afternoon", "evening", "night"];
let swedOne = ["hej", "kom", "gå", "ät", "dryck", "hjälp", "välkommen", "hejdå", "morgon", "eftermiddag", "kväll", "natt"];


