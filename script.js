const game = function() {
	let board = [...Array(9)]
	let currentPlayer = 'x';

	function setBoard(newBoardState) {
		if (!Array.isArray(newBoardState)) {
			throw new Error("Board state must be an array");
		}

		if (newBoardState.length !== 9) {
			throw new Error('Board state must have 9 elements');
		}

		if (!newBoardState.every(cell => ['x', 'o', undefined].includes(cell))) {
			throw new Error("Board state elements can only be: 'x', 'o', or undefined");
		}

		board = newBoardState;
	}

	function getBoard() {
		return board;
	}

	function setCurrentPlayer(player) {
		if (!['x', 'o'].includes(player)) {
			throw new Error('Invalid player character');
		}

		if (player === currentPlayer) {
			throw new Error("New player cannot be the same as the current player");
		}

		currentPlayer = player;
	}

	function getCurrentPlayer() {
		return currentPlayer;
	}

	function resetGame() {
		board = [...Array(9)];
		currentPlayer = 'x';
	}

	return {
		setBoard,
		getBoard,
		setCurrentPlayer,
		getCurrentPlayer,
		resetGame,
	}
}()


const displayController = function() {
	const cells = game.getBoard().map(() => {
		const div = document.createElement('div');
		div.classList.add('cell');
		document.querySelector('#board').append(div)
		return div;
	})

	function getBoardCells() {
		return cells;
	}

	function renderBoard(game) {
		if (!game) {
			throw new Error('Game is undefined');
		}

		const cells = getBoardCells();

		cells.forEach((cell, index) => {
			const gameBoard = game.getBoard();
			if (gameBoard[index]) {
				cell.classList.add(gameBoard[index]);
			} else {
				cell.classList.remove('x');
				cell.classList.remove('o');
			}
		})
	}

	function renderCurrentTurn(game) {
		const newTurn = `<p>It's <img src="assets/${game.getCurrentPlayer()}.png" alt=""> turn!</p>`;

		let container = document.querySelector('.result');
		container.innerHTML = newTurn;
	}
	return {
		getBoardCells,
		renderBoard,
		renderCurrentTurn,
	}
}()

const gameController = function() {
	function handleClick(player, index, game, displayController) {
		if (!player || !['x', 'o'].includes(player)) {
			throw new Error('Invalid player');
		}

		if (!index === undefined || (index < 0 || index > 8)) {
			throw new Error(`Invalid board index ${index}`);
		}

		if (!game) {
			throw new Error('Game is undefined');
		}

		let board = game.getBoard();

		if (board[index]) {
			return;
		}
		board.splice(index, 1, player);
		game.setBoard(board);
		game.setCurrentPlayer(function() {
			if (player === 'x') {
				return 'o';
			}
			return 'x'
		}());

		displayController.renderBoard(game);
		displayController.renderCurrentTurn(game);
	}

	function startGame(game, displayController) {
		const cells = displayController.getBoardCells();
		displayController.renderCurrentTurn(game);

		cells.forEach((cell, index) => {
			cell.addEventListener('click', () => {
				handleClick(game.getCurrentPlayer(), index, game, displayController);
			})
		})
	}

	return {
		startGame,
	}
}()

window.addEventListener('load', () => {
	gameController.startGame(game, displayController);


})

const button = document.getElementById('new_game_btn');
button.addEventListener('click', () => {
	game.resetGame();
	displayController.renderBoard(game);
	displayController.renderCurrentTurn(game);
})
