(function() {
	const game = function() {
		let board = [...Array(9)]
		let currentPlayer = 'x';
		let gameOver = false;

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

		function setGameOver(value) {
			gameOver = value;
		}

		function getGameOver() {
			return gameOver;
		}

		function resetGame() {
			board = [...Array(9)];
			currentPlayer = 'x';
			gameOver = false;
		}

		return {
			setBoard,
			getBoard,
			setCurrentPlayer,
			getCurrentPlayer,
			setGameOver,
			getGameOver,
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


		function renderCurrentTurn(game) {
			const newTurn = `<p>It's <img src="assets/${game.getCurrentPlayer()}.png" alt=""> turn!</p>`;

			let container = document.querySelector('.result');
			container.innerHTML = newTurn;
		}

		function renderResult(result) {
			const resultContainer = document.querySelector('.result');
			resultContainer.innerHTML = '<h2>Game Over</h2>';

			if (result === 'draw') {
				resultContainer.innerHTML += `
		<p>Draw!</p>
			`;
			} else if (result === 'x') {
				resultContainer.innerHTML += `
		<p>Winner!</p>
		<img src="assets/x.png" alt="x-player-icon">
			`
			} else if (result === 'o') {
				resultContainer.innerHTML += `
		<p>Winner!</p>
		<img src="assets/o.png" alt="o-player-icon">
			`
			} else {
				throw new Error(`Invalud result '${result}'`);
			}
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
		return {
			getBoardCells,
			renderBoard,
			renderCurrentTurn,
			renderResult,
		}
	}()

	const gameController = function() {
		function checkGameWinner(game) {
			const board = game.getBoard();

			if (board.filter(v => v !== undefined).length < 5) {
				console.log('Skipping game winner check')
				return;
			}

			const winningPatterns = [
				// Rows
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				// Columns
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				// Diagonals
				[0, 4, 8],
				[2, 4, 6]
			];

			let winner;
			winningPatterns.forEach(pattern => {
				if (pattern.every(index => board[index] === game.getCurrentPlayer())) {
					winner = game.getCurrentPlayer();
				}
			});

			if (winner) {
				return winner;
			}

			if (board.every(cell => cell !== undefined)) {
				return 'draw';
			}

			return undefined;
		}

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
			let result = checkGameWinner(game);
			if (result) {
				if (game.getGameOver()) {
					return;
				}
				displayController.renderBoard(game);
				displayController.renderResult(result);
				game.setGameOver(true);
				return;
			}
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

	const button = document.getElementById('new_game_btn');
	button.addEventListener('click', () => {
		game.resetGame();
		displayController.renderBoard(game);
		displayController.renderCurrentTurn(game);
	})

	gameController.startGame(game, displayController);
})()
