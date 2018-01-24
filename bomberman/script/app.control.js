var keyHandler = function(e){

	if (isGameDone) return;

	switch (e.keyCode) {
		
		case Control["UP"]:
			Player.Move("^");
    		break;
		case Control["DOWN"]:
			Player.Move("v");
    		break;
		case Control["LEFT"]: 
			Player.Move("<");
    		break;
		case Control["RIGHT"]:
			Player.Move(">");
    		break;
	
		case Control["BOMB"]:
			Player.Bomb.set();
    		break; 
	}
}