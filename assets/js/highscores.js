const highscoresList = document.querySelector('highScoresList')
const highScores= JSON.parse(localStorage.getItem('highScores'))|| []

highscoresList.innerHTML =
highScores.map(score => { 
return `<li classs="high-score">${ score.name}-${ score.score}</li>`

}).join('')