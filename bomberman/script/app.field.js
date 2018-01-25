
// TALE CLASS
class Tale {
	constructor(newState) {
		do {
			this.X = (Math.random()*(Field.w-1)).toFixed();
			this.Y = (Math.random()*(Field.h-1)).toFixed();
		} while (Field.Tales[this.X][this.Y] != 0);
		Field.Tales[this.X][this.Y] = tState[newState];
	};
};

// PLACES ELEMENT INTO HIS POSITION
var placeItem = function(Item) {
	Item.model.style.left = (12 + Item.Tale.X * Field.side) + "px";
	Item.model.style.top = (12 + Item.Tale.Y * Field.side) + "px";
}

// RETURNS TALE WITH tX, tY COORDINATES
var thisTale = function (tX, tY) {
	var Tale = new Object;
		Tale.X = tX;
		Tale.Y = tY;
	return Tale;
};

var copyTale = function (Tale) {
	var copy = new Object;
	return copy = {
		X: Tale.X,
		Y: Tale.Y,
	};
};

// RETURNS NEIGHBOUR TALE IN THE dir DIRECTION
var nTale = function(Tale, dir) {
	return thisTale(Tale.X-(-delta[dir].X), 
					Tale.Y-(-delta[dir].Y));
}

// RETURNS NEIGHBOURHOOD OF TALES WITH Tale IN THE CENTER 
var taleNeighbourhood = function(Tale) {
	
	var Neighbourhood = new Object;

	Neighbourhood.center = copyTale(Tale);
	if (Tale.X > 0)
		Neighbourhood.left = nTale(Tale, "<");
	if (Tale.X < Field.w-1)
		Neighbourhood.right = nTale(Tale, ">");
	if (Tale.Y > 0)
		Neighbourhood.top = nTale(Tale, "^");
	if (Tale.Y < Field.h-1)
		Neighbourhood.bottom = nTale(Tale, "v");

	return Neighbourhood;
}

var taleCompare = function(Tale1, Tale2) {
	return ((Tale1.X == Tale2.X) && (Tale1.Y == Tale2.Y));
}

var checkSpawn = function(WallTale, ptNhood) {	
	for (var n in ptNhood)
		if (taleCompare(WallTale, ptNhood[n]))
			return true;

	return false;
}