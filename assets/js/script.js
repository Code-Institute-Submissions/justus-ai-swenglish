//starting game 
 

const startButton=document.getElementById ("start-btn")

const nextButton=document.getElementById ("next-btn")

const questionContainerElement=document.getElementById("question-container")

const questionElement=document.getElementById("question")

const buttonsAnswerElement=document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener ("click", startGame)

nextButton.addEventListener ("click",()=> {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame ()  {
   
    shuffledQuestions =questions.sort (() => Math.random(- .5 ))
   
    currentQuestionIndex = 0
   
    questionContainerElement.classList. remove ("hide")
    setNextQuestion()
  }

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText=question.question
  question.answers.forEach(answer=> {
    const button=document.createElement("button")
    button.innerText=answer.text
    button.classList.add("button")
    if (answer.correct) {
      button.dataset.correct=answer.correct
    }
    button.addEventListener("click",selectAnswer)
    answerButtonsElement.appendChild(button)

  } )
 }
 function resetState (){
   nextButton.classList.add("hide")
   while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function selectAnswer (e) {
  const selectedButton=e.target
  const correct =selectedButton.dataSet.correct
  setStatusClass(document.body.correct)
  Array.from(answerButtonsElement.children).forEach(button=> {
    setStatusClass (button, button.dataset.correct)
  })
  nextButton.classList.remove("hide")
}
function setStatusClass(element,correct)  {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  }
  else {element.classList.add("wrong")
  }

}
function clearStatusClass (element) {
  element.classList.remove("correct")
 element.classList.remove("wrong")
}

let questions=[
  { question:"hej",
  answers: [
    { text: "hi", correct: true},
    { text: "come", correct: false},
  ]
}];
// Creates two paralell arrays to compare between swedish and english words for the basic level
let engOne = ["hi", "come", "go", "eat", "drink", " help", "welcome", "goodbye", "morning ", "afternoon", "evening", "night"];
let swedOne = ["hej", "kom", "gå", "ät", "dryck", "hjälp", "välkommen", "hejdå", "morgon", "eftermiddag", "kväll", "natt"];


