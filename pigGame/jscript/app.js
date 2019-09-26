/*
Games RULES:

-The game has 2 players, playing in round,
-In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score,
-BUT, if the player rolls a 1, all his ROUND score gets lost. After thet, it's the next player's turn that, it's the next player's turn,
-The first player to reach 100 points on GLOBAL wins the game
*/

let scores,
 roundScore,
 gamePlaying,
 activePlayer;

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
	
	if(gamePlaying) {
		//1 \. Random nummber 
		let dice = Math.floor(Math.random() * 6)+1;
	
		//2.Display the result
		let diceDOM = document.querySelector('.dice');
		diceDOM.style.display ='block';
		diceDOM.src = 'img/dice-'+dice+'.png';

		//3. Update the round score IF the rolled numbr was NOT a 1

		if (dice !== 1) {
			//Add score 
			roundScore += dice;
			document.querySelector('#current-'+ activePlayer).textContent = roundScore;
		}else {
			//next player
			nextPlayer();		
		}	
	}  
});


document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
		
		//Add CURRENT score to GLOBAL score
		scores [activePlayer] += roundScore;


		// Update the UI
		document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

		// Check if player won the game
		if (scores[activePlayer] >=100){
			document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			//Next player
			nextPlayer();	
		}
	}
});


//next player function 
function nextPlayer() {
	//next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		
		
		document.querySelector('.player-0-panel').classList.toggle('active');
		
		document.querySelector('.player-1-panel').classList.toggle('active');
		
		document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	
	
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
}





