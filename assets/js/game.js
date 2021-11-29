/* jshint esversion: 8*/

// global variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let progressBarFull = document.querySelector('#progressBarFull');
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let startGame, getNewQuestion, incrementScore;
​
let questions = [{
	question: "hej",
	choice1: "hi",
	choice2: "come",
	choice3: "eat",
	choice4: "drink",
	answer: 1
}, {
	question: "kom",
	choice1: "drink",
	choice2: "read",
	choice3: "eat",
	choice4: "come",
	answer: 4
}, {
	question: "morgon",
	choice1: "evening",
	choice2: "night",
	choice3: "morning",
	choice4: "afternoon",
	answer: 3,
}, {
	question: "hjälp",
	choice1: "go",
	choice2: "come",
	choice3: "breath",
	choice4: "help",
	answer: 4
}, {
	question: "kväll",
	choice1: "night",
	choice2: "run",
	choice3: "evening",
	choice4: "bite",
	answer: 3,
}, {
	question: "kompis",
	choice1: "someone",
	choice2: "write",
	choice3: "neighbour",
	choice4: "friend",
	answer: 4,
}, {
	question: "granne",
	choice1: "neigbour",
	choice2: "stranger",
	choice3: "eat",
	choice4: "come",
	answer: 1,
}, {
	question: "leka",
	choice1: "dance",
	choice2: "breathe",
	choice3: "like",
	choice4: "play",
	answer: 4,
}, {
	question: "vit",
	choice1: "violet",
	choice2: "brown",
	choice3: "white",
	choice4: "red",
	answer: 3,
}, {
	question: "kläder",
	choice1: "t-shirt",
	choice2: "trouser",
	choice3: "tie",
	choice4: "clothes",
	answer: 4,
}, {
	question: "svart",
	choice1: "grey",
	choice2: "red",
	choice3: "blue",
	choice4: "black",
	answer: 4,
}, {
	question: "måndag",
	choice1: "holiday",
	choice2: "monday",
	choice3: "birthday",
	choice4: "sunday",
	answer: 2,
}, {
	question: "röd",
	choice1: "red",
	choice2: "green",
	choice3: "grey",
	choice4: "yellow",
	answer: 1,
}, {
	question: "onsdag",
	choice1: "saturday",
	choice2: "friday",
	choice3: "wednesday",
	choice4: "come",
	answer: 3,
}, {
	question: "lördag",
	choice1: "monday",
	choice2: "birthday",
	choice3: "weekend",
	choice4: "saturday",
	answer: 4,
}, {
	question: "hejdå",
	choice1: "drink",
	choice2: "swallow",
	choice3: "enjoy",
	choice4: "bye",
	answer: 4,
}];
​
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 16;
​
// start game function
startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
};
​
// get the next question
getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score);
		return window.location.assign('end.html');
	}
​
	questionCounter++;
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
	progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
​
​
	const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[questionsIndex];
	question.innerText = currentQuestion.question;
​
	choices.forEach(choice => {
		const number = choice.dataset.number;
		choice.innerText = currentQuestion['choice' + number];
	});
​
	availableQuestions.splice(questionsIndex, 1);
	acceptingAnswers = true;
​
};
​
// add click event to each question option
choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if (!acceptingAnswers) return;
​
		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset.number;
​
		let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
		if (classToApply === 'correct') {
			incrementscore(SCORE_POINTS);
		}
		selectedChoice.parentElement.classList.add(classToApply);
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 1000);
	});
});
​
// add points if correct answer
incrementScore = num => {
	score += num;
	scoreText.innerText = score;
};
​
// call the startGame() function
startGame();