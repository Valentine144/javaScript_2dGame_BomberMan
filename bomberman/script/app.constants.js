// FIELD CONSTANTS
var Field = {
	w: 10,
	h: 10,
	side: 75,
};

// KEYBOARD CODES
var Control = {
	//arrows
	"UP": 38,
	"DOWN": 40,
	"LEFT": 37,
	"RIGHT": 39,
	//space
	"BOMB": 32,
};

// SIMPLE VECTORS < ^ v > 
var delta = {
	"^": {
		X: 0,
		Y: -1,
	},
	"v": {
		X: 0,
		Y: 1,
	},
	">": {
		X: 1,
		Y: 0,
	},
	"<": {
		X: -1,
		Y: 0,
	},
};

// STATES OF FIELD'S TALE
var tState = {
	// EMPTY TALE
	"None": 0, 

	// PLAYER'S OBJECTS
	"Player": 1,

	// UNAVAILABLE STEPPING
	"Wall": 2,
	"HiddenCoin": 3,
	"HiddenDoor": 4,

	// AVAILABLE STEPPING
	"Coin": -1,
	"Door": -2,
	
};

// PLAYER STATS, MODEL AND TALE INFO
var Player = {
	State: {
		Coins: 0,
		Walls: 0,
		isBombSet: false,
	},
};

var Walls = new Array; 
var Coins = new Array; 