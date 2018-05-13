
function Stamp(game, x, y, key, frame){
	//call to phaser.sprite
	Phaser.Sprite.call(this, game, x, y, key, frame);

	//add properties
	this.anchor.set(.5);

	//add physics
	game.physics.enable(this);
	this.body.collideWorldBounds = true;
	this.inputEnabled = true;
}

Stamp.prototype = Object.create(Item);
Stamp.prototype.constructor = Stamp;
//overRide update function to check for mouse events
Stamp.prototype.update = function(){
	//if dropped onto NPC.sprite, kill itself and the NPC
}