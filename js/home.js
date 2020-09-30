var allButtons = document.getElementsByTagName('button') ;
var x = document.getElementById('audio') ;

var you = document.getElementById('you') ;
var cpu = document.getElementById('cpu') ;	

var score_1 = document.getElementById('score_1') ;
var score_2 = document.getElementById('score_2') ;	

var myScore = [] ;
var cpuScore = [] ;

var player_1 = prompt("Player 1 : Enter Your Name ") ;
var player_2 = prompt("Player 2 : Enter Your Name ") ;

if(player_1 === ''){
	window.location.reload() ;
}

if(player_2 === ''){
	window.location.reload() ;
}

allButtons[0].innerHTML = player_1 ;
allButtons[1].innerHTML = player_2 ;

var playerDB = {
	"you" : score_1,
	"cpu" : score_2
} ;

var scoreDB = {
	"A" : 1,
	"K" : 13,
	"Q" : 12,
	"J" : 11,
	"2" : 2,
	"3" : 3,
	"4" : 4,
	"5" : 5,
	"6" : 6,
	"7" : 7,
	"8" : 8,
	"9" : 9,
	"10" : 10
} ;

var cards = {
	"1" : "A",
	"2" : 2,
	"3" : 3,
	"4" : 4,
	"5" : 5,
	"6" : 6,
	"7" : 7,
	"8" : 8,
	"9" : 9,
	"10" : 10,
	"11" : "J",
	"12" : "Q",
	"13" : "K"
}

function getCards(click){
	if(click.innerHTML === player_1){
		getImage(you) ;
	}
	else if(click.innerHTML === player_2){
		getImage(cpu) ;
	}
}

function getNum(){
	return cards[1 + Math.floor(Math.random()*13)] ;
}

function getImage(activePlayer){
	x.play() ;
	var img = document.createElement('img') ;
	var num = getNum() ;
	img.src = 'images/'+num+".png" ;
	img.width = 110 ;
	img.height = 150 ;
	activePlayer.appendChild(img) ;
	getScore(activePlayer,num) ;
}

function getScore(activePlayer,num){
	if(activePlayer.id === "you"){
		myScore.push(scoreDB[num]) ;
	}
	
	else if(activePlayer.id === "cpu"){
		cpuScore.push(scoreDB[num]) ;
	}
	
	calcScore(myScore,cpuScore);
}


function calcScore(myScore,cpuScore){
	let mySum = 0 ;
	let cpuSum = 0 ;

	for(let i=0 ; i<myScore.length ; i++){
		mySum = mySum + myScore[i] ;
	}
	for(let j=0 ; j<cpuScore.length ; j++){
		cpuSum = cpuSum + cpuScore[j] ;
	}
	
	score_1.innerHTML = mySum ;
	score_2.innerHTML = cpuSum ;

	getWinner(mySum,cpuSum);
}

function getWinner(mySum,cpuSum){
	if(mySum>=60 || cpuSum>=60){
		score_1.innerHTML = mySum ;
		score_2.innerHTML = cpuSum ;
		alert('Score exceeded 60') ;
		resetAll() ;
	}
	else if(mySum>cpuSum){
		if(mySum>55 && mySum<60){
			score_1.innerHTML = 'You Won..' ;
		}
	}
	else if(cpuSum>55 && cpuSum<60){
		score_2.innerHTML = 'You Won..' ;
	}
}

function resetAll(){
	alert('Game about to reset') ;
	window.location.reload() ;
}

