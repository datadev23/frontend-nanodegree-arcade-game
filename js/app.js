// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // set the speed of the enemy
    this.speed = speed;
    this.x = x
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.x = this.x + 1;
    this.y*dt;
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y,speed) {

  this.sprite = 'images/char-boy.png';

    // set the speed of the enemy
    this.speed = speed;
    this.x = x
    this.y = y;

};


Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * dt;
    this.y * dt;
};

Player.prototype.render = function() {

    console.log("screenx :" + this.x);
      console.log("screeny :" + this.y);
    console.log("playerx :" + player.x);
      console.log("playery :" + player.y);

if(this.x < 0) {

    console.log("player and side collision");
    this.x = 0;
}

if(this.x > canvas.width - 105) {
    alert("player side collison ")
   this.x = canvas.width - 105;
}



if(this.y < 0) {
   this.y = 0;
}

if(this.y > canvas.height - 210) {
   this.y = canvas.height - 210;
   alert("hit detection for y");
}








else {
    console.log("no side hit detection");
}



    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};






// This class requires an update(), render() and
// a handleInput() method.

var allEnemies = [];
// create array of object instances
var player = new Player(10,400);
var myenemy = new Enemy(100,50);
var myenemy2 = new Enemy(100,150);

var myenemy3 = new Enemy(100,250);

var objectinst = [myenemy, myenemy2,myenemy3];
// Now instantiate your objects.

alert(objectinst[0]);

for(var i=0; i <objectinst.length; i++)
{


alert(objectinst[i].y);

allEnemies.push(objectinst[i]); 
/*
if(this.x > objectinst[i].x + 0 && this.x < objectinst[i].x + 200) {
    console.log("collision detected");
}
*/

if(this.x + 100 && this.y + 100 == this.y + 100 && myenemy.y + 100 ) {
alert("enemy has been hit");

}
else {

    console.log("player has not hit enemey");
}
/*
alert(((this.x > objectinst[i].x + 0 && this.x < objectinst[i].x + 400) 
    && (this.y > objectinst[i].y + 0 && this.y < objectisnt[i].y + 400)));
*/


}


Player.prototype.handleInput = function(keys) {

switch(keys) {

    case 'left':
    this.x =  (this.x - 10);
    break;
       case 'up':
    this.y = this.y - 10;
    break;
       case 'right':
    this.x = this.x + 10;
    break;
       case 'down':
     this.y = this.y + 10;
    break;
}

}



// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// 0 will be the edge of the canvas





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});





