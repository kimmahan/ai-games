const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;
let spawnSpeed = 1000; // Start at 1 second

function createAsteroid() {
    const asteroid = document.createElement('div');
    asteroid.classList.add('asteroid');

    // Random position within game area
    const x = Math.random() * (gameArea.offsetWidth - 50);
    const y = Math.random() * (gameArea.offsetHeight - 50);
    asteroid.style.left = `${x}px`;
    asteroid.style.top = `${y}px`;

    // Click to smash
    asteroid.addEventListener('click', () => {
        score += 1;
        scoreDisplay.textContent = score;
	console.log("Smashed!"); 
        asteroid.classList.add('exploded');
    	setTimeout(() => asteroid.remove(), 300); // Remove after animation
    });

    // Remove after 3 seconds if not smashed
    setTimeout(() => {
        if (asteroid.parentElement) asteroid.remove();
    }, 3000);

    gameArea.appendChild(asteroid);
}

// Spawn asteroids every second
setInterval(createAsteroid, 1000);

let timeLeft = 30;
const timerDisplay = document.createElement('p');
timerDisplay.textContent = `Time: ${timeLeft}s`;
document.querySelector('.game-container').appendChild(timerDisplay);

setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(spawnInterval); // Stop spawning asteroids
        alert(`Game Over! Final Score: ${score}`);
    }
}, 1000);

// Start the game
createAsteroid();