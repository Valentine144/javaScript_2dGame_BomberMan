class Door {
	constructor() {
		// Create Door element
		this.model = document.createElement("div");
		this.model.className = "Door";
		// Random empty pos for door
		var ptN = taleNeighbourhood(Player.Tale);
		do {
		// pos that not blocks player
		this.Tale = new Tale("None");
		} while (checkSpawn(this.Tale, ptN));
		Field.Tales[this.Tale.X][this.Tale.Y] = tState["HiddenDoor"];
			this.Tale.X -= -(1.7/7);
			this.Tale.Y -= -(1.7/7);
		// Place this Door in the Field
		placeItem(this);
			this.Tale.X -= (1.7/7);
			this.Tale.Y -= (1.7/7);
		// Insert Door element into HTML
		Field.model.appendChild(this.model);
		// Hide the Door
		new Wall(this.Tale);
	}
}