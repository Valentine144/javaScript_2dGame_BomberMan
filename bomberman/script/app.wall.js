class Wall {
	constructor(HidingTale) {
		// Create wall element
		this.model = document.createElement("div");
		this.model.className = "Wall";
		// if has something to hide
		if (HidingTale != undefined) {
			// get pos
			this.Tale = HidingTale;
		} else {
			var ptN = taleNeighbourhood(Player.Tale);
			do {
			// else get random empty pos that not blocks player
			this.Tale = new Tale("None");
			} while (checkSpawn(this.Tale, ptN));
			Field.Tales[this.Tale.X][this.Tale.Y] = tState["Wall"];
		}
		// Place wall element on the Field
		placeItem(this);
		// Insert wall element into Field
		Field.model.appendChild(this.model);
		// Save this wall in the Walls Array
		Walls.push(this);
	}
}
