/* jshint esversion: 8*/

// global variables
const highscoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// insert localStorage scores into leaderboard
highscoresList.innerHTML =
    highScores.map((score, index) => {
        return `<li classs="high-score">${index + 1}. ${score.name} - ${score.score} pts</li>`;

    }).join('');