"use strict";
var $ = function( id ) { return document.getElementById( id ); }

var enemyHP = 30;
var yourHP = 30;
var magicUse = 0;

function IAttack() {
	var attackRoll = Math.floor((Math.random() * 20) + 1);
	//attackRoll = 1; //THIS IS MY ONLY WAY TO LOSE, IM TOO GOOD
	//attackRoll = 20; //THIS IS MY ONLY WAY TO WIN
	alert("You rolled a " + attackRoll);


	if (attackRoll == 1) {
		selfAttack();

		if (enemyHP <= 0) {
			victory();
		} else {
			enemyAttack();
		}

		if (yourHP <= 0) {
			defeat();
		} else {

		}

	} else if (attackRoll > 1 && attackRoll <= 9) {
		alert("Holy smokes, you missed!");
		damage = 0;

		if (enemyHP <= 0) {
			victory();
		} else {
			enemyAttack();
		}
	
	} else if (attackRoll > 9 && attackRoll <= 19) {
		attack();

		if (enemyHP <= 0) {
			victory();
		} else {
			enemyAttack();
		}

	} else if (attackRoll == 20) {
		critAttack();

		if (enemyHP <= 0) {
			victory();
		} else {
			enemyAttack();
		}
	}
}



function deadSpAttack() {
	alert("Why would you do that to a dead body");
} 

function outOfCharges() {
	alert("You have already used Magic Missile.");
}

function deadAttack() {
	alert("Why would you attack a dead body?");
}

var checkAttack = function() {
	if (yourHP > 0 && enemyHP > 0) {
		IAttack();
	}
	else if (enemyHP <= 0) {
		deadAttack();
	} 
	else if (yourHP <= 0) {
		yourDeadAttack();
	}

}

function specialAttack() {
	alert("You cast magic missile");
	missileDamage = Math.floor((Math.random() * 18) + 3);
	alert("You shoot three magical missiles dealing " + missileDamage + " damage.");
	enemyHP = enemyHP - missileDamage;
	magicUse = 1;
	$('enemyHP').value = enemyHP;

		if (enemyHP <= 0) {
			victory();
		} else {
			enemyAttack();
		}

}

var checkSpecialAttack = function(){
	if (yourHP <= 0){
		yourDeadSpAttack();
	}
	if (enemyHP <= 0){
		deadSpAttack();
	}
	if (magicUse == 1){
		outOfCharges();
	}
	if (yourHP > 0 && enemyHP > 0 && magicUse != 1){
		specialAttack();
	}
}

function yourDeadAttack() {
	alert("How do you plan on attacking when you are dead?");
}

function yourDeadSpAttack() {
	alert("How do you plan on using Magic Missile while you're dead");
}

function selfAttack() {
	var damage = Math.floor((Math.random() * 15) + 1);
	var damage = damage / 2;
	alert("You managed to hit yourself for " + damage + " damage.");
	yourHP = yourHP - damage;
	$('yourHP').value = yourHP;
}

function critAttack()  {
	var damage = Math.floor((Math.random() * 15) + 1);
	var damage = damage * 2;
	alert("You deal " + damage + " with your crit!");
	enemyHP = enemyHP - damage;
	$('enemyHP').value = enemyHP
}

function attack() {
	var damage = Math.floor((Math.random() * 15) + 1);
	alert("Dang you hit them for " + damage + " damage");
	enemyHP = enemyHP - damage;
	$('enemyHP').value = enemyHP
}


function enemyAttack() {
var enemyAttackRoll = Math.floor((Math.random() * 20) + 1);
//enemyAttackRoll = 20; //This is my test to lose, if you to lose, just comment this in and comment the one above out.
alert("your enemy rolled a " + enemyAttackRoll);
	
if (enemyAttackRoll == 1) {
	var damage = Math.floor((Math.random() * 15) + 1);
	var damage = damage / 2;
	alert("Your enemy managed to hit himself for " + damage + " damage.");
	enemyHP = enemyHP - damage;
	$('enemyHP').value = enemyHP;
	} 
	else if (enemyAttackRoll > 1 && enemyAttackRoll <= 9) {
		alert("Looks like they missed");
	}
	else if (enemyAttackRoll > 9 && enemyAttackRoll <= 19) {
		var damage = Math.floor((Math.random() * 15) + 1);
		alert("Dang you got hit for " + damage + " damage");
		yourHP = yourHP - damage;
		$('yourHP').value = yourHP
	}
	else if (enemyAttackRoll == 20) {
		var damage = Math.floor((Math.random() * 15) + 1);
		var damage = damage * 2;
		alert("You take " + damage + " from their crit!");
		yourHP = yourHP - damage;
		$('yourHP').value = yourHP
	}
if (yourHP <= 0){
	defeat();
}
/*	if (yourHP <= 0) {
		alert("Youre actually dead");
	}*/
}

function enemyAttackBlock() {
var enemyAttackRoll = Math.floor((Math.random() * 20) + 1);
alert("Your enemy rolled a " + enemyAttackRoll);

if (enemyAttackRoll == 1) {
	var damage = Math.floor((Math.random() * 15) + 1);
	var damage = damage / 2;
	alert("Your enemy managed to hit himself for " + damage + " damage.");
	enemyHP = enemyHP - damage;
	$('enemyHP').value = enemyHP;
	} 

	if (enemyAttackRoll > 1 && enemyAttackRoll <= 9) {
		alert("Looks like they missed");
	}
	if (enemyAttackRoll > 9 && enemyAttackRoll <= 19) {
		var damage = Math.floor((Math.random() * 15) + 1);
		var damage = damage / 2;
		alert("after blocking their hit, you take " + damage + " damage");
		yourHP = yourHP - damage;
		$('yourHP').value = yourHP
	}
	if (enemyAttackRoll == 20) {
		var damage = Math.floor((Math.random() * 15) + 1);
		alert("You manage to block their massive hit and take " + damage + " damage.");
		yourHP = yourHP - damage;
		$('yourHP').value = yourHP
}	
}

var block = function() {
	if (yourHP <= 0){
		alert("How do you plan on blocking, WHEN YOUR FREAKING DEAD");
	}
	if (enemyHP <= 0) {
		alert("Ha, I bet you forgot I forgot to code this one! but, you cant block for what they have to do");
	}
	if (yourHP > 0 && enemyHP > 0) {
		alert("You prepare for their attak!");
		enemyAttackBlock();
	}
}


function defeat() {
	alert("You lost this fight, be sure to try again.")
	//document.write("Sorry about you losing the game, Its really easy I swear, if you cant beat it, maybe you could set your roll to always be 20. Like I can ;)." + "<br>" + "<br>");
	//document.write("Please refresh the page if you want to play again!");
}

var reload = function() {
	if (yourHP <= 0){
		//magicUse = 0;
		location.reload();
		times();
	}
	if (enemyHP <= 0){
		//magicUse = 0;
		location.reload();
		times();
	}

	if (yourHP >= 1 && enemyHP >= 1){
		alert("Dont start over, see it through to the end \n\nOne of you should be dead before pressing this button");
	}
//oh my god this took way too long to make, Pls give me an A+
}

function victory() {
	alert("Dang son you actually won");
	//document.write("Thank you for playing my game, I wanted to make it really dope, but Ill probably continue this game to make it great, but I have other stuff to do." + "<br>" + "<br>");
	//document.write("Please refresh the page if you want to play again!");
}

function times() {
	if (localStorage.hits) {
		localStorage.hits = parseInt(localStorage.hits) + 1; 
	} else { localStorage.hits = 1; }

	alert ("You have played: " + localStorage.hits + " Time(s)");
	$('plays').value = localStorage.hits;
}


window.onload = function() {
//This is the attack button, dont forget pls.
	var attackButton = document.createElement("button");
	attackButton.setAttribute("id", "offence");
	attackButton.innerHTML = '<img src="images/attack.png"/>';
	$('button').appendChild(attackButton);
	$('offence').onclick = checkAttack;

//This used to be the run away button, but it was useless
	var specialAttackButton = document.createElement("button");
	specialAttackButton.setAttribute("id", "spAttack");
	specialAttackButton.innerHTML = '<img src="images/Magic.png"/>';
	$('button2').appendChild(specialAttackButton);
	$('spAttack').onclick = checkSpecialAttack;

//This is going to be the block button, its gonna be really lame, Please dont block or run away, just stand and fight
	var blockButton = document.createElement("button");
	blockButton.setAttribute("id", "blick");
	blockButton.innerHTML = '<img src="images/block.png"/>';
	$('button3').appendChild(blockButton);
	$('blick').onclick = block;

	var retryButton = document.createElement("button");
	retryButton.setAttribute("id", "retry");
	retryButton.innerHTML = '<img src="images/retry.png"/>';
	$('button4').appendChild(retryButton);
	$('retry').onclick = reload;

	$('plays').value = localStorage.hits;

}
