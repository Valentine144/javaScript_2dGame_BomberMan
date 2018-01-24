var isGameDone = false;

var init = function() {

	// Setup playing field
	Field.model = document.getElementById("Field");
	Field.model.style.width = Field.w*Field.side+"px";
	Field.model.style.height = Field.h*Field.side+"px";

	// Init field with none
	Field.Tales = new Array;

	for(var i = 0; i < Field.w; i++) {
		var EmptyArray = new Array;
		for (var j = 0; j < Field.h; j++)
			EmptyArray.push(tState["None"]);
		Field.Tales.push(EmptyArray);
	}
		
	// Init Player
	Player.Tale = new Tale("Player");
	Player.model = document.createElement("div");
	Player.model.className = "Player";
	Field.model.appendChild(Player.model);
	placeItem(Player);

	var WallsLength = 10 + (Math.random()*(Field.w*Field.h/5).toFixed()).toFixed();
	// Init Walls
	for (var i = 0; 
		i < WallsLength; 
		i++)
	{
		new Wall();
	}
	
	// Init Coins
	for (var i = 0; 
		i < 2 + (Math.random()*(Walls.length/3)).toFixed(); 
		i++)
	{
		new Coin()
	}

	// Init Door
	new Door();
}

window.onload = function main() {
	Field.w = prompt("Input width in blocks:", "");
	Field.h = prompt("Input height in blocks:", "");
	init();	
	window.onkeydown = keyHandler;
} 

//VICTORY//
var victory = function() {
	Field.model.removeChild(Player.model);
	Field.model.backgroundColor = "green";
	Field.model.innerHTML = "YOU WON!";
	Field.model.style.color = "green";
	Field.model.style.lineHeight = Field.model.style.height;

	isGameDone = true;
}

//GAMEOVER//
var gameover = function() {
	Field.model.removeChild(Player.model);
	Field.model.backgroundColor = "red";
	Field.model.innerHTML = "YOU LOST!";
	Field.model.style.color = "red";
	Field.model.style.lineHeight = Field.model.style.height;

	isGameDone = true;
}