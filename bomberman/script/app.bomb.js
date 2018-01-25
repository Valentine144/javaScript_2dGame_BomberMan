Player.Bomb = {
	set: function(){
		var C4 = new Bomb();
		this.startTimer(C4);
	},

	startTimer: function(bomb) {
		var Ticks = 2;
		var Timer = setInterval( function() {
			if (Ticks) {
				// Timer on the bomb
				bomb.model.innerHTML = Ticks;
				Ticks--;
			}
			else {
				// Remove walls
				bomb.explode();

				// Create Explode object
				Player.Bomb.createEffect(bomb); 

				// Update BombSet flag
				Player.isBombSet = false;
				// Stop bomb timer
				clearInterval(Timer);
			}
		}, 1000);
	},

	createEffect: function(C4) {
		var Effect = {
			X: new Object,
			Y: new Object,
		};
		Effect.X.model = document.createElement("div"); 
		Effect.Y.model = document.createElement("div");
		Effect.X.model.className = "boomX";
		Effect.Y.model.className = "boomY";
		Effect.X.Tale = new Object;
		Effect.Y.Tale = new Object;
		Effect.X.Tale.X = C4.Tale.X-(1.18);
		Effect.X.Tale.Y = C4.Tale.Y-(-0.08);
		Effect.Y.Tale.X = C4.Tale.X-(-0.08);
		Effect.Y.Tale.Y = C4.Tale.Y-(1.18);
		// Place Explode Effects
		placeItem(Effect.X);
		placeItem(Effect.Y);
		// Insert into HTML
		Field.model.appendChild(Effect.X.model);
		Field.model.appendChild(Effect.Y.model);

		// Paint bomb
		C4.model.style.backgroundColor = "yellow";
		C4.model.style.border = "3px solid red";

		// Remove explode fire after 300 millis
		setTimeout(function() {
			// Delete bomb element
			Field.model.removeChild(C4.model);
			Field.model.removeChild(Effect.X.model);
			Field.model.removeChild(Effect.Y.model);
		}, 300)		
	},
};

class Bomb {
	constructor() {
		if (!Player.isBombSet) {
			// update BombSet flag
			Player.isBombSet = true;
			// Create Bomb element 
			this.model = document.createElement("div");
			this.model.className = "Bomb";
			this.model.innerHTML = "3";
			// Get explode wave epicenter and Bomb.Tale
			this.Tale = thisTale(Player.Tale.X-(-0.25), Player.Tale.Y-(-0.25));
			this.Danger = taleNeighbourhood(Player.Tale)
			// Place this Bomb in the Field
			placeItem(this);
			// this.Tale = copyTale(Player.Tale);
			// Insert this Bomb into HTML 
			Field.model.appendChild(this.model);
		}
	};

	explode() {
		// Check, if broke something 
		for (var tale in this.Danger)
		{
			if (Field.Tales[this.Danger[tale].X][this.Danger[tale].Y] > tState["None"])
			//Update tState
			switch (Field.Tales[this.Danger[tale].X][this.Danger[tale].Y]) {
				// if catched player then he dies	
				case tState["Player"]:
					gameover();
					break;
				case tState["HiddenCoin"]:
					deleteWall(this.Danger[tale]);
					Field.Tales[this.Danger[tale].X][this.Danger[tale].Y] = tState["Coin"];
					break;
				case tState["HiddenDoor"]:
					deleteWall(this.Danger[tale]);
					Field.Tales[this.Danger[tale].X][this.Danger[tale].Y] = tState["Door"];
					break;
				// else just brokes wall
				case tState["Wall"]:
					deleteWall(this.Danger[tale]);
					Field.Tales[this.Danger[tale].X][this.Danger[tale].Y] = tState["None"];
					break;
      }	
		}
	};

}

var deleteWall = function(WallTale) {
	for (var w in Walls)
	{
		if (taleCompare(Walls[w].Tale, WallTale))
		{
			// delete wall from HTML and Array
			Field.model.removeChild(Walls[w].model);
			Walls.splice(w, 1);
			// Update counter
			document.getElementById("Walls").innerHTML = "Walls: " + (++Player.State.Walls);
		}
	}
}
					