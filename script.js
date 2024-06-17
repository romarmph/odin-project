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

	return {
		setBoard,
		getBoard,
		setCurrentPlayer,
		getCurrentPlayer,
	}
}()


const displayController = function() {

	/**
		* @param {object} game The game object
		* @returns {array} cells An array of cell nodes for the game board
	 */
	function createBoardCells(game) {
		if (!game) {
			throw new Error('Game is undefined');
		}
		const board = game.getBoard();
		const cells = board.map(() => {
			const div = document.createElement('div');
			div.classList.add('cell');
			document.querySelector('#board').append(div)
			return div;
		})

		return cells;
	}

	function renderBoard(game) {
		if (!game) {
			throw new Error('Game is undefined');
		}

		let cells;
		if (!cells) {
			cells = createBoardCells(game);
		}

		cells.forEach((cell, index) => {
			const gameBoard = game.getBoard();
			cell.classList.add(gameBoard[index] ?? 'empty');
		})
	}

	function renderResult(result) {
		const resultContainer = document.createElement('div');
		resultContainer.classList.add('result');
		resultContainer.innerHTML = '<h2>Game Over</h2>';

		if (result === 'draw') {
			resultContainer.innerHTML = `
		<h2>Game Over</h2>
		<p>Draw!</p>
			`;
		} else if (result === 'x') {
			resultContainer.innerHTML = `
		<p>Winner!</p>
		<img src="assets/x.png" alt="x-player-icon">
			`
		} else if (result === 'o') {
			resultContainer.innerHTML = `
		<p>Winner!</p>
		<img src="assets/o.png" alt="o-player-icon">
			`
		} else {
			throw new Error(`Invalud result '${result}'`);
		}

		const board = document.querySelector('.board__container');
		document.querySelector('.container').insertBefore(resultContainer, board)
	}

	return {
		renderBoard,
		renderResult,
		createBoardCells,
	}
}()

const gameController = function() {
	function startGame(game, displayController) {
		const cells = displayController.createBoardCells(game);

		cells.forEach((cell, index) => {
			cell.addEventListener('click', () => {
				console.log(game.getCurrentPlayer(), index);
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
