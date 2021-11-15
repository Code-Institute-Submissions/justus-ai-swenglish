
/* jshint esversion: 8*/
//starting game 

const question = document.querySelector(“#question”);
const choices = Array.from(document.querySelectorAll(“.choice-text”);
const progressText =document.querySelector(“#progressText”);
const scoreText = document.querySelector(“#score”);
progressBarFull=document.querySelector(#progressBarFull”);

let currentQuestion={}
let acceptingAnswers=true
let score= 0
let questionCounter = 0
let availableQuestions =  []
  let questions=[
{
    question: "hej",
    answers: [
      { choice1: "hi", correct: true },
      { choice2: "come", correct: false },
      { choice3: "eat", correct: false },
      { choice4: "drink", correct: false },
      { answer: 1 },
    ]
  }, {
    question: "kom",
    answers: [
      { choice1: "drink", correct: false },
      { choice2: "read", correct: false },
      { choice3: "eat", correct: false },
      { choice4: "come", correct: true },
      { answer: 4 },
    ]
  }, {
    question: "morgon",
    answers: [
      { choice1: "evening", correct: false },
      { choice2: "night", correct: false },
      { choice3: "morning", correct: true },
      { choice4: "afternoon", correct: false },
      { answer: 3 },
    ]
  }
  , {
    question: "hjälp",
    answers: [
      { choice1: "go", correct: false },
      { choice2: "come", correct: false },
      { choice3: "breath", correct: false },
      { choice4: "help", correct: true },
      { answer: 4 },
    ]
  },
  {
    question: "kväll",
    answers: [
      { choice1: "night", correct: false },
      { choice2: "run", correct: false },
      { choice3: "evening", correct: true },
      { choice4: "bite", correct: false },
      { answer: 3 },
    ]
  },
  {
    question: "kompis",
    answers: [
      { choice1: "someone", correct: false },
      { choice2: "write", correct: false },
      { choice3: "neighbour", correct: false },
      { choice4: "friend", correct: true },
      { answer: 4 },
    ]
  },
  {
    question: "granne",
    answers: [
      { choice1: "neigbour", correct: true },
      { choice2: "stranger", correct: false },
      { choice3: "eat", correct: false },
      { choice4: "come", correct: false },
      { answer: 1 },
    ]
  },
  {
    question: "leka",
    answers: [
      { choice1: "dance", correct: false },
      { choice2: "breathe", correct: false },
      { choice3: "like", correct: false },
      { choice4: "play", correct: true },
      { answer: 4 },
    ]
  },
  {
    question: "vit",
    answers: [
      { choice1: "violet", correct: false },
      { choice2: "brown", correct: false },
      { choice3: "white", correct: true },
      { choice4: "red", correct: false },
      { answer: 3 },
    ]
  },
  {
    question: "kläder",
    answers: [
      { choice1: "t-shirt", correct: false },
      { choice2: "trouser", correct: false },
      { choice3: "tie", correct: false },
      { choice4: "clothes", correct: true },
      { answer: 4 },
    ]
  },
  {
    question: "svart",
    answers: [
      { choice1: "grey", correct: false },
      { choice2: "red", correct: false },
      { choice3: "blue", correct: false },
      { choice4: "black", correct: true },
      { answer: 4 },
    ]
  },
  {
    question: "måndag",
    answers: [
      { choice1: "holiday", correct: false },
      { choice2: "monday", correct: true },
      { choice3: "birthday", correct: false },
      { choice4: "sunday", correct: false },
      { answer: 2 },
    ]
  }, {
    question: "röd",
    answers: [
      { choice1: "red", correct: true },
      { choice2: "green", correct: false },
      { choice3: "grey", correct: false },
      { choice4: "yellow", correct: false },
      { answer: 1 },
    ]
  },
  {
    question: "onsdag",
    answers: [
      { choice1: "saturday", correct: false },
      { choice2: "friday", correct: false },
      { choice3: "wednesday", correct: true },
      { choice4: "come", correct: false },
      { answer: 3 },
    ]
  },
  {
    question: "lördag",
    answers: [
      { choice1: "monday", correct: false },
      { choice2: "birthday", correct: false },
      { choice3: "weekend", correct: false },
      { choice4: "saturday", correct: true },
      { answer: 4 },
    ]
  },
  {
    question: "hejdå",
    answers: [
      { choice1: "drink", correct: false },
      { choice2: "swallow", correct: false },
      { choice3: "enjoy", correct: false },
      { choice4: "bye", correct: true },
      { answer: 4 },
    ]
  }

];

const SCORE_POINTS = 100
const MAX_QUESTIONS= 16
startGame = () => {
    questionCounter= 0
    score = 0
    availableQuestions = […questions]
    getNewQuestions ()
}


getNewQuestion=() => {
  if (availableQuestions.length ===0 ||questionsCounter >MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore',score)
    return window.location.assign('/end.html')
}

questionsCounter++
progressText.innerText= `Question ${questionCounter}of ${MAX_QUESTIONS}´
progressBarFull.style.width= `$ {(questionCounter/MAX_QUESTIONS)*100}%´

const questionsIndex=Math.floor(Math.random() * availableQuestions.length)
currentQuestion=availableQuestions[questionsIndex]
question.innerText=currentQuestion.question

choices.forEach(choice=>{
  const number=choice.dataset ['number']
  choice.innerText=currentQuestion ['button'+number]
})
availableQuestions.splice(questionsIndex,1)
acceptingAnswers=true
};
choices.forEach(Choice=>{
  choice.addEventListener('click',e =>{
    if(!acceptingAnswers) return
    
    acceptingAnswers=false
    const selectedChoice=e.target
    const selectedAnswer=selectedChoice.dataset ['number']
    
    let classToApply=selectedAnswer==currentQuestion.answer  ?'correct':'incorrect'
    if(classToApply==='correct'){
      incrementscore(SCORE_POINTS)}
      selectedChoice.parentElement.classList.add(classToApply)
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
      },1000)
    })
})

incrementscore=num=> {
  score +=num
  scoreText.innerText=score
}
startGame()
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })













