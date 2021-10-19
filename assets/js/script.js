
/* jshint esversion: 8*/
//starting game 
 

let startButton=document.getElementById ("start-btn");

let nextButton=document.getElementById ("next-btn");

let questionContainerElement=document.getElementById("question-container");

let questionElement=document.getElementById("question");

let answerButtonsElement=document.getElementById("answer-buttons");

let scoreText=document.querySelector('#score');
let progressBarFull=document.querySelector("#progressBarFull");
let shuffledQuestions, currentQuestionIndex ;

startButton.addEventListener ("click", startGame);

nextButton.addEventListener ("click",()=> {
  currentQuestionIndex++
  setNextQuestion()
});

function startGame ()  {
  startButton.classList.add("hide")
   
    shuffledQuestions =question.sort (() => Math.random()- .5 )
   
    currentQuestionIndex = 0
   
    questionContainerElement.classList. remove ("hide")
    setNextQuestion()
  };

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
  questionElement.innerText=question.question
  question.answers.forEach(answer=> {
    let button=document.createElement("button")
    button.innerText=answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct=answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)

  } )
 };
 function resetState (){
   clearStatusClass(document.body)
   nextButton.classList.add("hide")
   while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
};
function selectAnswer (e) {
  let selectedButton=e.target
  let correct =selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button=> {
    setStatusClass (button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex +1) { 
    nextButton.classList.remove("hide")
  } else{
    startButton.innerText="Restart"
    startButton.classList.remove="hide"
  }
};
  

function setStatusClass(element, correct) {
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
// Creates two paralell arrays to compare between swedish and english words for the basic level
let question=[
  { question:"hej",
  answers: [
    { text: "hi", correct: true},
    { text: "come", correct: false},
    { text: "eat", correct: false},
    { text: "drink", correct: false},
  ]
},{ question:"kom",
answers: [
  { text: "drink", correct: false},
    { text: "read", correct: false},
  { text: "eat", correct: false},
  { text: "come", correct: true},
]
},{ question:"morgon",
answers: [
  { text: "evening", correct: false},
  { text: "night", correct: false},
  { text: "morning", correct: true},
    { text: "afternoon", correct: false},
  ]
}
    ,{ question:"hjälp",
    answers: [
      { text: "go", correct: false},
        { text: "come", correct: false},
      { text: "breath", correct: false},
      { text: "help", correct: true},
    ]
    },
    { question:"kväll",
answers: [
  { text: "night", correct: false},
    { text: "run", correct: false},
  { text: "evening", correct: true},
  { text: "bite", correct: true},
]
},
{ question:"kompis",
answers: [
  { text: "someone", correct: false},
    { text: "write", correct: false},
  { text: "neighbour", correct: false},
  { text: "friend", correct: true},
]
},
{ question:"granne",
answers: [
  { text: "neigbour", correct: true},
    { text: "stranger", correct: false},
  { text: "eat", correct: false},
  { text: "come", correct: false},
]
},
{ question:"leka",
answers: [
  { text: "dance", correct: false},
    { text: "breathe", correct: false},
  { text: "like", correct: false},
  { text: "play", correct: true},
]
},
{ question:"vit",
answers: [
  { text: "violet", correct: false},
    { text: "brown", correct: false},
  { text: "white", correct: true},
  { text: "red", correct: false},
]
},
{ question:"kläder",
answers: [
  { text: "t-shirt", correct: false},
    { text: "trouser", correct: false},
  { text: "tie", correct: false},
  { text: "clothes", correct: true},
]
},
{ question:"svart",
answers: [
  { text: "grey", correct: false},
    { text: "red", correct: false},
  { text: "blue", correct: false},
  { text: "black", correct: true},
]
},
{ question:"måndag",
answers: [
  { text: "holiday", correct: false},
    { text: "monday", correct: true},
  { text: "birthday", correct: false},
  { text: "sunday", correct: false},
]
},{ question:"röd",
answers: [
  { text: "red", correct: true},
    { text: "green", correct: false},
  { text: "grey", correct: false},
  { text: "yellow", correct: false},
]
},
{ question:"onsdag",
answers: [
  { text: "saturday", correct: false},
    { text: "friday", correct: false},
  { text: "wednesday", correct: true },
  { text: "come", correct: false},
]
},
{ question:"lördag",
answers: [
  { text: "monday", correct: false},
    { text: "birthday", correct: false},
  { text: "weekend", correct: false},
  { text: "saturday", correct: true},
]
},
{ question:"hejdå",
answers:[ 
  { text: "drink", correct: false},
    { text: "swallow", correct: false},
  { text: "enjoy", correct: false},
  { text: "bye", correct: true},
]
}

];
let SCORE_POINTS=100;
let MAX_QUESTIONS=16;
startGame=()=> {
  questionCounter=0
  score=0
  availableQuestions =[...questions]
  getNewQuestion()
};
/* keeping track of the score*/
getNewQuestion=() => {
  if (availableQuestions.length ===0 ||questionsCounter >MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore',score)
    return window.location.assign('/end.html')
}


questionsCounter++
progressText.innerText=  `Question ${questionCounter}of ${MAX_QUESTIONS}´
progressBarFull.style.width= `$ {(questionCounter/MAX_QUESTIONS)*100}%´
let questionsIndex=Math.floor(Math.random()*availableQuestions.length)
currentQuestions=availableQuestions [questionsIndex]
question.innerText=currentQuestion.question
choices.forEach(Choice=>{
  let number=choice.dataset ['number']
  choice.innerText=currentQuestion ['choice'+number]
})
availableQuestions.splice(questionsIndex,1)
acceptingAnswers=true
};
choices.forEach(Choice=>{
  choice.addEventListener('click',e =>{
    if(!acceptingAnswers) return
    
    acceptingAnswers=false
    let selectedChoice=e.target
    let selectedAnswer=selectedChoice.dataset ['number']
    
    let classToApply=selectedAnswer==currentQuestion.answer ?'correct':'incorrect'
    if(classToApply==='correct'){
      incrementscore(SCORE_POINTS)}
      selectedChoice.parentElement.classList.add(classToApply)
      setTimeout(()=>{
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
      },1000)
    )}
)}

incrementscore=num=> {
  score +=num
  scoreText.innerText=score
}