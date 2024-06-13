// Node reference
const result = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.player');
const computerScoreDisplay = document.querySelector('.computer');


let playerScoreCount = 0;
let computerScoreCount = 0;

const computerPlay = () => {
    const HAND = ["rock", "paper", "scissors"];
    return HAND[Math.floor(Math.random() * 3)];
};


const isDraw = function(playerSelection, computerSelection) {
    return playerSelection === computerSelection;
}


const playRound = function(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") 
        return (computerSelection === "scissors" ? true : false);

    if (playerSelection.toLowerCase() === "paper")
        return (computerSelection === "rock" ? true : false);

    if (playerSelection.toLowerCase() === "scissors")
    return (computerSelection === "paper" ? true : false);
}

const resetScore = function() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScoreDisplay.innerText = `${playerScoreCount}`;
    computerScoreDisplay.innerText = `${computerScoreCount}`;
}

const play = function(event) {
	const playerSelection = this.value;
    if (isDraw(playerSelection, computerPlay())) {
        result.innerText = "Round Draw!";
        return;
    }
    
    if (playRound(playerSelection, computerPlay())) {
        playerScoreCount++;
        playerScoreDisplay.innerText = `${playerScoreCount}`;
        result.innerText = "You win!";
    } else {
        computerScoreCount++;
        computerScoreDisplay.innerText = `${computerScoreCount}`;
        result.innerText = "You lose!"
    }

    if (playerScoreCount === 5) {
        result.innerHTML = "Victory";
        resetScore();
        return
    } 
    if (computerScoreCount === 5){
        result.innerText = "Defeat";
        resetScore();
        return;
    }
}

const button = document.querySelectorAll('.btn');
button.forEach(btn => {
	btn.addEventListener('click', play);
    result.innerText = "Pick a hand";
});

