const game = function() {
	let board = [...Array(9)]
	let currentPlayer = 'x'; // initial player

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

const gameController = function() {
	function resetGameBoard() {
		return [...Array(9)];
	}

	return {
		resetGameBoard,
	}
}()

const displayController = function() {
	function renderBoard(game) {
		if (!game) {
			throw new Error('Game is undefined');
		}

		const currentGameBoard = game.getBoard();
		console.log(`
				Current Game
				[${currentGameBoard[0]},${currentGameBoard[1]},${currentGameBoard[2]}],
				[${currentGameBoard[3]},${currentGameBoard[4]},${currentGameBoard[5]}],
				[${currentGameBoard[6]},${currentGameBoard[7]},${currentGameBoard[8]}],
			`)
	}

	function renderResult(game) {

	}

	return {
		renderBoard,
	}
}()
