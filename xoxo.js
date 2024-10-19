const playButton = document.getElementById('playButton');
const homeScreen = document.getElementById('home');
const gameScreen = document.getElementById('game');
const board = document.getElementById('board');
const winnerDisplay = document.getElementById('winner');
const motivationDisplay = document.getElementById('motivation');

let currentPlayer = 'X'; // Start with Player X
let boardState = ['', '', '', '', '', '', '', '', ''];

function initializeGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X'; // Reset to Player X
    winnerDisplay.style.display = 'none';
    winnerDisplay.innerText = '';
    motivationDisplay.style.display = 'none';
    motivationDisplay.innerText = '';
    board.innerHTML = ''; // Clear the board

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

function handleCellClick(event) {
    const index = event.target.dataset.index;

    if (boardState[index] !== '' || winnerDisplay.innerText !== '') return; // Ignore if cell is occupied or game is over

    boardState[index] = currentPlayer;
    event.target.innerText = currentPlayer;

    if (checkWinner()) {
        winnerDisplay.innerText = `${currentPlayer} Wins!`;
        winnerDisplay.style.display = 'block';
        motivationDisplay.style.display = 'block';
        motivationDisplay.innerText = "Great job! Keep playing and improving!";
        setTimeout(resetGame, 3000); // Reset after 3 seconds
    } else if (boardState.every(cell => cell !== '')) {
        winnerDisplay.innerText = 'It\'s a Tie!';
        winnerDisplay.style.display = 'block';
        motivationDisplay.style.display = 'block';
        motivationDisplay.innerText = "Nice try! Every game is a chance to learn!";
        setTimeout(resetGame, 3000); // Reset after 3 seconds
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] === currentPlayer && boardState[b] === currentPlayer && boardState[c] === currentPlayer;
    });
}

function startGame() {
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    initializeGame(); // Initialize the game board
}

function resetGame() {
    homeScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    winnerDisplay.style.display = 'none';
    motivationDisplay.style.display = 'none';
}

playButton.addEventListener('click', startGame);