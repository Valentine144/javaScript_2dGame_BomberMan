class Coin {
	constructor() {
		// Create coin element
		this.model = document.createElement("div");
		this.model.className = "Coin";
		// Random empty pos for coin
		var ptN = taleNeighbourhood(Player.Tale);
		do {
		// pos that not blocks player
		this.Tale = new Tale("None");
		} while (checkSpawn(this.Tale, ptN));
		Field.Tales[this.Tale.X][this.Tale.Y] = tState["HiddenCoin"];
			this.Tale.X -= -(1/7);
			this.Tale.Y -= -(1/7);
		// Place coin element in the Field
		placeItem(this);
			this.Tale.X -= (1/7);
			this.Tale.Y -= (1/7);
		// Insert element into HTML
		Field.model.appendChild(this.model);
		// Hide this coin with the wall
		new Wall(this.Tale);
		// Save this coin in the Coins Array
		Coins.push(this);
	}
}