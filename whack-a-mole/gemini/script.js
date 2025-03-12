const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-button');
const highScoresList = document.getElementById('high-scores-list');

let score = 0;
let time = 30;
let gameActive = false;
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

let lastHole;

function peep() {
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    const mole = document.createElement('div');
    mole.classList.add('mole');
    hole.appendChild(mole);
    mole.classList.add('up');
    setTimeout(() => {
        mole.classList.remove('up');
        setTimeout(() => {
            if (hole.contains(mole)) {
                hole.removeChild(mole);
            }
            if (gameActive) peep();
        }, 300);
    }, time);
}

function whack(e) {
    if (!e.target.classList.contains('mole')) return;
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    e.target.classList.add('whacked');
    playSound('assets/whack.wav');
    setTimeout(() => {
        e.target.parentNode.removeChild(e.target);
    }, 200);
}

function playSound(src) {
    const sound = new Audio(src);
    sound.play();
}

function startGame() {
    score = 0;
    time = 30;
    gameActive = true;
    scoreDisplay.textContent = 'Score: 0';
    timeDisplay.textContent = 'Time: 30s';
    peep();
    const timer = setInterval(() => {
        time--;
        timeDisplay.textContent = `Time: ${time}s`;
        if (time === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameActive = false;
    alert(`Game Over! Your score is ${score}`);
    updateHighScores();
    displayHighScores();
}

function updateHighScores() {
    const name = prompt('Enter your name:');
    if (name) {
        highScores.push({ name, score });
        highScores.sort((a, b) => b.score - a.score);
        highScores = highScores.slice(0, 5); // Keep only top 5 scores
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}

function displayHighScores() {
    highScoresList.innerHTML = '';
    highScores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.name}: ${score.score}`;
        highScoresList.appendChild(li);
    });
}

holes.forEach(hole => hole.addEventListener('click', whack));
startButton.addEventListener('click', startGame);
displayHighScores();