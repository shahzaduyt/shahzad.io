// Canvas Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Bird settings
const bird = {
    x: 50,
    y: 150,
    width: 30,
    height: 30,
    gravity: 1.0,
    lift: -10,
    velocity: 0
};

// Bird image (replace with your desired bird image URL)
const birdImg = new Image();
birdImg.src = 'data:image/png;base64,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'; // Replace this with the actual URL of the bird image

// Pipes array
let pipes = [];
const pipeWidth = 50;
const gap = 150;
let frame = 0;

// Game control
let gameRunning = false;

// Start the game
function startGame() {
    bird.y = 150;
    bird.velocity = 0;
    pipes = [];
    frame = 0;
    gameRunning = true;
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('startScreen').style.display = 'none'; // Hide the start screen
    document.getElementById('gameCanvas').style.display = 'block'; // Show the canvas
    loop();
}

// Draw bird
function drawBird() {
    ctx.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
}

// Draw pipes
function drawPipes() {
    pipes.forEach(pipe => {
        ctx.fillStyle = '#388E3C'; // Pipe color
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, pipe.top + gap, pipeWidth, canvas.height - pipe.top - gap);
    });
}

// Create pipes
function createPipes() {
    if (frame % 90 === 0) {
        const topHeight = Math.floor(Math.random() * (canvas.height - gap));
        pipes.push({ x: canvas.width, top: topHeight });
    }

    pipes.forEach(pipe => {
        pipe.x -= 2;
    });

    // Remove offscreen pipes
    pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);
}

// Check for collisions
function checkCollision() {
    if (bird.y + bird.height >= canvas.height || bird.y <= 0) {
        gameOver();
    }

    pipes.forEach(pipe => {
        if (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipeWidth) {
            if (bird.y < pipe.top || bird.y + bird.height > pipe.top + gap) {
                gameOver();
            }
        }
    });
}

// Game over logic
function gameOver() {
    gameRunning = false;
    document.getElementById('gameOver').style.display = 'block';
}

// Main game loop
function loop() {
    if (!gameRunning) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBird();
    createPipes();
    drawPipes();

    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    checkCollision();

    frame++;
    requestAnimationFrame(loop);
}

// Fly the bird
function flyBird() {
    bird.velocity = bird.lift;
}

// Event listeners for controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') flyBird();
});

canvas.addEventListener('click', flyBird);

// Retry game logic
document.getElementById('retryButton').addEventListener('click', startGame);

// Play button logic
document.getElementById('playButton').addEventListener('click', startGame);