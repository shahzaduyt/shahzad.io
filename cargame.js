let redCar, blueCar;
let redCarPosition = 50; // Start position of the red car (fixed left position)
let blueCarPosition = 50; // Start position of the blue car (fixed left position)
let gameInterval;

document.getElementById("playButton").addEventListener("click", startGame);
document.getElementById("redCircle").addEventListener("click", moveRedCar);
document.getElementById("blueCircle").addEventListener("click", moveBlueCar);
document.addEventListener("keydown", handleKeyPress);

function startGame() {
    document.getElementById("playButton").classList.add("hidden");
    document.getElementById("countdown").classList.remove("hidden");
    document.getElementById("gameArea").classList.remove("hidden");
    document.getElementById("winnerAnnouncement").classList.add("hidden");
    
    redCar = document.getElementById("redCar");
    blueCar = document.getElementById("blueCar");

    resetPositions(); // Reset the positions to the starting line
    startCountdown();
}

function startCountdown() {
    let countdown = 3;
    document.getElementById("countdown").innerText = countdown;
    if (countdown > 0) {
        countdown--;
        setTimeout(startCountdown, 1000);
    } else {
        document.getElementById("countdown").classList.add("hidden");
        startRace();
    }
}

function startRace() {
    gameInterval = setInterval(moveCars, 100);
}

function moveCars() {
    if (redCarPosition >= 750 || blueCarPosition >= 750) {
        announceWinner();
    }
}

function moveRedCar() {
    if (redCarPosition < 750) {
        redCarPosition += 10; // Move red car forward
        redCar.style.transform = `translateX(${redCarPosition}px)`;
    }
}

function moveBlueCar() {
    if (blueCarPosition < 750) {
        blueCarPosition += 10; // Move blue car forward
        blueCar.style.transform = `translateX(${blueCarPosition}px)`;
    }
}

function handleKeyPress(event) {
    if (event.key === 'a') {
        moveRedCar(); // Move red car on 'A' key press
    } else if (event.key === 'h') {
        moveBlueCar(); // Move blue car on 'H' key press
    }
}

function announceWinner() {
    clearInterval(gameInterval);
    let winner = redCarPosition >= 750 ? "Red Car Wins!" : "Blue Car Wins!";
    document.getElementById("winnerAnnouncement").innerText = winner;
    document.getElementById("winnerAnnouncement").classList.remove("hidden");
    
    setTimeout(resetGame, 3000); // Reset game after 3 seconds
}

function resetPositions() {
    redCarPosition = 0; // Reset red car to starting position (fixed)
    blueCarPosition = 0; // Reset blue car to starting position (fixed)
    redCar.style.transform = `translateY(0px)`; // Position red car at 150px height
    blueCar.style.transform = `translateY(0px)`; // Position blue car at 100px height
}

function resetGame() {
    resetPositions(); // Reset car positions
    document.getElementById("playButton").classList.remove("hidden");
}