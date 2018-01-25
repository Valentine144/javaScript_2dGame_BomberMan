// MOVE FUNCTION
Player.Move = function(Direction) {
	var nT = nTale(Player.Tale, Direction);
		
	if ((nT.X >= 0 && nT.X < Field.w) 
	&& (nT.Y >= 0 && nT.Y < Field.h))
	{
		var nState = Field.Tales[nT.X][nT.Y];
		if (nState > 0) {
			return;
		} else {
			switch (nState) {
				case tState["Door"]: 
					victory();
					break;
				case tState["Coin"]:
					Player.getCoin(nT);
					break;
				case tState["Bomb"]: 
				case tState["None"]:
					Player.step(nT);
					break;
			}
		} 
	}	
			
}

// PLACES PLAYER IN THE NEXT TALE
Player.step = function(newTale) {
	Field.Tales[Player.Tale.X][Player.Tale.Y] = tState["None"];

	Player.Tale.X = newTale.X;
	Player.Tale.Y = newTale.Y;

	Field.Tales[Player.Tale.X][Player.Tale.Y] = tState["Player"];

	placeItem(Player);
}

// GETS COIN (YOUR CPT.)
Player.getCoin = function(takenCoinTale) {	
	for (c in Coins)
		if (taleCompare(Coins[c].Tale, takenCoinTale))
			{
				Field.model.removeChild(Coins[c].model);
				Coins.splice(c, 1);

				Player.step(takenCoinTale);

				document.getElementById("Coins").innerHTML = "Coins: " + (++Player.State.Coins);
			}
}
